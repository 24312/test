const myAssignment = document.getElementById('myAssignment');
const myInput = document.getElementById('myInput');
const feedback = document.getElementById('feedback');

let assignments = [];
let counter = 0;

function init(){
  //
  for(i=0; i<10; i++){
  assignments.push(makeSum());
}
console.log(assignments);
console.log(assignments[5]);
console.log(assignments[5].numA);
myAssignment
  //console.log(makesum())
}

function inputHandler(evt){
  //
}

function makeSum(){
  //
  let mySum = {};
  mySum.numA = getNumber();
  mySum.numB = getNumber();
  mySum.ans = mySum.numA * mySum.numB
  return mySum;
}

function evaluate(){

}

function getNumber(){
  let number = Math.floor(Math.random()*9)+1;
  return number;
}

myInput.addEventListener('keydown',inputHandler,false);

init();
