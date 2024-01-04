const h1 = document.createElement('h1');
const t1 = document.createTextNode("Switch Theme");
h1.style.textAlign = 'center';
h1.appendChild(t1);
document.body.appendChild(h1);

const h2 = document.createElement('h2');
const t2 = document.createTextNode("☀️ or 🌙");
h2.style.textAlign = 'center';
h2.appendChild(t2);
document.body.appendChild(h2);

const div2 = document.createElement('div');
div2.style.display = 'flex';
div2.style.justifyContent = 'center';
const img = document.createElement('img');
img.src = 'img/Off.png';
img.style.height ='225px';
img.style.width ='150px';
div2.appendChild(img);
document.body.appendChild(div2);

const br1 = document.createElement('br');
document.body.appendChild(br1);

const div = document.createElement('div');
div.style.display = 'flex';
div.style.alignItems = 'center';
div.style.justifyContent = 'center';

const outer = document.createElement('div');
const inner = document.createElement('div');
inner.style.backgroundColor = "black";
inner.style.height = "50px";
inner.style.width = "50px";
inner.style.borderRadius = '30px';
inner.style.display = 'flex';
inner.style.alignItems = 'center';
inner.style.justifyContent = 'center';
outer.style.backgroundColor = "red";
outer.style.height = "50px";
outer.style.width = "100px";
outer.style.borderRadius = '30px';
outer.appendChild(inner);
div.appendChild(outer);
document.body.appendChild(div);

let isTransformed = false;
let isLightOn = false;

inner.addEventListener('click', function()
{
    document.body.style.transition = 'background-color 0.5s ease';
    h1.style.transition = 'color 0.5s ease';
    h2.style.transition = 'color 0.5s ease';
    inner.style.transition = 'transform 0.5s ease';

    document.body.style.backgroundColor = (document.body.style.backgroundColor === 'black' )? 'white' : 'black';
    h1.style.color = (h1.style.color === 'white' )? 'black' : 'white';
    h2.style.color = (h2.style.color === 'white' )? 'black' : 'white';
    inner.style.backgroundColor = (inner.style.backgroundColor === 'white') ? 'black' : 'white';
    inner.style.transform = isTransformed ? 'translateX(0px)' : 'translateX(50px)';

    isLightOn = !isLightOn 
    isLightOn ? img.src = 'img/On.png' : img.src = 'img/Off.png';
    
    isTransformed = !isTransformed;
})