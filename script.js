// Declaração de variáveis de diferentes tipos de dados
let nome = "João"; // String
let idade = 30; // Number
let ativo = true; // Boolean

// Mostrando os valores das variáveis no console
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Ativo:", ativo);

// Função que recebe dois números e retorna a soma deles
function soma(a, b) {
    return a + b;
}

// Exibição do resultado no console
let resultado = soma(5, 7);
console.log("A soma é:", resultado);

document.addEventListener("DOMcontentLoaded", function() {
    // Adicionando um ouvinte de evento ao botão
    let botao = document.getElementById("meuBotao");
    if (botao) {
        botao.addEventListener("click", function() {
            alert ("Hello, people!");
        });
    }
});
