function loadFile(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
    var imageShow = document.getElementById('imageShow');
    var cross = document.getElementById('deleteImg');
    if (image.src > [1]) {
        imageShow.style.display = "none";
        cross.style.display = "block";
    } else {
        cross.style.display = "block";
        image.style.visibility = "visible";

    }
}

window.addEventListener("click", function (event) {
    var cross = document.getElementById('deleteImg');
    var image = document.getElementById('output');
    var imageShow = document.getElementById('imageShow');
    var file = document.getElementById('id_photo');

    if (event.target == cross) {
        image.removeAttribute('src');
        cross.style.display = "none";
        imageShow.style.display = "block";
        file.value = "";
    } else {
        image.hasAttribute('src');
    }
});

// var vido = document.getElementById('vieo');

// // Get access to the camera!
// if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//     // Not adding `{ audio: true }` since we only want video now
//     navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
//         //video.src = window.URL.createObjectURL(stream);
//         video.srcObject = stream;
//         video.play();
//     });
// }

function graph(){
    var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','Sept','Oct','Nov','Dec'],
        datasets: [{
            label: 'Monthly Attendance',
            backgroundColor: '#6089e0',
            borderColor: '#476cba',
            data: [0, 10, 5, 2, 20, 30, 45,40,35,20,30,25]
        }]
    },

    // Configuration options go here
    options: {}
});
}

graph();

