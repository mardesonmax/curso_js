const display = document.querySelector('.display');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let start = false;
let segundos = 0;
let timer;

const iniciarDisplay = (segundos) => {
    const date = new Date(segundos * 1000);
    const format = date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })

    display.innerHTML = `
        <h1>${format}</h1>
    `;
}

const iniciarSegundos = () => {
    segundos++;
    iniciarDisplay(segundos);
}

iniciar.onclick = e => {
    if(!start) {
        timer = setInterval(() => {
            iniciarSegundos();  
        }, 1000);
    
        display.classList.add('start-time'); 
        display.classList.remove('pause-time'); 

        pausar.classList.remove('active');
        iniciar.classList.add('active');

        start = true;
    }    
}

pausar.onclick = e => {
    if(start) {
        clearInterval(timer);
        display.classList.add('pause-time');
        display.classList.remove('start-time');

        iniciar.classList.remove('active');
        pausar.classList.add('active');
        
        start = false;
    }    
}

zerar.onclick = e => {
    //resete time
    start = false;
    segundos = 0;

    //resete time-display
    clearInterval(timer);
    iniciarDisplay(segundos);

    //display color
    display.classList.remove('pause-time');
    display.classList.remove('start-time');

    //buttons active
    iniciar.classList.remove('active');
    pausar.classList.remove('active');
}