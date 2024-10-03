// vingadores-13-ação,aventura,ficção cientifica
// guardiões da galáxia-12-ação,ficção cientifica
// ate que as cores acabem-12-drama romance
// bailarina-18-ação
// viuva negra-12-ação,ficção cientifica
//caçadores de demonios-16-drama,ação
//alquimia das almas-14-romance
//pretendente surpresa-14-comedia romantica
//pousando no amor-14-drama,romance,ação
//sorriso real-12-comedia romantica
function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(220);
}
function draw() {
    background(220);
    let recomendacao = "vingadores";
    text(recomendacao, width/2, height/2);
}
let campoIdade;

function setup() {
  createCanvas(400, 400);
  campoIdade = createInput("13");
}

function draw() {
  background(220);
  let idade = 13; // exemplo de idade
  let recomendacao = geraRecomendacao(idade);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade) {
  if (idade >= 12) {
    if (idade >= 14) {
      return "guardiões da galaxia";
    } else {
      return "Alquimia das almas";
    }
  } else {
    return "pretendente surpresa";
  }
}
function geraRecomendacao(idade, gostaDeFantasia) {
    if(idade >= 10) {
        if(idade >= 14) {
            return "O menino que descobriu o vento";
        } else {
            if(gostaDeFantasia){
                return "As aventuras de Pi";
            } else {
                return "Depois da chuva";
            }
        }
    } else {
        if(gostaDeFantasia) {
            return "A viagem de Chihiro";
        } else {
            return "O feitiço do tempo";
        }
    }
}