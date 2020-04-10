const Quantia = require('../src/Quantia')

const tabela = [
    { valor: 1, extenso: 'UM' },
    { valor: 2, extenso: 'DOIS' },
    { valor: 3, extenso: 'TRÊS' },
    { valor: 4, extenso: 'QUATRO' },
    { valor: 5, extenso: 'CINCO' },
    { valor: 6, extenso: 'SEIS' },
    { valor: 7, extenso: 'SETE' },
    { valor: 8, extenso: 'OITO' },
    { valor: 9, extenso: 'NOVE' },
    { valor: 10, extenso: 'DEZ' }
]

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
        for (const input of tabela) {
            test(`Retorna ${input.valor} por extenso`, () => {
                expect(new Quantia(input.valor).porExtenso()).toBe(input.extenso)
            })
        }
    })
})