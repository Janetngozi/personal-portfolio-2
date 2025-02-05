const seeMore = document.getElementById("seemore");
const text = document.getElementById("displaytext");
const seeLess = document.getElementById("seeless");

seeMore.addEventListener("click", function () {
  text.style.display = "block";
  seeMore.style.display = "none";
  seeLess.style.display = "block";
});
seeLess.addEventListener("click", function () {
  text.style.display = "none";
  seeLess.style.display = "none";
  seeMore.style.display = "block";
});
function updateTime() {
    let now = new Date();
    let utcTime = now.toISOString().split("T")[1].split(".")[0]; // Extracts HH:MM:SS from UTC
    document.getElementById("utc-time").textContent = utcTime;
}

window.onload = updateTime; // Updates time when page loads