// 705.484.450-52 070.987.720-03
export default class ValidaCPF {
    constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado?.replace(/\D+/g, '')
      
    });
  }

  éSequência() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo; // Utilizando charAt ao invés de [0]
  }

  geraNovoCpf() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidaCPF.geraDigito(cpfSemDigitos); /* Tenho de usar a classe e não THIS
                                                         pois geraDigito é static */
    const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
    this.novoCPF = cpfSemDigitos + digito1 + digito2;
    
  }

  static geraDigito(cpfSemDigitos) { // Definido como static pois não é usado nada de THIS nessa função
    let total = 0;
    let reverso = cpfSemDigitos.length + 1; // Iniciará com valor 10 quando gerando o digito 1

    for(let stringNumerica of cpfSemDigitos) {
      total += reverso * Number(stringNumerica); // stringNum recebe os valores de cada índice de cpfSemDigitos
      reverso--;  // Reverso vai decaíndo 
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : '0'; // Se digito <= 9 retorna um valor númerico dígito porém string
    // E se for maior retorna a string '0'
  }

  valida() {
    if(!this.cpfLimpo) return false; // Se não existir essa variável 
    if(typeof this.cpfLimpo !== 'string') return false; // Se o tipo da variável por diferente de string
    if(this.cpfLimpo.length !== 11) return false; // Se o tamanho do valor da variável for diferente de 11
    if(this.éSequência()) return false;  // Se o resultado de éSequência for true
    this.geraNovoCpf();

    return this.novoCPF === this.cpfLimpo; 
  }
}

let validacpf = new ValidaCPF('070.987.720-03');
// validacpf = new ValidaCPF('999.999.999-99');

if (validacpf.valida()) {
  console.log('CPF válido');
} else {
  console.log('CPF inválido');
}

//console.log('oi');
console.log(ValidaCPF.value);
