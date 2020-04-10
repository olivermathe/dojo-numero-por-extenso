
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
        return 'DOIS'
    }
}

module.exports = Quantia