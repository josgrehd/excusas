let who = ["my dog", "my granma", "his turtle", "my bird"];
let what = ["eat", "pissed", "crushed", "broked"];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function who1(max = 3, min = 0) {
  var randomNumber = Math.floor(Math.random() * (max + 1 - min) + min);
  return parseInt(randomNumber);
}

function what1(max = 3, min = 0) {
  var randomNumber = Math.floor(Math.random() * (max + 1 - min) + min);
  return parseInt(randomNumber);
}

function when1(max = 4, min = 0) {
  var randomNumber = Math.floor(Math.random() * (max + 1 - min) + min);
  return parseInt(randomNumber);
}

function onLoad() {
  var excusa1 = who[who1()];
  var excusa2 = what[what1()];
  var excusa3 = when[when1()];
  var espacio = " ";
  var cadena = excusa1 + espacio + excusa2 + espacio + excusa3;
  return cadena;
}
