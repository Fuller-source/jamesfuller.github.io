const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/emoji.png") {
    myImage.setAttribute("src", "images/emoji2.png");
  } else {
    myImage.setAttribute("src", "images/emoji.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myButton.addEventListener("click", () => {
  setUserName();
});

/*
function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Just a Lil Bit, ${myName}`;
}
*/

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Just a Lil Bit, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Just a Lil Bit, ${storedName}`;
}
