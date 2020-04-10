
const UNIDADES = [
    'UM', 'DOIS', 'TRÊS', 'QUATRO', 'CINCO', 'SEIS', 'SETE', 'OITO', 
    'NOVE', 'DEZ', 'ONZE', 'DOZE', 'TREZE', 'QUATORZE', 'QUINZE',
    'DESESSEIS', 'DESESSETE', 'DEZOITO', 'DEZENOVE', ['VINTE']
]

const NOMES = [
    'VINTE'
]

class Quantia {
    constructor(valor) {
        this.valor = valor
    }

    negativo() {
        return this.valor < 0;
    }

    unidade() {
        return this.valor === 1;
    }

    porExtenso() {

        const tamanho = this.valor.toString().length

        if (this.valor < 20) {
            return UNIDADES[this.valor - 1]
        }
        
        const dezenas = this.valor/20
        return NOMES[dezenas - 1]

    }
}

module.exports = Quantia