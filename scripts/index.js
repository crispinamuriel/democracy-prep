document.querySelector("#clicked").addEventListener("click", () => {
  if (document.getElementById("hide").style.display === "block") {
    document.getElementById("hide").style.display = 'none';
  } else {
    document.getElementById("hide").style.display = "block";
  }
});
