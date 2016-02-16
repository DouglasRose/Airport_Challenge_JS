function Weather() {
  this.report = generator();
}

function generator() {

  var rand = Math.floor((Math.random() * 1) + 0);

  if(rand == 0)
    return 'stormy';
  else
    return 'sunny';
}
