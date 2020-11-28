const form = document.querySelector('#form form');
const tarefa = form.querySelector('#tarefa');
const listTarefas = document.querySelector('#list-tarefa ul');

const newButton = (li) => {
    const button = document.createElement('button');
    button.innerText = "Apagar";
    button.setAttribute('class', 'apagar-tarefa');
    li.appendChild(button);
}

const newLi = () => {
    const li = document.createElement('li');
    return li;
}

const newTarefa = (texto) => {
    const li = newLi();
    li.innerText = texto;
    newButton(li);
    
    tarefa.value = '';
    listTarefas.appendChild(li);
    salvarTarefas();
}

form.addEventListener('submit', e => {
    e.preventDefault();
    if(!tarefa.value) return;

    newTarefa(tarefa.value);
});

document.addEventListener('click', e => {
    const el = e.target;

    if(el.classList.contains('apagar-tarefa')) {
        el.parentElement.remove();
        salvarTarefas();
    }
})

const salvarTarefas = () => {
    const liTarefas = listTarefas.querySelectorAll('li');
    let tarefas = [];

    for(let tarefa of liTarefas) {
        let tarefaText = tarefa.innerText;
        tarefaText = tarefaText.replace('Apagar', '').trim(); 
        tarefas.push(tarefaText);
    }

    const tarefasJson = JSON.stringify(tarefas);
    localStorage.setItem('tarefas', tarefasJson);
}

const loadTarefas = () => {
    const tarefas = localStorage.getItem('tarefas');
    const listTarefasJson = JSON.parse(tarefas);

    listTarefasJson.map(tarefa => {
        newTarefa(tarefa);
    })
}
loadTarefas();