var data = [];
function preload(){
  data = loadJSON("population.json");
}

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

function mySort(data){

  var length = data.length
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
          numOfSelecSort++;
      }
  }
  console.log(array);
}
