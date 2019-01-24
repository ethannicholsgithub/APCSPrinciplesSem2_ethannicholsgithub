var data;

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
  loadJSON("data.json", loadingData);


}

//  The draw function is called @ 30 fps
function draw() {

}

function mySort(data){

  var length = data.country.length
  var min;

  for (i = 0; i < length; i++){
      //set minimum to this position
      min = i;
      //check the rest of the array to see if anything is smaller
      for (j = (i + 1); j < length; j++){
          if (data.country[j].murder < data.country[min].murder){
              min = j;
          }
      }
      //if the minimum isn't in the position, swap it
      if (i != min){
          swap(data.country.murder, i, min);
          numOfSelecSort++;
      }
  }
  console.log(data.country.murder);
}
