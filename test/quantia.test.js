const Quantia = require('../src/Quantia')

describe('Quantia', () => {
    describe('#negativo', () => {
        test('Verificar que -1 é negativo', () => {
            expect(new Quantia(-1).negativo()).toBeTruthy()
        })

        test('Verificar que 1 não é negativo', () => {
            expect(new Quantia(1).negativo()).toBeFalsy()
        })
    })

    describe('#unidade', () => {
        test('Verifica que é unidade', () => {
            expect(new Quantia(1).unidade()).toBeTruthy()
        })
        test('Verifica que não é unidade', () => {
            expect(new Quantia(2).unidade()).toBeFalsy()
        })
    })

    describe('#porExtenso', () => {
        test('Retorna 1 por extenso', () => {
            expect(new Quantia(1).porExtenso()).toBe('UM')
        })

        test('Retorna 2 por extenso', () => {
            expect(new Quantia(2).porExtenso()).toBe('DOIS')
        })

        test('Retorna 3 por extenso', () => {
            expect(new Quantia(3).porExtenso()).toBe('TRÊS')
        })
    })
})