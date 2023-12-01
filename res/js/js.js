const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const imga= new Image();
imga.src = "./res/img/screensaver.png";
canvas.width = 1280;
canvas.height = 720;
imga.width = 150;
imga.height = 125;
let x = 0;
let y = 0;
let xrychlost = 5;
let yrychlost = 5;
window.addEventListener("resize", () => {
    responzivita()
  });
  
  function responzivita() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
window.onload = () => {
    responzivita()
    setInterval(() => {
        x += xrychlost;
        y += yrychlost;
        if(x + imga.width >= canvas.width || x<= 0){
            xrychlost *= -1;
        }
        if(y + imga.height >= canvas.height || y<= 0){
            yrychlost *= -1;
        }
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(imga, x, y, 150, 125);
    },45)
}
