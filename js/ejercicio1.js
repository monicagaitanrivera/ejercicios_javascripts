"use strict"
let mundo = "Hola mundo"
console.log(mundo);

/* mensaje */ 
let cliente= "Monica"
console.log("bienvenido,sr",cliente);

/* Solucion que muestre el total de un producto porcentaje */ 

let valorproducto = 32000;
let  impuesto= .10;
let domici =3000;

console.log("El costo total es de: $",(( valorproducto * impuesto ) + valorproducto + domici));

/* */

let monto
let decimal=0.15
let decimal2= .10
if(monto <= 30000) {
    console.log("no tiene descuento");

}
else if ((monto>30000) && (monto<100000)) {
    let descuento=monto * decimal
    console.log("su descuento es de un 5% y su valor total es: ", descuento + monto)
}
if (monto>=100000)
descuento1=(monto * decimal2)
console.log("su descuento es de un 10% y su valor total es: ", descuento1 + monto);
