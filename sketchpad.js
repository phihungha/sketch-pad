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
            square.addEventListener("mouseover", function () {
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
document.querySelector(".new-btn").addEventListener("click", function () {
    var numOfSquaresInput = prompt("Enter number of squares (max: 100):", "10");
    if (numOfSquaresInput != null) {
        var numOfSquares = +numOfSquaresInput;
        if (numOfSquares <= 100) {
            generateGrid(numOfSquares);
        }
    }
});
generateGrid(10);
