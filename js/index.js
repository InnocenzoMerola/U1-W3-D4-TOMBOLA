const createTab = () => {
  const cells = document.getElementById("cells");

  for (let i = 0; i < 90; i++) {
    const cellsDiv = document.createElement("div");
    cellsDiv.className = "cell";
    // console.log(cellsDiv);
    const cellsH3 = document.createElement("h3");
    cellsH3.innerText = i;

    cellsDiv.appendChild(cellsH3);
    cells.appendChild(cellsDiv);
  }

  const buttonEl = document.getElementById("btn");

  buttonEl.onclick = () => {
    const numRand = Math.floor(Math.random() * 90);
    const arrayCells = document.querySelectorAll(".cell");
    console.log(numRand, arrayCells[numRand - 1]);
    const extract = arrayCells[numRand - 1];
    extract.style = "background-color: blue";
  };
};

window.onload = function () {
  createTab();
};
