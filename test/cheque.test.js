const Cheque = require('../src/Cheque')
const ErroChequeVazio = require('../src/ErroChequeVazio')
const ErroChequeNegativo = require('../src/ErroChequeNegativo')

describe('Cheque', () => {
    describe('#constructor()', () => {
        test('Emitir erro se o cheque estiver sem valor', () => {
            expect(() => new Cheque()).toThrow(ErroChequeVazio)
        });

        test('Emitir erro se o cheque estiver com número negativo', () => {
            const quantiaFake = {
               negativo: () => true
            }
            expect(() => new Cheque(quantiaFake)).toThrow(ErroChequeNegativo)
        })
    });

    describe('#porExtenso()', () => {
        test('Conversão de uma unidade', () => {
            const quantiaFake = {
                negativo: () => false,
                porExtenso: () => 'UM',
                unidade: () => true
            }
            const cheque = new Cheque(quantiaFake)
            expect(cheque.porExtenso()).toBe('UM REAL')
        })

        test('Conversão de valores maiores que 1', () => {
            const quantiaFake = {
                negativo: () => false,
                porExtenso: () => 'DOIS',
                unidade: () => false
            }
            const cheque = new Cheque(quantiaFake)
            expect(cheque.porExtenso()).toBe('DOIS REAIS')
        })
    })
});