const createTab = () => {
  const container = document.getElementsByClassName("table");

  for (let i = 0; i < 90; i++) {
    const tabNumDiv = document.createElement("div");
    tabNumDiv.classList.add("cells");

    const tabNumH3 = document.createElement("h3");
    tabNumH3.innerText = i + 1;

    tabNumDiv.appendChild(tabNumH3);
    table.appendChild(tabNumDiv);

    const button = document.getElementById("btn");
    button.onclick = (event) => {
      console.log(event.currentTarget);

      numberRestColor();
      event.currentTarget.classList.add("restColor");
    };
  }
};

const numberRestColor = () => {
  const colorBack = document.querySelector(".restColor");
  console.log("colorBack", colorBack);
};

const randNum = (e) => {
  const randomicNumber = Math.floor(Math.random() * e.length);
  const rand = e.splice(randomicNumber, 1)[0];
  return rand;
};

window.onload = function () {
  createTab();
  const btn = document.getElementById("btn");
};
