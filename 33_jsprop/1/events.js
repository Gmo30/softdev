// demo 1
// JS event propagation

var tds = document.getElementsByTagName('td');

var clicky = function(e) {
  alert( this.innerHTML );
};

for (var x=0; x < tds.length; x++) {
  tds[x].addEventListener('click', clicky);
}

// make a pop up when you click a table data element
// prediction was correct

// alert also stops all other functions on the website