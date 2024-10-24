function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("rgb(200,202,228)");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 18) {
      return "bailarina";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "caçadores de demonio";          
        } else{
         return "pretendente surpresa";
        }
      } else {
        if (gostaDeFantasia) {
          return "ate que a cores acabem";
        } else {
          return "pousando no amor";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "alquimia da almas";
    } else {
      return "sorriso real";
    }
  }
}