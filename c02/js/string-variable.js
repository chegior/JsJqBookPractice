var username;
var message;

username = 'Molly';
//message = 'See our upcoming range';
message = '<a href=\"sale.html\">25% off!</a>';
var elName = document.getElementById('name');
elName.textContent = username;

var elNote = document.getElementById('note');
//elNote.textContent = message;
elNote.innerHTML = message;//using the html with a scape value
console.log(username);