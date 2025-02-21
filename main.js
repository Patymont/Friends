function starClasification ()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://storage.googleapis.com/tm-model/O5GMUuAi0/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }else{
        console.log(results);

        random_number_r= Math.floor(Math.random()*255)+1;
        random_number_g= Math.floor(Math.random()*255)+1;
        random_number_b= Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="Escucho -" + results[0].label;
        document.getElementById("result_confidence").innerHTML="Presición -" + (results[0].confidence*100).toFixed(2) + " %";
        document.getElementById("result_label").style.color="rgb(" + random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb(" + random_number_r+","+random_number_g+","+random_number_b+")";

        img= document.getElementById('ini')
        img2=document.getElementById('shifu')
        img3=document.getElementById('val')
        img4=document.getElementById('ren')
        img5=document.getElementById('luci')
        img6=document.getElementById('mika')

        if(results[0].label=="ini"){
            img.src= 'mouth.gif';
            img2.src= 'shifu.png';
            img3.src= 'val.png';
            img4.src= 'ren.png';
            img5.src= 'luci.png';
        }else if(results[0].label=="shifu"){
            img.src='ini.png';
            img2.src= 'mouth.gif';
            img3.src= 'val.png';
            img4.src= 'ren.png';
            img5.src= 'luci.png';
        }else if(results[0].label=="val"){
            img.src='ini.png';
            img2.src= 'shifu.png';
            img3.src= 'mouth.gif';
            img4.src= 'ren.png';
            img5.src= 'luci.png';
        }else if(results[0].label=="ren"){
            img.src='ini.png';
            img2.src= 'shifu.png';
            img3.src= 'val.png';
            img4.src= 'mouth.gif';
            img5.src= 'luci.png';
        }else if(results[0].label=="luci"){
            img.src='ini.png';
            img2.src= 'shifu.png';
            img3.src= 'val.png';
            img4.src= 'ren.png';
            img5.src= 'mouth.gif';
        }else{
            img.src='ini.png';
            img2.src= 'shifu.png';
            img3.src= 'val.png';
            img4.src= 'ren.png';
            img5.src= 'luci.png';
        }


    }
    

}