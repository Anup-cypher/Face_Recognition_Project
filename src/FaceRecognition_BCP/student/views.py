from django.shortcuts import render, redirect
from .models import Student
import cv2
import os

Id = 0
Name = ""

def register(request):
    global Id, Name
    Id = request.POST['Id']
    Name = request.POST['Firstname']
    Student.objects.create(
        Id =request.POST['Id'],
        Firstname=request.POST['Firstname'],
        Lastname=request.POST['Lastname'],
        Gender=request.POST['Gender'],
        Phone_No=request.POST['Phone_No'],
        Age=request.POST['Age'],
        Semester=request.POST['Semester'])
    os.chdir('/home/anup/Pictures/StudentFaces')
    try:
        os.mkdir(Id)
    except FileExistsError:
        os.rename(Id, Id)
    return redirect('userregister_View')

def camera(request):
    global Id, Name
    print(type(Id))
    face_cascade = cv2.CascadeClassifier(
        '/home/anup/PycharmProjects/Imagemodulator/venv/lib/python3.6/site-packages/cv2/data/haarcascade_frontalface_default.xml')

    # reading the image as it is

    video = cv2.VideoCapture(0)
    count = 0
    while (True):
        # capture frame -by-frame

        ret, frame = video.read()
        gray_img = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = face_cascade.detectMultiScale(gray_img, scaleFactor=1.3, minNeighbors=5)
        for (x, y, w, h) in faces:
            count += 1
            #  print(x,y,w,h)
            roi_gray = gray_img[y:y + h, x:x + w]
            roi_color = frame[y:y + h, x:x + w]
            cv2.imwrite('/home/anup/Pictures/StudentFaces/{}/{}'.format(int(Id), Name) + str(count)+ '.jpg', roi_color)
            cv2.putText(frame, str(count), (50,50), cv2.FONT_HERSHEY_TRIPLEX, 1, (150, 200, 150), 2, cv2.LINE_AA)

            cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 3)
        cv2.imshow("Gray", frame)
        k = cv2.waitKey(100)
        if k == 27 or count == 200:  # wait for ESC key to exit
            break

    video.release()
    cv2.destroyAllWindows()

    return redirect('userregister_View')
