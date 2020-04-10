const Quantia = require('../src/Quantia')

const nomes = [
    'UM', 'DOIS', 'TRÊS', 'QUATRO', 'CINCO', 'SEIS', 'SETE', 'OITO', 
    'NOVE', 'DEZ', 'ONZE', 'DOZE', 'TREZE', 'QUATORZE', 'QUINZE',
    'DESESSEIS', 'DESESSETE', 'DEZOITO', 'DEZENOVE'
]

const tabela = [ ]

for (let i = 0; i < nomes.length; i++)
    tabela.push({ valor: i + 1, extenso: nomes[i] })

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
        test('Retorna 20 por extenso', () => {
            expect(new Quantia(20).porExtenso()).toBe('VINTE')
        })
    })
})