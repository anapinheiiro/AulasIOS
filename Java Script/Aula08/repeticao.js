
/*  variavel      teste          incremento ( executado ao fim do loop)
for(contador = 0; contador <=50; contador++) {
    console.log(contador);
} 
*/


let tiposBananas = ['Da Terra', 'Nanica', 'Prata', 'Maça', 'Ouro', 'Pão']

for(contador = 0; contador < tiposBananas.length; contador++) {
    console.log(`${contador +1} ${tiposBananas[contador]}`);
}