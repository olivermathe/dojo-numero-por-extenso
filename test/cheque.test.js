const Cheque = require('../src/Cheque')
const ErroChequeVazio = require('../src/ErroChequeVazio')

describe('Cheque', () => {
    describe('#porExtenso()', () => {
        test('Emitir erro se o cheque estiver sem valor', () => {

            expect(() => new Cheque()).toThrow(ErroChequeVazio);

        });
    });
});