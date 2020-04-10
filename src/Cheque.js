const ErroChequeVazio = require('./ErroChequeVazio')
const ErroChequeNegativo = require('./ErroChequeNegativo')

class Cheque {
    
    constructor(quantia) {
        if (!quantia) {
            throw new ErroChequeVazio()
        } else if (quantia.negativo()) {
            throw new ErroChequeNegativo()
        }
        this.quantia = quantia
    }

    porExtenso() {
        const quantiaPorExtenso = this.quantia.porExtenso()
        if (this.quantia.unidade()) {
            return `${quantiaPorExtenso} REAL`
        }
        return `${quantiaPorExtenso} REAIS`
    }
}

module.exports = Cheque


// {
//     1: [null, 'UM'],
// }
