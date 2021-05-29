let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelectorAll('#message');
let messageText = document.querySelector('#message p');
let secondPlayer; //choose ai and person

//count

let player1 = 0;
let player2 = 0;

//adding listener to boxes

for (let i = 0; i < boxes.length; i++) {

  //when box is touched
  boxes[i].addEventListener('click', function () {
    let el = checkEl(player1, player2);

    //check if x/o
    if (this.childNodes.length === 0) {

      let cloneEl = el.cloneNode(true);
      this.appendChild(cloneEl);

      //saving match
      if (player1 === player2) {
        player1++;

      } else {
        player2++;
      }

    }

  });
}

function checkEl(player1, player2) {
  if (player1 === player2) {
    //x always begin
    el = x;
  } else {
    el = o;
  }

  return el;
}