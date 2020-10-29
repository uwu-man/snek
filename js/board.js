let createBoard = (document, size = 20) => {
  let board = {
    size: size,
  };
  board.render = () => {
    let rendered = "";
    for (let x = 0; x < size; x++) {
      rendered += "<tr>";
      for (let y = 0; y < size; y++) {
        rendered += `<td id="${y}:${x}"> </td>`;
      }
    }
    document.getElementById("board").innerHTML = rendered;
  };

  board.renderSnake = (snake) => {
    let headSquare = document.getElementById(
      `${snake.position.x}:${snake.position.y}`
    );

    headSquare.className = "snakeHead";
  };
  return board;
};
