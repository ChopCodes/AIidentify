Webcam.set({
    width:350,height:300,image_format:'png',png_quality:90
});
 var cam = document.getElementById("Live_Camera");
 Webcam.attach(cam);

 function click_f(){
  Webcam.snap(function(data_uri){
      document.getElementById("Photo_Camera").innerHTML='<img id="image_ai" src="'+data_uri+'">'
  })
  console.log("Test 1 Passed");
 };

 var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/prBOalqe9/model.json',modelloading);
 function modelloading(){
    
 };
  
 function identify(){
 var imageai = document.getElementById("image_ai");
 classifier.classify(imageai,gotresult)


 }
 function gotresult(error,results) {
 console.log(results);
 }