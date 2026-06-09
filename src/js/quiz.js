const perguntas = [
{
pergunta: "Qual a gravidade da Lua?",
opcoes: ["9,8 m/s²", "3,7 m/s²", "1,62 m/s²", "0,5 m/s²"],
correta: 2
},
{
pergunta: "Qual programa da NASA retornará à Lua?",
opcoes: ["Apollo", "Artemis", "Gemini", "Voyager"],
correta: 1
},
{
pergunta: "Qual cultura foi colhida na ISS em 2015?",
opcoes: ["Alface", "Tomate", "Milho", "Batata"],
correta: 0
},
{
pergunta: "Qual empresa desenvolveu o LunaFarm?",
opcoes: ["NASA", "ESA", "Lunar Gear", "SpaceX"],
correta: 2
},
{
pergunta: "Qual ODS é relacionada à Fome Zero?",
opcoes: ["ODS 1", "ODS 2", "ODS 5", "ODS 7"],
correta: 1
},
{
pergunta: "Quanto dura a noite lunar?",
opcoes: ["14 dias", "7 dias", "2 dias", "30 dias"],
correta: 0
},
{
pergunta: "Qual sensor mede CO2?",
opcoes: ["LDR", "MQ135", "DHT22", "BMP280"],
correta: 1
},
{
pergunta: "Qual temperatura pode ocorrer na noite lunar?",
opcoes: ["-173°C", "-50°C", "10°C", "-20°C"],
correta: 0
},
{
pergunta: "Qual cultivo é usado no LunaFarm?",
opcoes: ["Alface", "Café", "Soja", "Algodão"],
correta: 0
},
{
pergunta: "Onde o LunaFarm será utilizado?",
opcoes: ["Marte", "ISS", "Lua", "Saturno"],
correta: 2
}
];

const respostasUsuario = new Array(perguntas.length).fill(null);