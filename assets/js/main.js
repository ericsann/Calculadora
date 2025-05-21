function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        btnDel: document.querySelector('.btn-del'),







        realizaConta: function () {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if (!conta) {
                    alert('Conta Invalida');
                    this.display.value = '';
                    return;
                }
                this.display.value = String(conta);
            } catch (e) {
                alert('Conta Invalida');
                this.display.value = '';
            }
        },
        delNum: function () {
            this.display.value = this.display.value.slice(0, -1);
        },
        clearDisplay: function () {
            this.display.value = '';
        },
        inicia: function () {
            this.clickBotoes();
            this.pressionaEnter();
        },

        clickBotoes: function () {
            document.addEventListener('click', function (e) {
                const el = e.target;
                if (el instanceof Element && el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                    this.display.focus();
                }
                if (el instanceof Element && el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                    this.display.focus();
                }
                if (el instanceof Element && el.classList.contains('btn-del')) {
                    this.delNum();
                    this.display.focus();
                }
                if (el instanceof Element && el.classList.contains('btn-eq')) {
                    this.realizaConta();
                    this.display.focus();
                }

            }.bind(this));
        },
        pressionaEnter: function () { 
            document.addEventListener('keyup', (e) => { 
            if (e.key === 'Enter') {
                this.display.focus();
                console.log('Enter pressionado');
                e.preventDefault(); 
                this.realizaConta(); 
            } 
        }); },
        btnParaDisplay: function (valor) {
            if (this.display) {
                this.display.value += valor;
            }
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
