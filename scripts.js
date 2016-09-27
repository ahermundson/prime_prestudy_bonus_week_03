function add(num) {
  return num + 2;
}

function multiply(num) {
  return num * 3;
}

function subtract(num) {
  return num - 4;
}

add(multiply(subtract(2)));

/*
Both the add and multiply functions have functions being used as a parameter.
First the subtract function will be run (in the case returning -2),
then the multiply function will run using what subtract(2) returns as its parameter,
then the add function runs using what multiply() returns as its parameter.
*/
