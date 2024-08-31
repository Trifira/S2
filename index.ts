//no 1 - odd number and even number

for (let i: number = 25; i > 0; i--){ //odd number
    if(i % 2 === 0)break;
    console.log(i +" --ini adalah nilai ganjil");
}

for (let i: number = 2; i > 0; i--){ //even number
    if(i % 2 !== 0)break;
    console.log(i +" --ini adalah nilai genap");
}

// no 2 - angka prima 

let n1: number = 7; // Ganti angka ini dengan angka yang ingin Anda periksa
let P1: boolean = true;

// Angka kurang dari 2 tidak dianggap sebagai bilangan prima
if (n1 < 2) {
    P1 = false;
} else {
    // Periksa jika number dapat dibagi oleh angka lain selain 1 dan dirinya sendiri
    for (let i: number = 2; i < n1; i++) {
        if (n1 % i === 0) {
            P1 = false;
            break;
        }
    }
}

// Menampilkan hasil
if (P1) {
    console.log( n1 +" adalah bilangan prima." );
} else {
    console.log(n1 +" adalah bukan bilangan prima." );
}
 
let n2: number = 6; // Ganti angka ini dengan angka yang ingin Anda periksa
let P2: boolean = true;

// Angka kurang dari 2 tidak dianggap sebagai bilangan prima
if (n2 < 2) {
    P2 = false;
} else {
    // Periksa jika number dapat dibagi oleh angka lain selain 1 dan dirinya sendiri
    for (let i: number = 2; i < n2; i++) {
        if (n2 % i === 0) {
            P2 = false;
            break;
        }
    }
}

// Menampilkan hasil
if (P2) {
    console.log(n2 +" adalah bilangan prima." );
} else {
    console.log(n2 +" adalah bukan bilangan prima." );
}

//no 3 pertambahan

let N: number = 5; //nilai N yang akan dijumlahkan (diatur N nya disini)
let tambah: number = 0; // hasil dari penjumlahan N

for (let i: number = 1; i <= N; i++) {
    tambah += i;
}

console.log("Jumlah dari 1 sampai " + N + " adalah " + tambah);;


//no 4 faktorial

let angka : number = 4; // angka yang akan di faktorialkan
let angka2 : number = 6;
let result : number = 1; // variabel penyimpan nilai hasil dari penjumlahan angka faktorial
let result2 : number = 1;

for (let i: number = angka ; i > 0 ; i--){
    console.log(i); //menampilkan faktorisasi dari i diatas
     result *= i;

}
console.log("faktorisasi dari angka "+ angka+" adalah "+ result);

for (let i: number = angka2 ; i > 0 ; i--){
    console.log(i);
     result2 *= i;

}
console.log("faktorisasi dari angka "+ angka2+" adalah "+ result2);

// no 5 angka fibonacci

let nf: number = 16; // Ganti angka ini dengan jumlah angka Fibonacci yang ingin dicetak
let nf1: number = 0; // Angka pertama dalam deret Fibonacci
let nf2: number = 1; // Angka kedua dalam deret Fibonacci

console.log("Nb angka pertama dari deret Fibonacci: " + nf);

// Menampilkan angka pertama
console.log(nf1);

// Jika Nf lebih besar dari 1, tampilkan angka kedua
if (nf > 1) {
    console.log(nf2);
}

// Menampilkan sisa angka Fibonacci
for (let i: number = 2; i < nf; i++) {
    let next: number = nf1 + nf2;
    nf1 = nf2;
    nf2 = next;
    console.log(next);
}