const form = document.getElementById('form-comparacao');
let  formCompara = false;
let campoA = parseFloat(document.getElementById('n1').value);
let campoB = parseFloat(document.getElementById('n1').value);

function comparacao(campoA, campoB){
    return campoB > campoA;
}


form.addEventListener('submit', function(e){
    e.preventDefault();
    const campoA = document.getElementById('n1');
    const campoB = document.getElementById('n2');
    const mensagemSucesso = `isso ai o número: <b>${campoB.value} é maior que o: <b>${campoA.value}`;

    formCompara=comparacao(campoB.value);

    if (comparacao){
        const conteinerMsgSucesso = document.querySelector('.success-message');
        conteinerMsgSucesso.innerHTML = mensagemSucesso;
        conteinerMsgSucesso.style.display = 'block';

        campoA.value = '';
        campoB.value = '';
    }
    else{
        numero1.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

numero1.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formCompara=comparacao(e.target.value);

    if (formCompara){
        campoA.classList.add('error');
        document.querySelector('error-message').style.display= 'none';
    } else{
        campoA.classList.remove('error');
        document.querySelector('error-message').style.display= 'block';
    }
})