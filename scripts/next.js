function nextGeneration() {
  calculateFitness();
  for (let i = 0; i < populationSize; i++) {
    dinos[i] = pickOne();
  }
  for (let i = 0; i < populationSize; i++) {
    deadDinos[i].dispose();
  }
  deadDinos = [];
}

function pickOne() {
  let index = 0;
  let r = random(1);
  while (r > 0) {
    r = r - deadDinos[index].fitness;
    index++;
  }
  index--;
  let dino = deadDinos[index];
  let child = new Dino(dino.brain);
  child.mutate();
  return child;
}

function calculateFitness() {
  let sum = 0;
  for (let dino of deadDinos) {
    sum += dino.score;
  }
  for (let dino of deadDinos) {
    dino.fitness = dino.score / sum;
  }
}
