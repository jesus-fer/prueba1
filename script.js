document.addEventListener("DOMContentLoaded", () => {
    const videoInput = document.getElementById("videoInput");
    const videoContainer = document.getElementById("videoContainer");

    function uploadVideo() {
        const file = videoInput.files[0];
        if (!file) {
            alert("Por favor, selecciona un video.");
            return;
        }
        
        const videoUrl = URL.createObjectURL(file);
        displayVideo(videoUrl);
    }

    function displayVideo(videoUrl) {
        const videoItem = document.createElement("div");
        videoItem.classList.add("video-item");

        const video = document.createElement("video");
        video.src = videoUrl;
        video.controls = true;
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.onclick = () => {
            videoContainer.removeChild(videoItem);
        };

        videoItem.appendChild(video);
        videoItem.appendChild(deleteButton);
        videoContainer.appendChild(videoItem);
    }

    window.uploadVideo = uploadVideo;
});
