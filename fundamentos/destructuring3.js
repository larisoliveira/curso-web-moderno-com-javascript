// Desestruturação em uma função

function rand({ min = 0, max = 1000 }) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

const obj = { max: 50, min: 40 }

// Retornando um valor randômico entre 40 e 50
console.log(rand(obj))

console.log(rand({ min: 955 }))