// Quando apertar o botão de Sol, no header, o layout da página mudará
// para o botão de Lua, assim ativando o modo noturno. Junto a mmudança de botão,
// o background do card e da imagem de fundo escurecerá;


let image = document.getElementById('image');
let body = document.querySelector('body');
let alterarTema = document.getElementById('alterar-tema');
let card = document.getElementsByClassName('main-container-card');

// após clicar na div "alterar-tema", a página ficará em modo noturno;
alterarTema.addEventListener('click', function(){

    // criada variavel de criação de elemento no body do html, via JS;
    let modoEscuro = body.classList.contains('modo-escuro');

    // aplicada a função toggle no elemento 'modo-escuro' do body
    // para aparecer o estilo aplicado via scss;
    body.classList.toggle('modo-escuro');


    // se o 'modoEscuro' for aplicado, aparecerá tais estilizações;
    if(modoEscuro){
        image.setAttribute('src', 'img/sun.png');
        body.style.backgroundColor = 'rgba(0, 0, 0, 0)';

        for(let i = 0; i < card.length; i++){
            card[i].style.backgroundColor = '#FAC705';
        }

        // se não aparecerá essas;
    } else{
        image.setAttribute('src', 'img/moon.png');
        body.style.content = '';
        body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';

        for(let i = 0; i < card.length; i++){
            card[i].style.backgroundColor = '#ddb100';
        }
    };


});