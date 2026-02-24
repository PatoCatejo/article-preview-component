const shareBtn = document.getElementById("shareBtn");
const shareTooltip = document.getElementById("shareTooltip");

shareBtn.addEventListener("click", () => {
  shareTooltip.classList.toggle("active");
  shareBtn.classList.toggle("active-btn");
});
