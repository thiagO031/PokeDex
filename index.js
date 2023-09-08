let image = document.getElementById('image');
let body = document.querySelector('body');
let alterarTema = document.getElementById('alterar-tema');

alterarTema.addEventListener('click', function(){
    const modoEscuro = body.classList.contains('modo-escuro');
    body.classList.toggle('modo-escuro');

    if(modoEscuro){
        image.setAttribute('src', 'img/sun.png');
        body.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    } else{
        image.setAttribute('src', 'img/moon.png');
        body.style.content = '';
        body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    };
});