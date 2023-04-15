

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/1eMNWPd_i/model.json",modelReady);
}

function modelReady(){
    classifier.classify(gotResults);

}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
    console.log(results)
    random_number_r=Math.floor(Math.random()*255)+1;
    random_number_g=Math.floor(Math.random()*255)+1;
    random_number_b=Math.floor(Math.random()*255)+1;


    document.getElementById("iCanHear").innerHTML="I can hear-"+results[0].label;
    document.getElementById("accuracy").innerHTML="Accuracy-"+(results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("iCanHear").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+");";
    document.getElementById("accuracy").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+");";

 pick=document.getElementById("img1")   
    
   
    
    

    if(results[0].label=="lion"){
     pick.src="lion.jpeg"   
    }
    else if(results[0].label=="bird"){
     pick.src="bird.jpeg"   
        

    }
    else if(results[0].label=="horse"){
      pick.src="horse.jpeg"  

    }
   
    
}
}
