class Kendaraan {
    constructor(jenis) {
        if (this.constructor === Kendaraan) {
            throw new Error("Kelas Kendaraan adalah kelas abstrak dan tidak dapat diinstansiasi.");
        }
        this.jenis = jenis;
    }

    // Metode abstrak
    bergerak() {
        throw new Error("Metode 'bergerak()' harus diimplementasikan.");
    }
}

// Kelas turunan yang mengimplementasikan metode abstrak
class Mobil extends Kendaraan {
    constructor() {
        super('Mobil');
    }

    bergerak() {
        console.log(`${this.jenis} bergerak dengan roda.`);
    }
}

class Kapal extends Kendaraan {
    constructor() {
        super('Kapal');
    }

    bergerak() {
        console.log(`${this.jenis} bergerak di atas air.`);
    }
}

class Pesawat extends Kendaraan {
    constructor() {
        super('Pesawat');
    }

    bergerak() {
        console.log(`${this.jenis} bergerak di udara.`);
    }
}

class Beca extends Kendaraan {
    constructor() {
        super('Beca');
    }

    bergerak() {
        console.log(`${this.jenis} bergerak dengan roda.`);
    }
}

class Kapal_Selam extends Kendaraan {
    constructor() {
        super('Kapal_Selam');
    }

    bergerak() {
        console.log(`${this.jenis} bergerak Di dalam AIR.`);
    }
}

// Penggunaan
const mobil = new Mobil();
mobil.bergerak(); // Output: Mobil bergerak dengan roda.

const kapal = new Kapal();
kapal.bergerak(); // Output: Kapal bergerak di atas air.

const pesawat = new Pesawat();
pesawat.bergerak(); // Output: pesawat bergerak di udara.

const beca = new Beca();
beca.bergerak(); // Output: beca bergerak dengan roda.

const kapal_selam = new Kapal_Selam();
kapal_selam.bergerak(); // Output: Kapal selam bergerak di dalam air.
