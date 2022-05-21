Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:95
});
var cam =document.getElementById('camera');
Webcam.attach('#camera');
function take_prtsc(){
    Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML='<img id="picture" src="'+data_uri+'">';  
    });
}
//Hi
console.log("ml5 version",ml5.version);
var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/2kMfcUo1H/model.json",modelLoaded);
function modelLoaded(){
  console.log("model Loaded");

}
 function identify(){
   var image =document.getElementById("picture") ;
  classifier.classify(image,gotResults);
 }

  function gotResults(error,results){
 if(error)
 {
   console.error(error);
 }
 else{
   console.log(results);
document.getElementById("object").innerHTML=results[0].label;
document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);


 }
  }
