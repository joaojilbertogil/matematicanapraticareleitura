// Função para calcular a adição
function adicao() {
    var valor1 = parseInt(document.getElementById('n1').value);
    var valor2 = parseInt(document.getElementById('n2').value);

    if (isNaN(valor1) || isNaN(valor2)) {
        document.getElementById('erro').textContent = "Preencha ambos os campos com números válidos.";
    } else {
        document.getElementById('lblresult').innerHTML = valor1 + valor2;
        document.getElementById('erro').textContent = ""; // Limpa a mensagem de erro
    }
}

// Função para calcular a subtração
function subtracao() {
    var valor1 = parseInt(document.getElementById('n1').value);
    var valor2 = parseInt(document.getElementById('n2').value);

    if (isNaN(valor1) || isNaN(valor2)) {
        document.getElementById('erro').textContent = "Preencha ambos os campos com números válidos.";
    } else {
        document.getElementById('lblresult').innerHTML = valor1 - valor2;
        document.getElementById('erro').textContent = ""; // Limpa a mensagem de erro
    }
}

// Função para calcular a multiplicação
function multiplicacao() {
    var valor1 = parseInt(document.getElementById('n1').value);
    var valor2 = parseInt(document.getElementById('n2').value);

    if (isNaN(valor1) || isNaN(valor2)) {
        document.getElementById('erro').textContent = "Preencha ambos os campos com números válidos.";
    } else {
        document.getElementById('lblresult').innerHTML = valor1 * valor2;
        document.getElementById('erro').textContent = ""; // Limpa a mensagem de erro
    }
}

// Função para calcular a divisão
function divisao() {
    var valor1 = parseInt(document.getElementById('n1').value);
    var valor2 = parseInt(document.getElementById('n2').value);

    if (isNaN(valor1) || isNaN(valor2)) {
        document.getElementById('erro').textContent = "Preencha ambos os campos com números válidos.";
    } else if (valor2 === 0) {
        document.getElementById('erro').textContent = "Não é possível dividir por zero.";
    } else {
        document.getElementById('lblresult').innerHTML = valor1 / valor2;
        document.getElementById('erro').textContent = ""; // Limpa a mensagem de erro
    }
}

// Função para limpar o resultado e a mensagem de erro
function limpar() {
    document.getElementById('lblresult').innerHTML = '';
    document.getElementById('erro').textContent = '';
    document.getElementById('n1').value = ''; // Limpa o valor do campo n1
    document.getElementById('n2').value = ''; // Limpa o valor do campo n2
}

// Adicionar manipuladores de eventos aos botões
document.getElementById('adicao').addEventListener('click', adicao);
document.getElementById('subtracao').addEventListener('click', subtracao);
document.getElementById('multiplicacao').addEventListener('click', multiplicacao);
document.getElementById('divisao').addEventListener('click', divisao);
document.getElementById('limpar').addEventListener('click', limpar);
