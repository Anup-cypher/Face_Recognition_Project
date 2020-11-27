from django.shortcuts import render, redirect
from student.models import Student
import cv2
import pickle

# Create your views here.
def admin_View(request):
    return render(request, "login.html")


def dashboard(request):
    return render(request, "dashboard.html")

def dashboard_View(request):
    return render(request, "dashboard.html")

def userregister_View(request):

    return render(request, "userregister.html")

def userlist_View(request):
    student = Student.objects.all()
    myContext = {
        "students": student
    }
    return  render(request, "userlist.html", myContext)

def report_View(request):
    return  render(request,"report.html")

def attendancesheet_View(request):
    return render(request, "attendancesheet.html")

def home_View(request):
    return  render(request, "camera.html")

def camera_recog(request):
    face_cascade = cv2.CascadeClassifier(
        '/home/anup/PycharmProjects/Imagemodulator/venv/lib/python3.6/site-packages/cv2/data/haarcascade_frontalface_default.xml')

    # reading the image as it is
    recognizer = cv2.face.LBPHFaceRecognizer_create()
    recognizer.read("/home/anup/Dev/BCP/BCPProject/src/FaceRecognition_BCP/pages/trainer.yml")
    labels = {"person_name": 1}
    with open("/home/anup/Dev/BCP/BCPProject/src/FaceRecognition_BCP/pages/labels.pickle", "rb") as f:
        og_labels = pickle.load(f)
        labels = {v: k for k, v in og_labels.items()}
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
            id_, conf = recognizer.predict(roi_gray)
            if conf >= 10 and conf <= 85:
                print(id_)
                print(labels[id_])
                Id = id_
                font = cv2.FONT_HERSHEY_SIMPLEX
                name = labels[id_]
                color = (255, 255, 255)
                stroke = 2
                cv2.putText(frame, name, (x, y), font, 1, color, stroke, cv2.LINE_AA)
            cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 3)
        cv2.imshow("Gray", frame)
        k = cv2.waitKey(1)
        if k == 27:  # wait for ESC key to exit
            break

    video.release()
    cv2.destroyAllWindows()

    return redirect('homeView')