let createGame = (config = { speed: 100 }) => {
  let game = {};
  let running = false;
  let interval;

  game.start = (snake, board) => {
    if (running) return;
    running = true;

    interval = setInterval(() => game.gameStep(snake, board), config.speed);
  };

  game.gameStep = (snake, board) => {
    snake.forward();

    if (snake.collided(board)) return game.over();

    board.render();
    board.renderSnake(snake);
  };

  game.over = () => {
    console.log("game over");
    running = false;
    clearInterval(interval);
  };

  return game;
};
