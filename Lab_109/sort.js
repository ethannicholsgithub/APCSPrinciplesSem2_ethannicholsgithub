
var a = [3,1,4,2,5];
var b = [3,1,4,2,5];


//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  console.log(a);
  mySort();
  console.log(b);
  bubbleSort();

}

//  The draw function is called @ 30 fps
function draw() {

}




function mySort(){

    var length = a.length
    var min;

    for (i = 0; i < length; i++){

        //set minimum to this position
        min = i;

        //check the rest of the array to see if anything is smaller
        for (j = (i + 1); j < length; j++){
            if (a[j] < a[min]){
                min = j;
            }
        }

        //if the minimum isn't in the position, swap it
        if (i != min){
            swap(a, i, min);
        }
    }

    console.log(a);
}

function swap(a, firstValue, secondValue){
    var temp = a[firstValue];
    a[firstValue] = a[secondValue];
    a[secondValue] = temp;
}

function bubbleSort(){
  for(i = 0; i < b.length; i++){
      if (b[j] > b[j+1]) {
        var temp = b[j];
        b[j] = b[j+1];
        b[j+1] = temp;
      }
    }
    console.log(b);
  }
