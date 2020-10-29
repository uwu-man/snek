let createGame = (config = { speed: 100 }) => {
  let game = {};
  let started = false;
  game.start = (snake, board) => {
    if (started) return;
    started = true;

    setInterval(() => game.gameStep(snake, board), config.speed);
  };

  game.gameStep = (snake, board) => {
    snake.forward();
    board.render();
    board.renderSnake(snake);
  };

  return game;
};
