// demo 3
// JS event propagation

var tds = document.getElementsByTagName('td');
var trs = document.getElementsByTagName('tr');
var table = document.getElementsByTagName('table')[0];

var clicky = function(e) {
  alert( this.innerHTML );
  //Q: What will happen when next line is uncommented?
  e.stopPropagation();

  // alert does not popup
  // prediction sort of incorrect, only the table clicky pops up
  // only displays one alert (the one with the highest priority)

};

for (var x=0; x < tds.length; x++) {
  tds[x].addEventListener('click', clicky);
}

for (x=0; x < trs.length; x++) {
  trs[x].addEventListener('click', clicky);
}

//Predict, then test...
//Q: What effect does the boolean arg have?
//   (Leave exactly 1 version uncommented to test...)

// ignores e.stopPropagation()
// prediction incorrect
// true makes the listener highest priority
// false does not change the listener priority

table.addEventListener('click', clicky, true);
// table.addEventListener('click', clicky, false);

// Q: When user clicks on a cell, in what order will the pop-ups appear?
// when true, table, td, tr
// when false, td, tr, table