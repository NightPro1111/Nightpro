// animation counting up
let valueDisplays = document.querySelectorAll(".count");
let interval = 1000;
valueDisplays.forEach((valueDisplays) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplays.getAttribute("data-count"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplays.textContent = startValue;
    if (startValue === endValue) {
      clearInterval(counter);
    }
  }, duration);
});

// param ?key=
const myKeyValue = window.location.search;
const param = new URLSearchParams(myKeyValue);
const key = param.get("key");

const box_key = document.getElementById("copyKey");
box_key.onclick = function () {
  box_key.textContent = `Your key: ${key}`;
};

//anti bú src
function visitWebsite() {
  var select = document.getElementById("websiteSelect");
  var selectedUrl = select.value;
  window.location.href = selectedUrl;
}
document.addEventListener("keydown", function (event) {
  if (event.key === "F12") {
    event.preventDefault();
    window.location.href =
      "https://www.facebook.com/profile.php?id=100055092470179";
    console.log("Developer by PhucXingum")
  }
  if (event.ctrlKey && event.shiftKey && event.key === "I") {
    event.preventDefault();
    window.location.href =
      "https://www.facebook.com/profile.php?id=100055092470179";
      console.log("Developer by PhucXingum")
  }
  if (event.ctrlKey && event.key === "u") {
    event.preventDefault();
    window.location.href =
      "https://www.facebook.com/profile.php?id=100055092470179";
      console.log("Developer by PhucXingum")
  }
});
document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});
(function () {
  const element = new Image();
  Object.defineProperty(element, "id", {
    get: function () {
      window.location.href =
        "https://www.facebook.com/profile.php?id=100055092470179";
        console.log("Developer by PhucXingum")
    },
  });
  console.log(element);
})();
