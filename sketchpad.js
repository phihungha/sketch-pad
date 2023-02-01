function generateGrid(numOfSquares) {
    var sketchpad = document.querySelector(".sketchpad");
    while (sketchpad.lastChild) {
        sketchpad.removeChild(sketchpad.lastChild);
    }
    for (var i = 0; i < numOfSquares; i++) {
        var row = document.createElement("div");
        row.classList.add("sketchpad-row");
        var _loop_1 = function (j) {
            var square = document.createElement("div");
            square.classList.add("sketchpad-square");
            square.addEventListener("mouseover", function (e) {
                if (e.buttons === 1) {
                    square.classList.add("painted-square");
                }
            });
            square.addEventListener("mousedown", function () {
                square.classList.add("painted-square");
            });
            row.appendChild(square);
        };
        for (var j = 0; j < numOfSquares; j++) {
            _loop_1(j);
        }
        sketchpad.appendChild(row);
    }
}
function clearGrid() {
    var paintedSquares = document.querySelectorAll(".painted-square");
    paintedSquares.forEach(function (e) { return e.classList.remove("painted-square"); });
}
document.querySelector(".new-btn").addEventListener("click", function () {
    var numOfSquaresInput = prompt("Enter number of squares (max: 100):", "20");
    if (numOfSquaresInput != null) {
        var numOfSquares = +numOfSquaresInput;
        if (numOfSquares <= 100) {
            generateGrid(numOfSquares);
        }
    }
});
document.querySelector(".clear-btn").addEventListener("click", function () {
    clearGrid();
});
generateGrid(20);
