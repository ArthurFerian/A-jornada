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

console.log("=== CONTINUAÇÃO DA SAGA ÉPICA - NÍVEL 3 ===");
console.log("");

    // Inventário mágico - primeira coleção arcana
let inventario = ["Poção de Vida", "Katana Flamejante", "Armadura de Samurai"];
let aliados = ["Date Masamune", "Kage no Ryu", "Arqueiro Das sombras"];
let inimigosEncontrados = ["Kuro no Oni", "Yami Tatsu", "Dragão Menor"];
let salasCastelo = ["Salão principal", "Passagem estreita e misteriosa", "Sala do Dragão de Ouro"];
let tesouroColetado = ["Uma segunda Katana de Raio"];

console.log("🏰 === " + nome + " ADENTRA O KINRYū-jō ===");
console.log("Após as vitórias dos níveis anteriores, nosso herói chegou ao castelo lendário...");
console.log("Inventário inicial: " + inventario.length + " itens");

// === CAPÍTULO 1: DESCOBERTA DAS COLEÇÕES ARCANAS ===
console.log("");
console.log("🗝️ CAPÍTULO 1: Os Baús Empoeirados do Castelo");
console.log("");

let pocoesEncontradas = ["Cura Maior", "Força Titânica", "Invisibilidade"];
let armadilhasAtiradas = ["Bomba de cerâmica incendiária", "Cercado de lanças"];
console.log("");

console.log("🧪 Primeira poção encontrada: " + pocoesEncontradas[0]);
console.log("⚗️ Total de poções mágicas: " + pocoesEncontradas.length);
console.log("");

inventario[0] = "Poção de Vida Suprema";
console.log("✨ " + nome + " aprimorou uma poção!");
console.log("");

inventario.push("Lança tripla usada para romper armaduras"); 
console.log("💍 Novo item adicionado! Inventário: " + inventario);
console.log("");

let itemRemovido = inventario.pop(); 
console.log("📤 Item removido: " + itemRemovido);
console.log("🎒 Inventário atual: " + inventario);
console.log("");

// === CAPÍTULO 2: O RITUAL DA EXPLORAÇÃO ===
console.log("");
console.log("⚔️ CAPÍTULO 2: Explorando as Masmorras Sistemáticas");

console.log("🗺️ Começando exploração das " + salasCastelo.length + " salas do castelo...");
for (let i = 0; i < salasCastelo.length; i++) {
console.log("🚪 Sala " + (i + 1) + ": " + salasCastelo[i]);
console.log("");

if (i === 0) {
console.log("📚 " + nome + " encontra pergaminhos antigos!");
experiencia += 50;
} else if (i === 1) {
console.log("💎 Cristais brilhantes concedem poder mágico!");
tesouroColetado.push("Cristal de Poder");
} else {
console.log("⏰ O tempo distorce ao redor de " + nome + "!");
vidaAtual -= 10; 
}
}

console.log("📊 Exploração completa! XP: " + experiencia + " | Vida: " + vidaAtual);

// === CAPÍTULO 3: A UNIÃO DOS ALIADOS ===
console.log("");
console.log("🤝 CAPÍTULO 3: Reunindo os Aliados Arcanos");
console.log("");

console.log("🏹 " + nome + " convoca seus aliados para a batalha final:");

for (let i = 0; i < aliados.length; i++) {
let aliado = aliados[i];
console.log("⚡ Aliado " + (i + 1) + ": " + aliado + " se junta à missão!");

if (i === 0) { // Primeiro aliado - Líder mágico
console.log("🔮 Como líder mágico, " + aliado + " Luta com espadas!");
ouro += 50;
} else if (i === 1) { // Segundo aliado - Defensor
console.log("🛡️ Como defensor principal, " + aliado + " fortalece a resistência!");
vidaMaxima += 30;
} else { // Demais aliados - Especialistas
console.log("🏹 Como especialista, " + aliado + " Usa um arco magico!");
experiencia += 40;
}
}

console.log("🎖️ Equipe completa! Ouro: " + ouro + " | Vida máxima: " + vidaMaxima);
console.log("");

// === CAPÍTULO 4: A BATALHA FINAL DOS ARRAYS ===
console.log("");
console.log("🐉 CAPÍTULO 4: Confronto com as Criaturas do Castelo");
console.log("");

let inimigosBatalha = ["Oni", "Tengu", "Dragão de Ouro"];
let danoRecebido = [1000];

console.log("💀 " + nome + " enfrenta " + inimigosBatalha.length + " inimigos épicos!");

for (let i = 0; i < inimigosBatalha.length; i++) {
let inimigo = inimigosBatalha[i];
let dano = Math.floor(Math.random() * 30) + 10; 

console.log("⚔️ Rodada " + (i + 1) + " - Enfrentando: " + inimigo);
console.log("💥 " + nome + " causa " + dano + " de dano!");

danoRecebido.push(dano); 
if (i === 0) {
console.log("💎 Primeira vitória! Cristais fragmentados concedem bônus!");
tesouroColetado.push("Fragmento de Cristal");
} else if (i === 1) {
console.log("🌑 Segunda batalha! As sombras drenam energia, mas " + nome + " resiste!");
vidaAtual -= 15;
} else {
console.log("🔥 Batalha final! O dragão recua! Vitória épica alcançada!");
experiencia += 100;
tesouroColetado.push("Escama Dragônica");
}
}

let danoTotal = 0;
for (let i = 0; i < danoRecebido.length; i++) {
danoTotal += danoRecebido[i];
console.log("📊 Rodada " + (i + 1) + " - Dano: " + danoRecebido[i]);
}

console.log("⚡ Dano total causado: " + danoTotal);
console.log("🏆 Tesouros coletados: " + tesouroColetado.length + " itens épicos!");

console.log("");
console.log("👑 === EPÍLOGO: " + nome + " - CONQUISTADOR DO CASTELO ===");

// Estatísticas finais da jornada
console.log("📈 Estatísticas Finais da Aventura:");
console.log("• Nível alcançado: " + nivel);
console.log("• Experiência total: " + experiencia);
console.log("• Vida restante: " + vidaAtual + "/" + vidaMaxima);
console.log("• Ouro acumulado: " + ouro);
console.log("• Itens no inventário: " + inventario.length);
console.log("• Aliados conquistados: " + aliados.length);
console.log("• Tesouros épicos: " + tesouroColetado.length);

// === ADICIONE SUAS 10+ LINHAS ÉPICAS DE CONTINUAÇÃO AQUI ===
console.log("");
console.log("🌟 A LENDA CONTINUA...");
console.log("Após conquistar o Castelo, " + nome + " emergiu transformado.");
console.log("O ódio ja tinha te dominado.");
console.log("Cada batalha executada havia forjado sua mente que foi abalada quando criança.");
console.log("As vozes sussurravam segredos ancestrais, revelando padrões ocultos da realidade.");
console.log("Aliados admiravam sua capacidade de organizar caos em estruturas harmoniosas, mas mal sabe eles oque realmente passava pela cabeça dele.");
console.log("O inventário repleto de artefatos antigos brilhava com poder recém-descoberto.");
console.log("Mas no horizonte, novas aventuras aguardavam o incrivel " + classe + " " + nome + "  .");
console.log("Rumores falavam de vilas que precisavam ser salvas.");
console.log("E objetos legendários que guardariam os segredos da programação orientada.");
console.log("A jornada estava longe do fim - era apenas o início de uma saga maior.");
console.log("Pois " + nome + " havia provado ser digno do título supremo:");
console.log("⚡ O SAMURAI SILENCIOSO ⚡");

console.log("");
console.log("🎯 FIM DO NÍVEL 3 | AGUARDE FUTURAS AVENTURAS NA ACADEMIA DOS CÓDIGOS! 🎯");

