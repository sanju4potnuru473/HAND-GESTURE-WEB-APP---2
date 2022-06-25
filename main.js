//https://teachablemachine.withgoogle.com/models/0B3bCEZ-V/
prediction_1 = "it is-"
 prediction_2 = "it is - "
 Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90

});
camera = document.getElementById("camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';

    
    
});
}

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML='<img id="captured_image" src"'+data_uri+'"/>';

    });

}

console.log("ml5 version:",ml5.version);
classifier = ml5.imageClassifier('//https://teachablemachine.withgoogle.com/models/0B3bCEZ-V/model.json',modelLoaded);

function modelLoaded()
{
console.log("modelLoaded");
}


function speak ()
{
    var synth = window.speechSynthesis;
    speak_data_1="the first prediction is"+prediction_1;
    speak_data_2="the second prediction is"+prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);

}
