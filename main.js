// Setting the level to Easy
function easy() {
  document.getElementById('circle')
    .style.animationDuration = '20s';
  document.getElementById('circle')
    .className = 'crcl';
}

// Setting the level to Medium
function medium() {
  document.getElementById('circle')
    .style.animationDuration = '15s';
  document.getElementById('circle')
    .className = 'crcl';
}

// Setting the level to Hard
function hard() {
  document.getElementById('circle')
    .style.animationDuration = '12s';
  document.getElementById('circle')
    .className = 'crcl';
}

let counter = 0;

// Function to count the number of taps
// Display score
function count() {
  counter = parseInt(1) + parseInt(counter);
  let scr = document.getElementById('score');
  scr.innerHTML = counter;
}

// Restart the game
function restart() {
  window.location.reload();
}