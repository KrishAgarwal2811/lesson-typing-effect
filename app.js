window.onload = () => {
  document.body.classList.remove("loading");
  document.body.removeChild(document.querySelector("#holder"));
  document.querySelector("section").style.display = "block";
};

// Taking milli seconds as argument
const pause = (ms) => {
  return new Promise((resolve) => {
    // Resolving the Promise after the given time
    setTimeout(resolve, ms);
  });
};

async function start() {
  document.querySelector("section").removeChild(document.querySelector("b"));
  const elem = document.querySelector("#box");
  const str = "Hello everyone I want this text to be typed out =)";
  for (let i = 0; i < str.length; i++) {
    let character = str.charAt(i);
    elem.textContent += character;
    await pause(100);
  }
}
