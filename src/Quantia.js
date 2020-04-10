
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
        if (this.valor === 1)
            return 'UM'
        if (this.valor === 2)
            return 'DOIS'
        return 'TRÊS'
    }
}

module.exports = Quantia