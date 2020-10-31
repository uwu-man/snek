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

  board.renderFood = (food) => {
    let foodSquare = document.getElementById(
      `${food['x']}:${food['y']}`
    );
    foodSquare.className = "foodPosition";
  }

  board.renderSnake = (snake) => {
    let headSquare = document.getElementById(
      `${snake.position.x}:${snake.position.y}`
    );
    headSquare.className = "snakeHead";

    //tail
    snake.tail.forEach((tail) => {
      let tailSquare = document.getElementById(`${tail.x}:${tail.y}`);
      tailSquare.className = "snakeTail";
    });
  };
  return board;
};
