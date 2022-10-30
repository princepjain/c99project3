var sr = window.webkitSpeechRecognition
var r = new sr

function startt(){
    document.getElementById("ta").innerHTML = " "

    r.start()
}
 
r.onresult = function(pm){
    console.log(pm)

    content = pm.results[0][0].transcript
document.getElementById("ta").innerHTML = content
}


