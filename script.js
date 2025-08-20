// ===================================================================
// ===== ÁREA DE EDIÇÃO: ADICIONE E EDITE SEUS CONVIDADOS AQUI =====
// ===================================================================
const convidados = [
    {
        codigo: 'anna', 
        nome: 'Anna', 
        foto: 'fotos/anna.jpg', 
        // ATENÇÃO: Estes textos agora vão DIRETO para o WhatsApp!
        msgSim: 'eu que apoiei tu fazer no grupo, então é ÓBVIO que eu vou estar', 
        msgNao: 'sim, eu sou trouxa e pilhei e não vou'
    },
    {
        codigo: 'maria', 
        nome: 'Maria Souza', 
        foto: 'fotos/maria.png', 
        msgSim: 'Opa, Maria na área confirmando presença no aniver! Pode contar com a minha ilustre presença para julgar o ponto da carne.', 
        msgNao: 'Bah, Alipio, Maria aqui. Infelizmente não vou conseguir ir... Come um pedaço de bolo por mim! 🎂'
    },
    {
        codigo: 'pedro', 
        nome: 'Pedro Andrade', 
        foto: 'fotos/pedro.jpg', 
        msgSim: 'Fala, aniversariante! Pedro aqui, confirmando que vou no churrasco. A alegria (e as piadas ruins) estão garantidas.', 
        msgNao: 'Pô, vacilão sou eu... Aqui é o Pedro, e não vou poder comparecer, meu nobre. Fico te devendo essa!'
    },
    {
        codigo: 'vitoria', 
        nome: 'Vitória Santos', 
        foto: 'fotos/vitoria.jpg', 
        msgSim: 'Oii, Alipio! Vitória confirmando presença na festa! Já estou ansiosa pelo churras e pela fofoca.', 
        msgNao: 'Amigo, que pena! Vitória aqui. Não vou conseguir ir no teu niver. Fica pra próxima, aproveita muito!'
    }
];

// ===================================================================
// ===== LÓGICA DA PÁGINA (NÃO PRECISA MEXER DAQUI PARA BAIXO) =====
// ===================================================================
document.addEventListener('DOMContentLoaded', function() {
    let convidadoAtual = null;

    // --- Elementos do DOM ---
    const landingPage = document.getElementById('landing-page');
    const codigoInput = document.getElementById('codigo-input');
    const loginBtn = document.getElementById('login-btn');
    const errorMsg = document.getElementById('error-msg');
    
    const mainContent = document.getElementById('main-content');
    const welcomeArea = document.getElementById('welcome-area');
    const confirmationArea = document.getElementById('confirmation-area');
    
    const modalConfirmacao = document.getElementById('modal-confirmacao');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalResposta = document.getElementById('modal-resposta');
    const btnSim = document.getElementById('modal-sim');
    const btnNao = document.getElementById('modal-nao');
    
    // --- Lógica de Login e Transição de Tela ---
    loginBtn.addEventListener('click', function() {
        const mensagensErro = ["Pena, amigo. Desta vez não rolou.", "Hmmm, parece que você não está convidado🤭", "Acesso negado. Verifique o código ou o nível de amizade.", "Ou tu não foi convidado ou tu foi burro o suficiente para errar teu próprio nome animal"];
        const codigoDigitado = codigoInput.value.trim().toLowerCase();
        if (!codigoDigitado) return;

        const convidadoEncontrado = convidados.find(c => c.codigo === codigoDigitado);

        if (convidadoEncontrado) {
            convidadoAtual = convidadoEncontrado;
            iniciarTransicao(convidadoAtual);
        } else {
            const mensagemAleatoria = mensagensErro[Math.floor(Math.random() * mensagensErro.length)];
            errorMsg.textContent = mensagemAleatoria;
            setTimeout(() => { errorMsg.textContent = ''; }, 4000);
        }
    });

    codigoInput.addEventListener('keyup', (event) => { if (event.key === 'Enter') loginBtn.click(); });

    function iniciarTransicao(convidado) {
        landingPage.classList.add('fade-out');
        
        // MUDANÇA 1: Alterado para "Bem-vindes"
        welcomeArea.innerHTML = `
            <img src="${convidado.foto}" alt="Foto de ${convidado.nome}">
            <h2>Bem-vindes, ${convidado.nome}!</h2>
        `;
        confirmationArea.innerHTML = `
            <p>Abaixo você pode confirmar sua presença no churrasco ou não</p>
            <button id="btn-confirmar-presenca">Responder Chamada</button>
        `;

        setTimeout(() => {
            landingPage.classList.remove('visible');
            landingPage.classList.add('hidden');
            mainContent.classList.remove('hidden');
            mainContent.classList.add('visible', 'fade-in');
            document.getElementById('btn-confirmar-presenca').addEventListener('click', () => {
                abrirModalConfirmacao(convidado);
            });
        }, 500);
    }

    // --- Lógica do Modal de Confirmação ---
    function abrirModalConfirmacao(convidado) {
        modalTitulo.textContent = `E aí, ${convidado.nome}?`;
        modalResposta.textContent = '';
        btnSim.disabled = false;
        btnNao.disabled = false;
        modalConfirmacao.style.display = 'flex';
    }

    // MUDANÇA 2: Botão "SIM" agora usa a mensagem personalizada para o WhatsApp
    btnSim.addEventListener('click', () => {
        if (!convidadoAtual) return;
        const mensagemWhats = encodeURIComponent(convidadoAtual.msgSim); // Usa a msgSim do convidado
        const linkWhatsApp = `https://wa.me/5551996535225?text=${mensagemWhats}`;
        window.open(linkWhatsApp, '_blank');
        
        btnSim.disabled = true;
        btnNao.disabled = true;
    });

    // MUDANÇA 3: Botão "NÃO" também abre o WhatsApp com a mensagem personalizada
    btnNao.addEventListener('click', () => {
        if (!convidadoAtual) return;
        const mensagemWhats = encodeURIComponent(convidadoAtual.msgNao); // Usa a msgNao do convidado
        const linkWhatsApp = `https://wa.me/5551996535225?text=${mensagemWhats}`;
        window.open(linkWhatsApp, '_blank');

        btnSim.disabled = true;
        btnNao.disabled = true;
    });

    modalConfirmacao.addEventListener('click', (e) => { if (e.target === e.currentTarget) e.currentTarget.style.display = 'none'; });

    // --- Lógica da Vaquinha Fake ---
    const apoiarVaquinhaBtn = document.getElementById('apoiarVaquinhaBtn');
    const innerBar = document.getElementById('inner-bar');
    const pollStats = document.getElementById('poll-stats');
    const vaquinhaResposta = document.getElementById('vaquinha-resposta');
    apoiarVaquinhaBtn.addEventListener('click', () => {
        innerBar.style.width = '95%';
        pollStats.innerHTML = '<strong>18 de 20</strong> convidados apoiam! <strong>VOCÊ É DEMAIS!</strong>';
        vaquinhaResposta.textContent = 'Show! Para combinar os detalhes, me chama no privado!';
        apoiarVaquinhaBtn.disabled = true;
        apoiarVaquinhaBtn.textContent = 'APOIO REGISTRADO!';
    });
});