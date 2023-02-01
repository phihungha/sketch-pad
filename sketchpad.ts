function generateGrid(numOfSquares: number): void {
  const sketchpad = document.querySelector(".sketchpad")!;

  while (sketchpad.lastChild) {
    sketchpad.removeChild(sketchpad.lastChild);
  }

  for (let i = 0; i < numOfSquares; i++) {
    const row = document.createElement("div");
    row.classList.add("sketchpad-row");

    for (let j = 0; j < numOfSquares; j++) {
      const square = document.createElement("div");
      square.classList.add("sketchpad-square");

      square.addEventListener("mouseover", (e) => {
        if (e.buttons === 1) {
          square.classList.add("painted-square");
        }
      });
      square.addEventListener("mousedown", () => {
        square.classList.add("painted-square");
      });

      row.appendChild(square);
    }

    sketchpad.appendChild(row);
  }
}

function clearGrid(): void {
  const paintedSquares = document.querySelectorAll(".painted-square")!;
  paintedSquares.forEach((e) => e.classList.remove("painted-square"));
}

(document.querySelector(".new-btn") as HTMLButtonElement).addEventListener("click", () => {
  let numOfSquaresInput = prompt("Enter number of squares (max: 100):", "20");
  if (numOfSquaresInput != null) {
    const numOfSquares = +numOfSquaresInput;
    if (numOfSquares <= 100) {
      generateGrid(numOfSquares);
    }
  }
});

(document.querySelector(".clear-btn") as HTMLButtonElement).addEventListener("click", () => {
  clearGrid();
});

generateGrid(20);
