const pessoas = [
    { id: 4, nome: 'Nome da pessoa' },
    { id: 3, nome: 'Nome da pessoa' },
    { id: 2, nome: 'Nome da pessoa' },
    { id: 1, nome: 'Nome da pessoa' },
];

const novasPessoas = new Map();

for(const pessoa of pessoas) {
    const { id } = pessoa;

    novasPessoas.set(id, {...pessoa});
}

function pessoDelete(idDelete) {
    for(const pessoa of novasPessoas) {
        const [ id ] = pessoa;
        if(id === idDelete) {
            novasPessoas.delete(id);
        }
        
        console.log(novasPessoas.get(id));
    }
}

pessoDelete(3);