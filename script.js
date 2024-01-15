
// Parte do Menu em relação a responsividade.  

const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})


// Funções:

function TrocaTema() {
    const body = document.body;
    const logoLight = document.getElementById('logoLight');
    const logoDark = document.getElementById('logoDark');
    
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    if (body.classList.contains('dark-mode')) {
        logoLight.style.display = 'none';
        logoDark.style.display = 'block';
        
    } else {
        logoDark.style.display = 'none';
        logoLight.style.display = 'block';
        
    }

    // Para salvar no LocalStorage...
    const currentTema = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('tema', currentTema);
}

document.addEventListener('Carregou', () => {
    const salvarTema = localStorage.getItem('tema');
    const logoLight = document.getElementById('logoLight');
    const logoDark = document.getElementById('logoDark');

    if (salvarTema) {
        document.body.classList.add(salvarTema === 'dark' ? 'dark-mode' : 'light-mode');
        if (salvarTema === 'dark') {
            logoLight.style.display = 'none';
            logoDark.style.display = 'block';
        } else {
            logoDark.style.display = 'none';
            logoLight.style.display = 'block';
        }
    }
});


  
function iniciarDownload() {
    var link = document.createElement('a');
    link.href = 'SB_Gerenciamento.jar';
    link.download = 'Sistema de Gerenciamento.jar';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

var imagem = document.getElementById('fazerDownload');
imagem.addEventListener('click', iniciarDownload);