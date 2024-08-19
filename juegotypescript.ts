// game.ts
class AdivinaElNumero {
    private numeroSecreto: number;
    private intentos: number;

    constructor() {
        this.numeroSecreto = this.generarNumeroAleatorio(1, 100);
        this.intentos = 0;
    }

    private generarNumeroAleatorio(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public adivinar(numero: number): string {
        this.intentos++;
        if (numero < this.numeroSecreto) {
            return "Demasiado bajo. Intenta de nuevo.";
        } else if (numero > this.numeroSecreto) {
            return "Demasiado alto. Intenta de nuevo.";
        } else {
            return `¡Correcto! Has adivinado el número en ${this.intentos} intentos.`;
        }
    }
}

// Ejecución del juego
const juego = new AdivinaElNumero();
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const preguntar = () => {
    readline.question('Adivina el número (entre 1 y 100): ', (respuesta: string) => {
        const numero = parseInt(respuesta);
        if (!isNaN(numero)) {
            console.log(juego.adivinar(numero));
            if (numero !== juego['numeroSecreto']) {
                preguntar();
            } else {
                readline.close();
            }
        } else {
            console.log("Por favor, ingresa un número válido.");
            preguntar();
        }
    });
};

preguntar();
