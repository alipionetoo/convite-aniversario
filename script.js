// ===================================================================
// ===== ÁREA DE EDIÇÃO: ADICIONE E EDITE SEUS CONVIDADOS AQUI =====
// ===================================================================
const convidados = [
    { codigo: 'anna', nome: 'Anna', foto: 'fotos/anna.jpg', msgSim: 'eu que apoiei tu fazer no grupo, então é ÓBIO que eu vou estar', msgNao: 'sim, eu sou trouxa e pilhei e não vou' },
    { codigo: 'milton', nome: 'Miltão', foto: 'fotos/milton.jpg', msgSim: 'mesmo tu não ter ido nos meus DOIS aniversários, serei um bom amigo e vou no seu', msgNao: 'não, tu não foi nos meus DOIS e eu não vou (mesmo tendo postado parabéns pra mim nos stories)' },
    { codigo: 'raul', nome: 'Raul', foto: 'fotos/raul.jpg', msgSim: 'já tinha confirmado mas estou aqui confirmando de novo', msgNao: 'sou bobalhão e não vou, mesmo já tendo confimado lá no grupo' },
    { codigo: 'paula', nome: 'Paulinha', foto: 'fotos/paula.jpg', msgSim: 'óbvio que vou (mesmo que tu não tenha ido no meu!)', msgNao: 'não vou ir, tu não foi no meu' },
    { codigo: 'ana', nome: 'Aninha', foto: 'fotos/aninha.jpg', msgSim: 'vou largar minha viagem maravilhosa com meu namorado (que tu não conhece ainda) e vou ir', msgNao: 'não alipio, não vou deiar de ir numa viagem com meu namorada que conheci a pouco tempo atras para ir no aniversário do meu amigo de ANOS' },
    { codigo: 'patrick', nome: 'Patrickzera', foto: 'fotos/patrick.jpg', msgSim: 'eu namoro a anna, então se ela vai eu vou', msgNao: 'eu namoro a anna, então se ela não vai vai eu não vou' },
    { codigo: 'vitória', nome: 'Vivi Azevedo', foto: 'fotos/vitoria.jpg', msgSim: 'Vou ir né, dessa vez eu não achei desculpa para não ir!!', msgNao: 'Amigo, que pena! Vitória aqui. Não vou conseguir ir no teu niver, acredita?? Coisa rara, mas fazer o que né? é que eu [COLOCAR TUA DESCULPA AQUI]' },
    { codigo: 'cavalo', nome: 'Gui', foto: 'fotos/gui.jpg', msgSim: 'confirmado amigo, vou ir sim pq sou um ótimo amigo (ao contrario do iuri)', msgNao: 'Não amigo, eu não vou e sou um péssimo amigo assim como o iuri' },
    { codigo: 'iuri', nome: 'Iuri Vacilão que disse que não ia', foto: 'fotos/iuri.jpg', msgSim: 'era tudo brincadeira e eu vou sim', msgNao: 'já disse que não ia, mesmo que tu tenha ido no meu, não vou largar minhas férias por causa de ti' },
    { codigo: 'laisa', nome: 'Laisa', foto: 'fotos/laisa.jpg', msgSim: 'consegui dar um jeito e VOU IR PORRA', msgNao: 'não vou conseguir ir mesmo (plantão)' },
    { codigo: 'gabriel', nome: 'Vasconcelos', foto: 'fotos/vasconcelos.jpg', msgSim: 'já tinha confirmado, mas vou confirmar de novo', msgNao: 'sou corno e tinha confirmado e não vou mais (bem corno mesmo)' },
    { codigo: 'tais', nome: 'Tais', foto: 'fotos/tais.jpg', msgSim: 'não te respondi, te dei bolo do chimas, masss do churras eu não vou decepcionar, VOU IR!', msgNao: 'não te respondi, te dei bolo do chimas e ainda por cima não vou no teu churras kkkkkkkk' },
    { codigo: 'farid', nome: 'Hickmann', foto: 'fotos/hickmann.jpg', msgSim: 'pode deixar que eu vou', msgNao: 'sou um baita corno e não vou pq sou corno (muito corno)' },
    { codigo: 'felipe', nome: 'Louzada', foto: 'fotos/louzada.jpeg', msgSim: 'meu pai guigas vai, então vou junto', msgNao: 'sou um baita corno e não vou pq sou corno (muito corno)' },
    { codigo: 'guilherme', nome: 'Guigas', foto: 'fotos/guigas.jpg', msgSim: 'óbvio que vou né meu, como não vou no aniversario do MAGNÍFICO ALIPIO', msgNao: 'sou um baita corno e não vou pq sou corno (muito corno)' },
    { codigo: 'laura', nome: 'Laurinha', foto: 'fotos/laura.jpg', msgSim: 'óbvio que vou né meu, como não vou no aniversario do MAGNÍFICO ALIPIO', msgNao: 'sou uma baita corna (eu e a Malu) e não vou pq sou corna (muito corna)' },
    { codigo: 'daniela', nome: 'Daninha', foto: 'fotos/dani.jpg', msgSim: 'óbvio que vou né meu, como não vou no aniversario do MAGNÍFICO ALIPIO, ainda mais que tenho carona', msgNao: 'sou uma baita corna e não vou pq sou corna (muito corna), mesmo tendo carona' },
    { codigo: 'andrei', nome: 'Andrei', foto: 'fotos/andrei.jpg', msgSim: 'óbvio que vou né meu, como não vou no aniversario do MAGNÍFICO ALIPIO', msgNao: 'sou um baita corno e não vou pq sou corno (muito corno)' },
    { codigo: 'macaco', nome: 'Gabriel', foto: 'fotos/gabriel.jpg', msgSim: 'óbvio que vou né meu, como não vou no aniversario do meu PRIMO ALIPIO', msgNao: 'sou um baita corno e não vou pq sou corno (muito corno) e vou falar que agosto não dá (mesmo sendo o penultimo dia de agosto)' },
    { codigo: 'marcos', nome: 'Marcola', foto: 'fotos/marcos.jpg', msgSim: 'óbvio que vou né meu, como não vou no aniversario do MAGNíFICO ALIPIO', msgNao: 'sou um baita corno e não vou pq sou corno (muito corno)' },
    { codigo: 'gustavo', nome: 'Gustavo, A.K.A Guga', foto: 'fotos/gustavo.jpg', msgSim: 'óbvio que vou né meu, como não vou no aniversario do MAGNíFICO ALIPIO', msgNao: 'sou um baita corno e não vou pq sou corno (muito corno)' },
];

// ===================================================================
// ===== LÓGINCA DA PÁGINA (NÃO PRECISA MEXER DAQUI PARA BAIXO) =====
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

    const backgroundMusic = document.getElementById('background-music');
    const musicToggleBtn = document.getElementById('music-toggle-btn');
    
    const modalConfirmacao = document.getElementById('modal-confirmacao');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalResposta = document.getElementById('modal-resposta');
    const btnSim = document.getElementById('modal-sim');
    const btnNao = document.getElementById('modal-nao');
    
    // --- Lógica de Login ---
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
        welcomeArea.innerHTML = `<img src="${convidado.foto}" alt="Foto de ${convidado.nome}"> <h2>Bem-vindes, ${convidado.nome}!</h2>`;
        confirmationArea.innerHTML = `<p>Abaixo você pode confirmar sua presença no churrasco ou não</p> <button id="btn-confirmar-presenca">Responder Chamada</button>`;
        setTimeout(() => {
            landingPage.classList.remove('visible');
            landingPage.classList.add('hidden');
            mainContent.classList.remove('hidden');
            mainContent.classList.add('visible', 'fade-in');
            backgroundMusic.play();
            document.getElementById('btn-confirmar-presenca').addEventListener('click', () => {
                abrirModalConfirmacao(convidado);
            });
        }, 500);
    }

    // --- Lógica para o Controle de Música ---
    if(musicToggleBtn) {
        musicToggleBtn.addEventListener('click', () => {
            if (backgroundMusic.paused) {
                backgroundMusic.play();
                musicToggleBtn.innerHTML = 'PAUSAR ⏸️';
            } else {
                backgroundMusic.pause();
                musicToggleBtn.innerHTML = 'TOCAR ▶️';
            }
        });
    }

    // --- Lógica do Modal e Vaquinha ---
    function abrirModalConfirmacao(convidado) {
        modalTitulo.textContent = `E aí, ${convidado.nome}?`;
        modalResposta.textContent = '';
        btnSim.disabled = false;
        btnNao.disabled = false;
        modalConfirmacao.style.display = 'flex';
    }
    btnSim.addEventListener('click', () => {
        if (!convidadoAtual) return;
        const mensagemWhats = encodeURIComponent(convidadoAtual.msgSim);
        const linkWhatsApp = `https://wa.me/5551996535225?text=${mensagemWhats}`;
        window.open(linkWhatsApp, '_blank');
        modalResposta.textContent = "Sua mensagem de confirmação foi preparada no WhatsApp. É só enviar!";
        btnSim.disabled = true;
        btnNao.disabled = true;
    });
    btnNao.addEventListener('click', () => {
        if (!convidadoAtual) return;
        const mensagemWhats = encodeURIComponent(convidadoAtual.msgNao);
        const linkWhatsApp = `https://wa.me/5551996535225?text=${mensagemWhats}`;
        window.open(linkWhatsApp, '_blank');
        modalResposta.textContent = "Ok, uma mensagem de 'arrego' foi preparada no WhatsApp. Coragem pra enviar!";
        btnSim.disabled = true;
        btnNao.disabled = true;
    });
    modalConfirmacao.addEventListener('click', (e) => { if (e.target === e.currentTarget) e.currentTarget.style.display = 'none'; });
    
    const apoiarVaquinhaBtn = document.getElementById('apoiarVaquinhaBtn');
    const innerBar = document.getElementById('inner-bar');
    const pollStats = document.getElementById('poll-stats');
    const vaquinhaResposta = document.getElementById('vaquinha-resposta');
    apoiarVaquinhaBtn.addEventListener('click', () => {
        pollStats.innerHTML = '<strong>28 de 23</strong> convidados apoiam! <strong>IMPARÁVEL!</strong>';
        vaquinhaResposta.textContent = 'Show! Para combinar os detalhes, me chama no privado!';
        apoiarVaquinhaBtn.disabled = true;
        apoiarVaquinhaBtn.textContent = 'APOIO REGISTRADO!';
    });
});