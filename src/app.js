let who = ["my dog", "my granma", "his turtle", "my bird"];
let what = ["eat", "pissed", "crushed", "broked"];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function who1(max = who.length) {
  var randomNumber = Math.floor(Math.random() *max);
  return randomNumber;
}

function what1(max = what.length) {
  var randomNumber = Math.floor(Math.random() *max);
  return randomNumber;
}

function when1(max = when.length) {
  var randomNumber = Math.floor(Math.random() *max);
  return randomNumber;
}

function onLoad() {
  let excusa1 = who[who1()];
  let excusa2 = what[what1()];
  let excusa3 = when[when1()];
  let espacio = " ";
  let cadena = excusa1 + espacio + excusa2 + espacio + excusa3;
  return cadena;
}
