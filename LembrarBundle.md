# webpack
Utilizando Webpack +Babbel para criação de gerador de CPF 

Durante a execução do projeto me deparei com um problema muito simples mas que inicialmente achei ser mais complexo - O gerador não estava introduzido 
os valores no innerHTML, durante o debug verifiquei que o erro estava na linha 8 do ValidaCPF.js - Ele não executava o método .replace() devido ao valor inicial
undefined. apenas adicionando um "?" antes do .replace() para verificar undefined antes da execução protege de erros.

Porém não atualizava meu código, nenhuma das mudanças ia para o servidor - Mas é claro, o mané aqui atualizou o JavaScript e não recarregou o Bundle.js que é a origem.
Aí bastou executar no Node o > npm run dev (chamei de dev a keycode de comado que está definida no package.json) e pronto. Bundle atualizado e tudo funcionando kk.

export default class ValidaCPF {
    constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado?.replace(/\D+/g, '')   <<<<<< Local do problema.
      
      
      
 
