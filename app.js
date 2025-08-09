// Array para armazenar os nomes
let amigos = [];

// Função para adicionar nomes à lista
function adicionarAmigos() {
    const inputName = document.getElementById("amigos");
    const nameValue = inputName.value.trim();

    if (nameValue === "") {
        alert("Por favor, digite um nome válido!");
        return;
    }

    const nomeLower = nameValue.toLowerCase();
    const nomeIgual = amigos.some(n => n.toLowerCase() === nomeLower);

    if (nomeIgual) {
        alert("Esse nome já foi adicionado. Insira um nome diferente.");
        return;
    }

    amigos.push(nameValue);
    atualizarLista();

    inputName.value = "";
    inputName.focus();
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo aleatório
function sortearAmigos() {
    if (amigos.length < 1) {
        alert("Adicione pelo menos 1 nome para sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    const li = document.createElement("li");
    li.textContent = `O amigo sorteado foi: ${amigoSorteado}`;
    resultado.appendChild(li);
}
