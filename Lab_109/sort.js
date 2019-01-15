
var array = [];
var array2 = [];

var numOfSelecSort = 0;
var numOfBubbleSort = 0;

var n = 10

//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  randomArray(n);
  console.log(array);
  mySort();
  console.log(array2);
  bubbleSort(n);

}

//  The draw function is called @ 30 fps
function draw() {

}

function randomArray(length){
  for(var i = 0; i < length; i++){
    randomNumber = Math.floor(random(1, n))
    array.push(randomNumber);
    randomNumber2 = Math.floor(random(1, n))
    array2.push(randomNumber2);
  }
}




function mySort(){

    var length = array.length
    var min;

    for (i = 0; i < length; i++){
        //set minimum to this position
        min = i;
        //check the rest of the array to see if anything is smaller
        for (j = (i + 1); j < length; j++){
            if (array[j] < array[min]){
                min = j;
            }
        }
        //if the minimum isn't in the position, swap it
        if (i != min){
            swap(array, i, min);
            numOfSelecSort = numOfSelecSort + 1;
        }
    }
    console.log(array);
}

function swap(a, firstValue, secondValue){
    var temp = a[firstValue];
    a[firstValue] = a[secondValue];
    a[secondValue] = temp;
}

function bubbleSort(){
  for(i = array2.length - 1; i > 0; i--){
    for(j = 1; j <= i; j++){
      if (array2[j] < array2[j-1]) {
        var lemp = array2[j];
        array2[j] = array2[j-1];
        array2[j-1] = lemp;
        numOfBubbleSort = numOfBubbleSort + 1;
      }
    }
  }
  console.log(array2);
}
