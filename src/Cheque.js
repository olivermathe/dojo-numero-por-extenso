const ErroChequeVazio = require('./ErroChequeVazio')

class Cheque {

    constructor(quantia) {

        throw new ErroChequeVazio()

    }
}

module.exports = Cheque