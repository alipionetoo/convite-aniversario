// Pega os elementos do HTML para que possamos manipulá-los
const confirmarBtn = document.getElementById('confirmarBtn');
const desculpaBtn = document.getElementById('desculpaBtn');
const mensagemFinal = document.getElementById('mensagemFinal');

// O que acontece quando o botão de confirmar é clicado
confirmarBtn.addEventListener('click', function() {
    mensagemFinal.textContent = "BOA! Nos vemos lá! Sua presença é o melhor presente. 😉";
    mensagemFinal.style.display = 'block';
    mensagemFinal.style.borderColor = '#00ff9d';
    
    // Desativa os botões para não clicar de novo
    confirmarBtn.disabled = true;
    desculpaBtn.disabled = true;
});

// O que acontece quando o botão de desculpas é clicado
desculpaBtn.addEventListener('click', function() {
    const desculpas = [
        "Lamento, nesse dia é o aniversário do meu peixinho dourado.",
        "Não posso, preciso reorganizar minha coleção de meias por cor.",
        "Que pena! Prometi a mim mesmo que iria maratonar a previsão do tempo.",
        "Impossível, estarei muito ocupado piscando.",
        "Meu mestre iogue disse que meu chakra da socialização estará desalinhado."
    ];
    
    // Escolhe uma desculpa aleatória da lista
    const desculpaAleatoria = desculpas[Math.floor(Math.random() * desculpas.length)];
    
    mensagemFinal.textContent = `Sua desculpa: "${desculpaAleatoria}" - Fraquinha, hein? Mas tudo bem, fica pra próxima!`;
    mensagemFinal.style.display = 'block';
    mensagemFinal.style.borderColor = '#ff00de';

    // Desativa os botões
    confirmarBtn.disabled = true;
    desculpaBtn.disabled = true;
});