const result = document.querySelector('.result');
/*
axios('pessoas.json')
    .then(res => loader(res.data));

const loader = json => {
    json.map(project => {
        result.innerHTML += `<tr>
            <td>${project.nome}</td>
            <td>${project.idade} Anos</td>
            <td>${project.empresa}</td>
        </tr>`;
    })
}

*/

axios('https://api.github.com/users/mardesonmax/repos')
    .then(res => {
        loader(res.data)
        console.log(res)
    });

const loader = json => {
    json.map(project => {
        project


        result.innerHTML += `<tr>
            <td>${project.id}</td>
            <td>${project.name}</td>
            <td>${project.private ? 'Sim': 'Não'}</td>
        </tr>`;
    })
}