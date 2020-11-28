function Calculadora() {
    const display = document.querySelector('#display');

    this.iniciar = () => {
        btns();
        enterResult();
    }
    
    const result = () => {
        try {
            let total = display.value;

            total = eval(total);

            if(!total) return alert('Algo deu errado!');

            display.value = total;

        } catch (e) {
            return alert('Algo deu errado!');
        }
    }

    const enterResult = () => {
        display.addEventListener('keypress', e => {
            const code = e.which;
            
            if(code === 13 || code === 61) {
                e.preventDefault();
                result();
            }
        })
    }

    const btns = () => {
        const buttons = document.querySelectorAll('.btn');

        buttons.forEach(btn => {
            
            btn.addEventListener('click', e => {
                const btnClick = e.target;

                const btnNum = btnClick.classList.contains('btn-num');
                const btnOp = btnClick.classList.contains('btn-op');
                const btnDel = btnClick.classList.contains('btn-del');
                const btnClear = btnClick.classList.contains('btn-clear');
                const btnEq = btnClick.classList.contains('btn-eq');

                if(btnNum || btnOp) {
                    display.value += btnClick.innerText;
                }

                if(btnDel) {
                    display.value = display.value.slice(0, -1);
                }

                if(btnClear) {
                    display.value = '';
                }

                if(btnEq) {
                    result();
                }
                
            })

        })
    }
}

const calc = new Calculadora();
calc.iniciar();