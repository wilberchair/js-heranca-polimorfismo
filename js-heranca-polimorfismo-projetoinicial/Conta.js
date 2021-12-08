export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  sacar(valor){
    let taxa = 1
    return _sacar(valor, taxa);
  }

  _sacar(valor, taxa){
    const valorSacado = taxa * valor;
    if(this._saldo >= valorSacado){
      this._saldo -= valorSacado;
      return valorSacado;
    }

    return 0;
  }

  depositar(valor){
    this._saldo += valor;           
  }

  tranferir(valor, conta){
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);  
  }

  teste() {
    console.log("teste na classe conta")
  }
} 