const videoElement = document.getElementById('video')
const button = document.getElementById("button")

// Prompt user to select media stream, then play
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {   
            videoElement.removeAttribute("hidden");         
            videoElement.play();
        }
    } 
    catch (err){
        console.log(err)
    }
}

// Start picture in picture mode
button.addEventListener("click", async () => {
    button.disable = true;
    await videoElement.requestPictureInPicture()
    button.disable = false;
})

selectMediaStream()