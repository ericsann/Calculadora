document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    form?.addEventListener('submit', function(e){
        e.preventDefault();
        const inputPeso = document.querySelector('#peso');
        const inputAltura = document.querySelector('#altura');
        // @ts-ignore
        const peso = Number(inputPeso?.value);
        //@ts-ignore
        const altura = Number(inputAltura?.value);
        const calculo = calcula(peso, altura );
        setResultado(calculo);
    });
});











function setResultado(imc){
    const resultado = document.querySelector('.resultado');
    if (resultado) {
        resultado.innerHTML =`<p>Seu IMC é ${imc}</p>`;
    }
};
function calcula(peso, altura){
    const imc = peso / (altura * altura);
      return imc;
};