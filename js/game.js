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
    let i = 0;
    snake.forward();

    if (snake.collided(board)) return game.over();
    if (snake.collidedself()) return game.over();

    if (snake.position.x == food['x']){
      if (snake.position.y == food['y]']){
      };
    };

    if (food['x'] == 0){
      food = {
        x: Math.round(Math.random()*(board.size-1)),
        y: Math.round(Math.random()*(board.size-1)),
      };
    };

    board.render();
    board.renderFood(food);

    if (food.x == snake.position.x){
      if (food.y == snake.position.y){
      snake.size ++;
      snake.tail[snake.size-1] = {
        x: snake.tail[snake.size-2].x - snake.velocity.x,
        y: snake.tail[snake.size-2].y - snake.velocity.y,
      }
      food = {x:0};
      };
    } 
    board.renderSnake(snake);

  };

  game.over = () => {
    console.log("game over");
    running = false;
    clearInterval(interval);
  };

  return game;
};
