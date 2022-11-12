const btnnum = document.querySelectorAll('[num]');
const btnop = document.querySelectorAll('[op]');
const btnresult = document.querySelector('[result]');
const btndel = document.querySelector('[del]');
const btnclear = document.querySelector('[clear]');
const previousOperandTextElement = document.querySelector('[op1]');
const currentOperandTextElement = document.querySelector('[op2]');
class realizarCalc{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }
    numberformat(num){
        const stringNumber = num.toString();
        const inteiro = parseFloat(stringNumber.split('.')[0]);
        const decimal = stringNumber.split('.')[1];
        let inteiromostrar;
        if(isNaN(inteiro)){
           inteiromostrar = '';}
        else{
            inteiromostrar = inteiro.toLocaleString('en',{maximumFractionDigits: 0,
            });
        }
        if(decimal != null){
            return `${inteiromostrar}.${decimal}`
        }
        else{
            return inteiromostrar;
        }
    }
    del(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
    calc(){
        let resultado;
        const previousOperandF = parseFloat(this.previousOperand);
        const currentOperandF = parseFloat(this.currentOperand);

        if (isNaN(previousOperandF) || isNaN(currentOperandF)) return;

        switch(this.btnop){
            case '+':
                resultado = previousOperandF + currentOperandF; break;
            case '-': 
                resultado = previousOperandF - currentOperandF; break;
            case '÷':
                resultado = previousOperandF / currentOperandF; break;
            case '*': 
                resultado = previousOperandF * currentOperandF; break;
            default:
                return;
        }
        this.currentOperand = resultado;
        this.btnop = undefined;
        this.previousOperand = "";
    }
    chooseOperation(btnop){
        if(this.currentOperand == '') return;
        if(this.previousOperand != ''){
            this.calc()
        }
        this.btnop = btnop;

        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
    }
    appendNumber(num){
        this.currentOperand = `${this.currentOperand}${num.toString()}`;
    }
    clear(){
        this.currentOperand = "";
        this.previousOperand = "";
        this.btnop = undefined;
    }
    updateDisplay(){
        this.previousOperandTextElement.innerText = `${this.numberformat(this.previousOperand)} ${this.btnop || ''}`;
        this.currentOperandTextElement.innerText = this.numberformat(this.currentOperand);
    }
}
const calc = new realizarCalc
(previousOperandTextElement, currentOperandTextElement);
for(const btnnums of btnnum){
    btnnums.addEventListener('click', () => {
        calc.appendNumber(btnnums.innerText);
        calc.updateDisplay();
    })
}
for(const btnops of btnop){
    btnops.addEventListener("click", () => {
        calc.chooseOperation(btnops.innerText);
        calc.updateDisplay();
    })
}
btnclear.addEventListener('click', () => {
    calc.clear();
    calc.updateDisplay();
})
btnresult.addEventListener('click', () => {
    calc.calc();
    calc.updateDisplay();
})
btndel.addEventListener('click', () =>{
    calc.del();
    calc.updateDisplay();
})