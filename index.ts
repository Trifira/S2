//no 1 - odd number and even number

const i : number = 25;

//odd number
    if(i % 2 === 0){
    console.log(i +" --ini adalah nilai genap");
    }else{
    console.log(i +" --ini adalah ini nilai ganjil");
}

const i2 : number = 2;
//even number
    if(i2 % 2 === 0){
    console.log(i2 +" --ini adalah nilai genap");
    }else{
    console.log(i2 + " --ini adalah nilai ganjil");
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

const N: number = 5; //nilai N yang akan dijumlahkan (diatur N nya disini)
let tambah: number = 0; // hasil dari penjumlahan N
let hasil: string = N + " ->";
for (let i: number = 1; i <= N; i++) {
    tambah += i;
    hasil += i === N ? ` ${i} = ${tambah}` : `${i} `; 
}

console.log("Jumlah dari 1  sampai " + hasil + " adalah " + tambah);;


//no 4 faktorial

// const angka : number = 4; // angka yang akan di faktorialkan
// const angka2 : number = 6;
// let result : number = 1; // variabel penyimpan nilai hasil dari penjumlahan angka faktorial
// let result2 : number = 1;

// for (let i: number = angka - 1 ; i > 0 ; i--){
//     console.log(i); //menampilkan faktorisasi dari i diatas
//      result *= i;

// }
// console.log("faktorisasi dari angka "+ i +" adalah "+ result);

// for (let i: number = angka2 ; i > 0 ; i--){
//     console.log(i);
//      result2 *= i;

// }
// console.log("faktorisasi dari angka "+ angka2+" adalah "+ result2);

const angka : number = 6;
let _hasil = `${angka}! -> ${angka} x`;
let fac = angka;
for(let i = angka - 1; i >= 1; i--){
    fac *= i;
    console.log(i);
    console.log(fac);
    _hasil += 1 === i ? `${i} = ${fac}` : `${i} x `;
}
    console.log(_hasil);

// no 5 angka fibonacci

const nf: number = 16;
let nf0: number = 0; // Ganti angka ini dengan jumlah angka Fibonacci yang ingin dicetak
let nf1: number = 0; // Angka pertama dalam deret Fibonacci
let nf2: number = 1; // Angka kedua dalam deret Fibonacci
let next = `${nf} -> `;

// Menampilkan sisa angka Fibonacci
for (let i: number = 2; i <= nf; i++) {
    nf0 = nf1 + nf2 ;
    nf1 = nf2;
    nf2 = nf0;
    next += i === nf ? `${nf1}` : `${nf1}, `;
}

    console.log(next);
