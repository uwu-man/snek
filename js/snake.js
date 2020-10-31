let createSnake = (board, startSize = 3) => {
  let snake = {
    position: { x: 0, y: 0 },
    velocity: { x: 0, y: 0 },
    tail: [],
    size: startSize,
  };

  snake.spawn = () => {
    let startPosition = {
      x: random.int(snake.size, board.size - snake.size),
      y: random.int(snake.size, board.size - snake.size),
    };
    snake.position = startPosition;

    //velocity
    let randomAxis = random.coinFlip("x", "y");
    let distanceFromAxis = startPosition[randomAxis];
    let distanceToAxisEnd = board.size - startPosition[randomAxis];

    snake.velocity[randomAxis] = distanceFromAxis < distanceToAxisEnd ? 1 : -1;

    //set tail
    let stillAxis = randomAxis == "x" ? "y" : "x";
    for (let i = 1; i < snake.size + 1; i++) {
      let tailSegment = {};
      tailSegment[randomAxis] =
        startPosition[randomAxis] + i * -snake.velocity[randomAxis];
      tailSegment[stillAxis] = startPosition[stillAxis];
      snake.tail.push(tailSegment);
    }

    board.renderSnake(snake);
  };

  
  snake.forward = () => {
    
    let cont = snake.tail.length-1

    while (cont>0){
      snake.tail[cont]["x"] = snake.tail[cont-1]["x"];
      snake.tail[cont]["y"] = snake.tail[cont-1]["y"];
      cont = cont-1;
    }

    snake.tail[0]["x"]=snake.position.x
    snake.tail[0]["y"]=snake.position.y
    
    snake.position.x += snake.velocity.x;
    snake.position.y += snake.velocity.y;
  
};

  snake.collided = (board) =>
    snake.position.x >= board.size ||
    snake.position.y >= board.size ||
    snake.position.x < 0 ||
    snake.position.y < 0;

  snake.collidedself = () => {
    let i=0;
    while (i< snake.size){
    if (snake.position.x == snake.tail[i].x){
      if (snake.position.y == snake.tail[i].y){
        return true;
      };
    };
    i ++;
    };
    return false;
  }

  snake.changeDirection = (newVelocity) => {
    if (snake.velocity ["x"] == newVelocity["x"] ) return snake.velocity;
    if (snake.velocity ["y"] == newVelocity["y"] ) return snake.velocity;
    if (snake.position ["x"] + newVelocity["x"] == snake.tail[0]["x"] ) return snake.velocity;
    if (snake.position ["y"] + newVelocity["y"] == snake.tail[0]["y"]) return snake.velocity;

    snake.velocity = newVelocity;
  };

  return snake;
};
