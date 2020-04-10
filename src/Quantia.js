
const UNIDADES = [
    'UM', 'DOIS', 'TRÊS', 'QUATRO', 'CINCO', 'SEIS', 'SETE', 'OITO', 'NOVE', 'DEZ'
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
        return UNIDADES[this.valor - 1]
    }
}

module.exports = Quantia