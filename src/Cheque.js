const ErroChequeVazio = require('./ErroChequeVazio')
const ErroChequeNegativo = require('./ErroChequeNegativo')

class Cheque {

    constructor(quantia) {

        if (!quantia) {
            throw new ErroChequeVazio()
        } else if (quantia.negativo()) {
            throw new ErroChequeNegativo()
        }


    }
}

module.exports = Cheque