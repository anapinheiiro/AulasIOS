let n1 = 0;
let n2 = 1;
let contador = 0;

while (contador < 10){
    console.log(n1);
    let proximo = n1 + n2;
    n1 = n2;
    n2 = proximo;
    contador++;
}