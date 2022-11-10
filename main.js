var reconhecimentoVoz = window.webkitSpeechRecognition

var reconhecimento = new reconhecimentoVoz()

function iniciar() {
    document.getElementById("textbox").innerHTML = ""
    reconhecimento.start()
}

reconhecimento.onresult = function run(event) {
    console.log(event)
    var conteudo = event.results[0][0].transcript
    console.log(conteudo)
    document.getElementById("textbox").innerHTML = conteudo
    if(conteudo=="tire minha selfie") {
        console.log("tirando selfie")
        speak()
    }
}

function speak(){
    var synth = window.speechSynthesis
    var speechData = "tirando sua selfie em 5 segundos"
    var armazenarTextFala = new SpeechSynthesisUtterance(speechData)
    synth.speak(armazenarTextFala)
    Webcam.attach(webcam);
    setTimeout(() => {
       takeSefie()
       console.log("5 segundos restantes")
       save()
    }, 5000);
}

var webcam = document.getElementById("camera")
Webcam.set({
    largura: 310,
    altura: 300,
    image_format: 'jpeg',
    jpeg_quality: 100
 });

 function takeSefie() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= "<img id='selfieImg' src='"+ data_uri +"'>"
    })
 }

 function save() {
    var link = document.getElementById("link")
    var image = document.getElementById("selfieImg").src 
    link.href = image
    link.click()
 }
