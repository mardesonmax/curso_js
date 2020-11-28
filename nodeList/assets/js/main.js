const list = document.querySelector('.list');
const ps = list.querySelectorAll('p');

const style= getComputedStyle(document.body);
const bgColorBody = style.backgroundColor;

for(let p of ps) {
    p.style.cssText = `color: #fff; background: ${bgColorBody};`;
    console.log(p);
}
