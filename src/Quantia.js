
const UNIDADES = {
    1: [null, 'UM', 'DOIS', 'TRÊS', 'QUATRO', 'CINCO', 'SEIS', 'SETE', 'OITO', 'NOVE']
}

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
        return UNIDADES[tamanho][this.valor]
    }
}

module.exports = Quantia