const form = document.getElementById('form-comparacao');

function comparacao(campoA, campoB) {
    return campoB > campoA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const campoA = Number(document.getElementById('n1').value);
    const campoB = Number(document.getElementById('n2').value);
    const mensagemSucesso = `O número: <b>${campoB}</b> é maior que o: <b>${campoA}</b>`;
    const conteinerMsgSucesso = document.querySelector('.success-message');
    const conteinerMsgErro = document.querySelector('.error-message');

    const formCompara = comparacao(campoA, campoB);

    if (formCompara) {
        conteinerMsgSucesso.innerHTML = mensagemSucesso;
        conteinerMsgSucesso.style.display = 'block';

        document.getElementById('n1').value = ' ';
        document.getElementById('n2').value = ' ';

        document.getElementById('n1').style.border = '1px solid #ced4da';
        conteinerMsgErro.style.display = 'none';
    } else {
        document.getElementById('n1').style.border = '1px solid red';
        conteinerMsgErro.style.display = 'block';
        conteinerMsgSucesso.style.display = 'none';
        
    }
});

campoA.addEventListener('keyup', function(e) {
});


