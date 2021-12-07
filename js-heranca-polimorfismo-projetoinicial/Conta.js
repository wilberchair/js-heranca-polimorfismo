export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  sacar(valor){
    let taxa = 1
    const valorSacado = taxa * valor;
    if(this._saldo >= valorSacado){
        this._saldo -= valorSacado;
        return valorSacado;
    }
}

depositar(valor){
    this._saldo += valor;           
}

tranferir(valor, conta){
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
    
}
} 