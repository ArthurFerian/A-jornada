// 1. Personagem
let nome = "Hiro";
let classe = "Samurai";
let nivel = 70;
let vida = 100;
let ouro = 45;
let xp = 30;

// 2. Arma e Armadura
const NOME_ARMA = "Katana de Fogo";
let DANO_BASE = 150;
const NOME_ARMADURA = "Armadura Samurai"
const DEFESA_BASE = 90;

// 3. Aplicação de Operadores de Atribuição

xp += 150; // O personagem treinou e ganhou 150 pontos de experiência.
ouro -= 30; // Comprou uma poção por 30 moedas de ouro
vida += 40; // Usou a poção e recuperou 40 pontos de vida
DANO_BASE *= 2; // A arma foi encantada, e seu dano foi dobrado

console.log("Relatorio final da jornada");
console.log(`Herói: ${nome}`);
console.log(`Dano Base da Arma: ${DANO_BASE}`);
console.log(`XP: ${xp}`);
console.log(`Ouro: ${ouro}`);
console.log(`Vida: ${vida}`);

// 4. Cálculo de Atributos Finais

let ataqueTotal = nivel + DANO_BASE;
console.log("Quanto é o ataque total?", ataqueTotal);

let defesaTotal = DEFESA_BASE + nivel / 2;
console.log("Quanto é a defesa total?", defesaTotal);

// 5. Avaliação de Prontidão com Operadores Lógicos

let vidaSuficiente = vida > 70;
let ataqueForte = ataqueTotal > 60;
let nivelAvancado = nivel >= 10;
let podeEnfrentarMercenarios = vidaSuficiente && (ataqueForte || nivelAvancado);

console.log(`Você pode enfrentar um grupo de mercenarios? ${podeEnfrentarMercenarios}`);


console.log("");

console.log(" LORE DO HERÓI: Hiro");
console.log("");
console.log("Hiro, o Samurai Silencioso, era um garoto quieto de uma vila simples. Quando tinha 11 anos, perdeu seus pais num ataque. Sobreviveu pois ficou escondido, mas isso ficou marcado pra sempre na vida dele.");
console.log("Então ele saiu pelo mundo em silêncio. Aprendeu a lutar, aprendeu a escutar. Se tornou forte. Muito forte.");
console.log("Ele passou a ajudar todos que precisavam como um heroi, mas sempre calado. Quando a espada deke sai da bainha ela entra em chamas e o trabalho é rapido e justo.");
console.log("Um dia, tentou viver em paz com uma mulher chamada Kaori.");
console.log("Mas como a vida dele era muito injusta, ele perdeu sua amada mulher em um ataque.");
console.log("Desde então Hiro caça esses mercenarios que pratica esses ataques a vilas, pois tem muito odio guardado e usa como motivação para salvar as pessoas.");
console.log("E em um dos ultimos dias que foi visto, conseguiu achar os mercenarios que mataram sua mulher, ele fez coisas que nem ele imaginava que conseguia por estava cego por ódio.");
console.log("E dizem que agora apos cumprir sua maior missao, ele aparece só quando é necessário. Luta, resolve, e antes de ir embora, só diz... ´´Desculpa``. ");



// Nível 2
// Resgate do Nível 1


let vidaAtual = 2000;
let vidaMaxima = 2000;
let manaAtual = 150;
let manaMaxima = 500;
let experiencia = 3000;
let ouroAtual = 25;
let poderMercenarios = 60;

// Novos atributos para batalha
let forca = 1000;

let defesa = 500;
let agilidade = 2000;
let combatesVencidos = 4;

// Estado atual da história (continue de onde parou no Nível 1)
let localAtual = "Yamashiro ";
let missaoAtual = "O Aviso dos Monges";

// CAPÍTULO 1: Condicionais Simples na narrativa
console.log("🌅 CAPÍTULO 1: O Aviso dos Monges");

if (nivel < 50) {
    console.log(" O Monge não te adverteu pois seu nivel é maior:)")
} 

if (ouro >= 100) {
    console.log("💰 Suas moedas tilintam no bolso, atraindo olhares cobiçosos...");
}

if (classe === "Mago") {
    console.log("✨ A energia mágica flui através de suas veias...");
} else {
    console.log("Verificaram sua classe e você não é um mago");
} 
console.log("");

console.log("🛡️ CAPÍTULO 2: A vila de Yamashiro ");

if (ouro >= 50) {
    console.log("💰 Com ouro suficiente, " + nome + " compra equipamentos melhores!");
    forca += 5;
    defesa += 3;
    ouro -= 50;
    console.log("Força e defesa aumentaram! Ouro restante: " + ouro);
} else {
    console.log("💔 Sem ouro suficiente, " + nome + " deve confiar apenas em suas habilidades!");
    console.log("A adversidade fortalece o espírito! Agilidade +10");
    agilidade += 10;
}
console.log("");

if (experiencia >= 100) {
    console.log("🎉 A sabedoria acumulada se manifesta! " + nome + " sente-se mais poderoso!");
    nivel++;
    experiencia = 0;
    vidaAtual = vidaMaxima; // Vida restaurada
} else {
    console.log("📊 " + nome + " ainda busca mais conhecimento e experiência...");
    console.log("Sabedoria atual: " + experiencia + "/100");
}
console.log("");

console.log("⚔️ CAPÍTULO 3: The last Fight");

if (vidaAtual <= 30) {
    console.log("🆘 Com pouca vida, " + nome + " usa uma tática desesperada!");
    console.log("Ataque final com toda a força restante!");
    poderMercenarios -= (forca * 2);
} else if (manaAtual >= 30 && classe === "Mago") {
    console.log("✨ " + nome + " canaliza todo seu poder mágico!");
    console.log("Magia devastadora!");
    poderMercenarios -= (forca + 20);
    manaAtual -= 30;
} else if (agilidade >= 15) {
    console.log("🏃‍♂️ Com grande agilidade, executa um ataque certeiro com sua katana flamejante, e acaba com essa legião de mercenarios!");
    poderMercenarios -= forca;
} else {
    console.log("🛡️ The last Fight!");
    poderMercenarios -= (forca / 2);
    vidaAtual += 10; // Recupera um pouco de vida
}

console.log("");
console.log("📜 === CONTINUAÇÃO DA JORNADA DE " + nome + " ===");
console.log("");

console.log("Após as lutas do " + localAtual + ", nosso herói " + nome);
console.log("da classe " + classe + " se depara com um novo desafio...");
console.log("");

if (poderMercenarios <= 0) {
    console.log("🎉 VITÓRIA ÉPICA! " + nome + " triunfa!");
    experiencia += 100;
    combatesVencidos++;
    console.log("A lenda " + nome + " cresce...");
} else {
    console.log("⚔️ A batalha foi dura, mas " + nome + " consegue vencer os mercenarios e vingar sua família e sobreviver para lutar outro dia!");
}

console.log("");
console.log("🏁 FIM DO CAPÍTULO - Aguarde o próximo nível da aventura!");






