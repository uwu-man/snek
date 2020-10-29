let createBoard = (size = 20) => {
  let board = {};
  board.render = () => {
    let rendered = "";
    for (let x = 0; x < size; x++) {
      rendered += "<tr>";
      for (let y = 0; y < size; y++) {
        rendered += `<td id="${y}:${x}"> </td>`;
      }
    }
    return rendered;
  };
  return board;
};
