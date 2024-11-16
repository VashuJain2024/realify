const images = ["https://github.com/VashuJain2024/MiniProject_2ndYear/blob/main/ImageSingleProductPage/image1.png", "https://github.com/VashuJain2024/MiniProject_2ndYear/blob/main/ImageSingleProductPage/image2.png", "https://github.com/VashuJain2024/MiniProject_2ndYear/blob/main/ImageSingleProductPage/image3.png", "https://github.com/VashuJain2024/MiniProject_2ndYear/blob/main/ImageSingleProductPage/image4.png", "https://github.com/VashuJain2024/MiniProject_2ndYear/blob/main/ImageSingleProductPage/image5.png"];

let swapImage = document.getElementById("swapImage");
let mainImage = document.getElementById("mainImage");

function swapimage() {
    let index = images.indexOf(mainImage.src); // Get image file name from src
    if (index !== -1) {
        index = (index + 1) % images.length;
        mainImage.src = images[index];
    } else {
        console.error("Current image not found in the images array");
    }
}

function startCamera() {
    // Check if the browser supports getUserMedia
    // const blocks = document.getElementById("blocks");
    // blocks.style.height = '-webkit-fill-available';

    const video = document.getElementById('video');
    video.style.display = 'block';

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Request access to the camera
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                // Set the video source to the camera stream
                document.getElementById('video').srcObject = stream;
            })
            .catch(function (error) {
                console.log("Error accessing camera: ", error);
            });
    } else {
        alert("Camera not supported in this browser.");
    }
}

// document.getElementById('loadAR').addEventListener('click', function () {
//     const arViewer = document.getElementById('arViewer');
//     arViewer.src = "https://your-hosted-link-to-WebGL-build"; // Replace with your hosted WebGL link
//     arViewer.style.display = "block";
// });

