const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const katakana = 'hduegygb7dg873h8h873783ge8g83e8g78387t832ye873ehsfgdgfjygfudgfyfgysdgfyusdgfudsgfudsygfudsgygfusdfgudsgfudsgfjdsgfjdsgyut4854754yrtg84343y8t348f43g83g4fg3g834g74238yefge7f34834t8348fg48748rg387t483487tr838tr8743t74rt763t4r73473yrgvfg474b8f7y438r874487gf83';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums;
const fontSize = 16;
const columns = canvas.width/fontSize;
const rainDrops = [];

for( let x = 0; x < columns; x++ ) {
    rainDrops[x] = 1;
}
const draw = () => {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#0F0';
    context.font = fontSize + 'px monospace';

    for(let i = 0; i < rainDrops.length; i++)
    {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i*fontSize, rainDrops[i]*fontSize);

        if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
};
const password = "factoriaF5";
setInterval(draw, 10);
// alerta de boton
function myFunction() {
event.preventDefault();

    var txt;
    var es = document.getElementById("password").value;
    console.log("vv"+ es);
    if (es === password) {
        alert("Has acertado");
        txt = "hsah led <a target='_black' href='https://phppasswordhash.com/?hash=x3irt2aM5'>knil</a> le eugiS .lanif nu eneit oipicnirp nu eneit euq ol odoT .onimac le rop radna y onimac le reconoc ertne aicnerefid anu yah euq ed ,oy euq laugi la ,atneuc sárad et onarpmet o edraT";
      document.getElementById("mostrar").innerHTML = txt;
    } else {
        alert("No vas bien");
    }
    
    
  }