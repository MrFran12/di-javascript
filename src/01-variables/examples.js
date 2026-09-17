function ejemplo() {
  if (true) {
    var x = 1;
    let y = 2;
  }
  console.log(x); // 1 — aún visible
  // console.log(y); // ReferenceError
}

console.log(ejemplo());

{
  // console.log(a);
  let a = 1;
  console.log(a); // 1
}
// console.log(a); // ReferenceError — fuera de ámbito

let contador = 0;
contador += 1; // ok
let texto = "hola";
texto = "adiós"; // ok

const MAX = 100;
// MAX = 200; // TypeError

const lista = [1, 2];
lista.push(3); // ok — mismo array
// lista = []; // TypeError
