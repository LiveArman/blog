

(function() {

document.getElementById("db").innerHTML = '<div class="download-button-container"> <button class="download-button"> '+ btn1 +' <span class="download-icon">      <svg      xmlns="http://www.w3.org/2000/svg"        class="h-6 w-6"         fill="none"          viewBox="0 0 24 24"       stroke="currentColor"       stroke-width="2" >        <path         stroke-linecap="round"            stroke-linejoin="round"          d="M19 14l-7 7m0 0l-7-7m7 7V3"         />        </svg>      </span>    </button>    <div class="download-info">    <h3>Waiting For '+remainingTime+' seconds.</h3>  </div> </div>';


})();



const downloadButton = document.querySelector(
".download-button-container .download-button"
);
const downloadHeading = document.querySelector(".download-info h3");
const downloadInfo = document.querySelector(".download-info");

let downloadTimer;

let linkDisplayed = false;

const showDownloadLink = () => {
if (!linkDisplayed) {
  const downloadLink = document.createElement("a");
  downloadLink.href = url;
  downloadLink.innerHTML = btn ;
  downloadLink.classList.add("download-link");
  downloadInfo.appendChild(downloadLink);
}
linkDisplayed = true;
};

downloadButton.addEventListener("click", () => {
downloadButton.classList.add("active");

downloadTimer = setInterval(() => {
  remainingTime--;

  if (remainingTime <= 0) {
    clearInterval(downloadTimer);
    showDownloadLink();
    downloadHeading.innerHTML = "Here is the download link.";
  } else {
    downloadHeading.innerHTML = `Waiting For ${remainingTime} seconds.`;
  }
}, 1000);
});
