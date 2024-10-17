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

function draw(pink) {
  background(220);
}let campoIdade;

function setup() {
  createCanvas(400, 400);
  campoIdade = createInput("15");
}

function draw() {
  background(220);
  let idade = 15; // exemplo de idade
  let recomendacao = geraRecomendacao(idade);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "alquimia das almas";
    } else {
      return "caçadores de demonios";
    }
  } else {
    return "pretendente surpresa";
  }
}function geraRecomendacao(idade, gostaDeFantasia) {
    if(idade >= 10) {
        if(idade >= 14) {
            return "alquimia das almas";
        } else {
            if(gostaDeFantasia){
                return "caçadores de demonios";
            } else {
                return "pretendente surpresa";
            }
        }
    } else {
        if(gostaDeFantasia) {
            return "pretendente surpresa";
        } else {
            return "sorriso real";
        }
    }
}function setup() {
    createCanvas(800, 400);
    createSpan("Sua idade:");
    campoIdade = createInput("5");
    campoFantasia = createCheckbox(" Gosta de fantasia?");
}

function draw() {
    background("white");
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia);

    fill(color(76, 0, 115));
    textAlign(CENTER, CENTER);
    textSize(38);
    text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia) {
    if (idade >= 10) {
        if (idade >= 14) {
            return "alquimia das almas";
        } else {
            if (gostaDeFantasia) {
                return "caçadores e demonios";
            } else {
                return "pousando no amor";
            }
        }
    } else {
        if (gostaDeFantasia) {
            return "pousando no amor";
        } else {
            return "sorriso real";
        }
    }
}function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 18) {
      return "bailarina";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "alquimia das almas";          
        } else{
         return "ate que as cores acabem";
        }
      } else {
        if (gostaDeFantasia) {
          return "caçadores de demonios";
        } else {
          return "pousando no amor";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "pousando no amor";
    } else {
      return "sorriso real";
    }
  }
}