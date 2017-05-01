var Game = function() {
  this.tracker = ['', '', '', '', '', '', '', ''];
  this.turn = 0;
};

Game.prototype.clearBoard = function() {
  this.tracker = ['', '', '', '', '', '', '', ''];
  this.turn = 0;
};

$('.zero').on('click', function() {
  this.tracker[0] = this.turn % 2 === 0 ? 'X' : 'O';
  this.turn++;
});

$('.one').on('click', function() {
  this.tracker[1] = this.turn % 2 === 0 ? 'X' : 'O';
  this.turn++;
});

$('.two').on('click', function() {
  this.tracker[2] = this.turn % 2 === 0 ? 'X' : 'O';
  this.turn++;
});

$('.three').on('click', function() {
  this.tracker[3] = this.turn % 2 === 0 ? 'X' : 'O';
  this.turn++;
});

$('.four').on('click', function() {
  this.tracker[4] = this.turn % 2 === 0 ? 'X' : 'O';
  this.turn++;
});

$('.five').on('click', function() {
  this.tracker[5] = this.turn % 2 === 0 ? 'X' : 'O';
  this.turn++;
});

$('.six').on('click', function() {
  this.tracker[6] = this.turn % 2 === 0 ? 'X' : 'O';
  this.turn++;
});

$('.seven').on('click', function() {
  this.tracker[7] = this.turn % 2 === 0 ? 'X' : 'O';
  this.turn++;
});

$('.eight').on('click', function() {
  this.tracker[0] = this.turn % 2 === 0 ? 'X' : 'O';
  this.turn++;
});
