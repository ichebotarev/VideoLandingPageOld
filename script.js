/*function modifySource(vidElem) {
    document.querySelector("video-source > source").src = "cctv5.mp4"
    vidElem.innerHTML = "<source src='cctv5.mp4' type='video / mp4'> ";
}

/*
const vidContainer = document.getElementsByClassName("landing-container");
vidContainer.addEventListener('click', modifySource);

*/

const fileName = "cctv5.mp4";
//var weird = document.videoSource.getAttribute('src');



document.getElementsByClassName('video-overlay').addEventListener('click', function() {
    document.getElementById('videoSource').src = 'cctv7.mp4';
});