var data;
function preload(){
  loadJSON("country.json", loadingData);
}

function loadingData(incomingData) {
  data = incomingData;
}
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  mySort();
 }


//  The draw function is called @ 30 fps
function draw() {

}

function mySort(data){

  var length;
  if( data){
     length = data.crime.length;
  }
  var min;

  for (i = 0; i < length; i++){
      //set minimum to this position
      min = i;
      //check the rest of the array to see if anything is smaller
      for (j = (i + 1); j < length; j++){
          if (data.crime[j].Murder < data.crime[min].Murder){
              min = j;
          }
      }
      //if the minimum isn't in the position, swap it
      if (i != min){
          swap(data.crime.Murder, i, min);
          numOfSelecSort++;
      }
  }
 //  console.log(data.crime.Murder);
}
