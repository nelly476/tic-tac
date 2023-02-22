(function () {
  const X_CLASS = "x";
  const CIRCLE_CLASS = "circle";
  const cellElements = document.querySelectorAll("[data-cell]");
  let circleTurn = false;
  const board = document.querySelector("#board");
  const winningMessage = document.querySelector("#winningMessage");
  const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const startGame = (() => {
    cellElements.forEach((cell) => {
      cell.addEventListener("click", handleClick, { once: true });
    });
    setBoardHoverClass();
  })();

  function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    placeMark(cell, currentClass);
    checkWin(currentClass, cell);
    swapTurns();
    setBoardHoverClass();
  }

  function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
  }

  function swapTurns() {
    circleTurn = !circleTurn;
  }

  function setBoardHoverClass() {
    if (circleTurn) {
      board.classList.add(CIRCLE_CLASS);
      board.classList.remove(X_CLASS);
    } else {
      board.classList.add(X_CLASS);
      board.classList.remove(CIRCLE_CLASS);
    }
  }

  function checkWin(currentClass) {
    let checked = [];
    cellElements.forEach((cell, index) => {
      if (cell.classList.contains(currentClass)) {
        checked.push(index);
      }
    });
    let victory = WINNING_COMBINATIONS.find((elem) =>
      elem.every((item) => checked.includes(item))
    );
    if (victory) {
      winningMessage.classList.add("show");
      document.querySelector("[data-winning-message-text]").textContent = `
    ${currentClass} won!
    `;
      document
        .querySelector("#restartButton")
        .addEventListener("click", restart);
    }
  }

  function restart() {
    cellElements.forEach((elem) => {
      elem.classList.remove(CIRCLE_CLASS);
      elem.classList.remove(X_CLASS);
    });
    winningMessage.classList.remove("show");
    startGame();
  }
})();
