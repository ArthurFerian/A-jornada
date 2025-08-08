//Listar od números de 1 a 20
console.log("Listando de 1 a 20");
for (let i = 1; i <= 20; i++) {
    console.log(i); 
}

//Criar um ivent pra ayla
let inventario = ["Poção cura", "Espada de fogo", "Mapa antigo", "Chave dourada", "Anel da invisibilidade"];

// Mostrando os inventarios 
console.log("Inventario da Ayla");
// com length nós pegamos o tamanho exato do array
for (let i = 0; i < inventario.length; i++) {
    console.log(`- ${inventario[i]}`);  
}