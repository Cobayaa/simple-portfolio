
const switchbutton = document.getElementById('switch');

switchbutton.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    switchbutton.classList.toggle('active');
});

document.addEventListener("mousemove", parallax);

function parallax (e){
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        // const x = (window.innerWidth - e.pageX*speed)/100;
        const y = (window.innerWidth - e.pageY*speed)/100;
        layer.style.transform = `translateY(${y}px)`;
    });
}   

let gigi = document.getElementById('name');
let tec = document.getElementById('tec');
let ex = document.getElementById('ex');
let ex2 = document.getElementById('ex2');
let texthome = document.getElementById('text-home');
let texthome2 = document.getElementById('text-home2');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    gigi.style.top = value * -2 + 'px';
    tec.style.top = value * -2 + 'px';
    ex.style.top = value * -2 + 'px';
    ex2.style.top = value * -2 + 'px';
    texthome.style.top = value * -3 + 'px';
    texthome2.style.top = value * -2 + 'px';
});

window.addEventListener('scroll', function(){
    var header = document.querySelector(".container");
    header.classList.toggle("sticky", window.scrollY > 0);
});


const menu_hamburger = document.querySelector(".toggle");
const links = document.querySelector(".nav");

menu_hamburger.addEventListener('click', ()=>{
    links.classList.toggle('responsive')
});