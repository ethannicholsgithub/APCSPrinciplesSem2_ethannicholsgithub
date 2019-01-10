
var items = [4, 1, 2, 11, 17, 9, 16, 10, 5, 15, 20, 6, 18, 8, 12, 13, 14, 7, 3, 19];


//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {

}

mySort();


function mySort(items){

    var length = items.length
    var min;

    for (i = 0; i < length; i++){

        //set minimum to this position
        min = i;

        //check the rest of the array to see if anything is smaller
        for (j = (i + 1); j < length; j++){
            if (items[j] < items[min]){
                min = j;
            }
        }

        //if the minimum isn't in the position, swap it
        if (i != min){
            swap(items, i, min);
        }
    }

    console.log(items);
}

function swap(items, firstValue, secondValue){
    var temp = items[firstValue];
    items[firstValue] = items[secondValue];
    items[secondValue] = temp;
}
