const container = document.querySelector('.container');
container.innerHTML = '<h3>Carregando...<h3>'

setInterval(() => {
    //Data
    const date = new Date();
    const semana = date.getDay();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    //Horas
    const hor = date.getHours();
    const min = date.getMinutes();
    const seg = date.getSeconds();

    const getHoras = () => {      
        
        return `${hor} Horas, ${min} minutos e ${seg} segundos.`;        
    }

    const getSemana = () => {
        const semanas = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 
        'Quinta-feira', 'Sexta-feira', 'Sabado'];
        
        return semanas[semana];
    }

    const getMes = () => {
        const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
        'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        return meses[month];
    }
    
   
    container.innerHTML = `
        <h3>${getSemana()}, ${day} de ${getMes()} de ${year}.</h3>
        <h3>${getHoras()}</h3>
    `;
    
}, 1000);