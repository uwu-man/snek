let createSnake = (board, startSize = 3) => {
  let snake = {
    position: { x: 0, y: 0 },
    velocity: { x: 0, y: 0 },
    size: startSize,
  };

  snake.spawn = () => {
    let startPosition = {
      x: Math.floor(Math.random() * board.size),
      y: Math.floor(Math.random() * board.size),
    };

    let randomAxis = Math.random() > 0.5 ? "x" : "y";
    let distanceFromAxis = startPosition[randomAxis];
    let distanceToAxisEnd = board.size - startPosition[randomAxis];

    snake.velocity[randomAxis] = distanceFromAxis < distanceToAxisEnd ? 1 : -1;
    snake.position = startPosition;

    console.log(snake.velocity);

    board.renderSnake(snake);
  };

  return snake;
};
