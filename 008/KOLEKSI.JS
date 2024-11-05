// Menggunakan List (Array)
let listMahasiswa = ["Nanda", "Riqi", "Eko"];
listMahasiswa.push("Abel"); // Menambahkan elemen baru
console.log(listMahasiswa); // Output: ["Budi", "Siti", "Agus", "Ani"]

// Menggunakan Set
let setMahasiswa = new Set(["Nanda", "Riqi", "Ekp"]);
setMahasiswa.add("Abel");
setMahasiswa.add("Nanda"); // Tidak akan menambahkan karena Budi sudah ada
console.log(setMahasiswa); // Output: Set(4) {"Budi", "Siti", "Agus", "Ani"}

// Menggunakan Map
let mapNilai = new Map();
mapNilai.set("Nanda", 90);
mapNilai.set("Riqi", 85);
console.log(mapNilai.get("Nanda")); // Output: 90
