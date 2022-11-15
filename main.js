const form = document.getElementById('form-agenda');

const nomes = [];
const telefones= [];

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputFoneContato = document.getElementById('fone-contato');

    if (nomes.includes(inputNomeContato.value) && telefones.includes(parseInt(inputFoneContato.value))) {
        alert(`O contato ${inputNomeContato.value} com o número de telefone ${inputFoneContato.value} já consta na lista!`);
    } else {

    nomes.push(inputNomeContato.value);
    telefones.push(parseInt(inputFoneContato.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputFoneContato.value}</td>`;
    linha += '</tr>';

    linhas += linha;
    }
    
    inputNomeContato.value = '';
    inputFoneContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}