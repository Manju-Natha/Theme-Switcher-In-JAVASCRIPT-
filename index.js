let bgContainerEl = document.getElementById("bgContainer");
let bgHeadingEl = document.getElementById("bgHeading");
let useInputEl = document.getElementById("useInput");

let lightThemeImgUrl =
  "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
let darkThemeImgUrl =
  "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";

function themVaalue(event) {
  if (event.key === "Enter") {
    let userValue = useInputEl.value;

    if (userValue === "Light") {
      bgContainerEl.style.backgroundImage = lightThemeImgUrl;
      bgHeadingEl.style.color = "#014d40";
    } else if (userValue === "Dark") {
      bgContainerEl.style.backgroundImage = darkThemeImgUrl;
      bgHeadingEl.style.color = "#ffffff";
    } else {
      alert("Please Enter the Valid them");
    }
  }
}

useInputEl.addEventListener("keydown", themVaalue);
