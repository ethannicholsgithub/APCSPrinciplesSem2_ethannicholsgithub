var data;
function preload(){
  //data=JSON.parse("population.json");
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
  mySort(data);


 }

function swap(a, firstValue, secondValue){
    var temp = a[firstValue];
    a[firstValue] = a[secondValue];
    a[secondValue] = temp;
}

function mySort(data){

  var length;
  if(data){
     length = data.crime.length;
  }
  var min;

  for (var i = 0; i < length; i++){
      //set minimum to this position
      min = i;
      //check the rest of the array to see if anything is smaller
      for(var j = (i + 1); j < length; j++){
          if (data.crime[j].Assault < data.crime[min].Assault){
              min = j;
          }
      }
      //if the minimum isn't in the position, swap it
      if (i != min){
          swap(data.crime, i, min);
      }
       console.log(data.crime[i].Assault);
  }
}


//  The draw function is called @ 30 fps
function draw() {
  textSize(20);
  fill(255, 255, 255);
  text(data.crime[0].Assault, 350, 100);
  text(data.crime[49].Assault, 450, 100);
  text(data.crime[0].state, 300, 50);
  text(data.crime[49].state, 450, 50);
  text('Assault:', 400, 25);
  text('Difference:', 50, 100);
  text((data.crime[49].Assault - data.crime[0].Assault), 50, 150);
  fill(0, 255, 0);
  rect(350, 150, 50, (data.crime[0].Assault * -4));
  fill(255, 0, 0);
  rect(450, 150, 50, (data.crime[49].Assault * -4));
}
