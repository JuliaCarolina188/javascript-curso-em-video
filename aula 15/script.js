let num = [1, 2, 3, 4, 5, 6]

console.log(`Nosso vetor é: ${num}\n`)
console.log(`Temos: ${num.length} elementos\n\n`)

num[7] = 7

console.log(`Nosso vetor é: ${num}\n`)
console.log(`Temos: ${num.length} elementos\n\n`)


num.push(12)

console.log(`Nosso vetor é: ${num}\n`)
console.log(`Temos: ${num.length} elementos\n\n`)


num.pop()

console.log(`Nosso vetor é: ${num}\n`)
console.log(`Temos: ${num.length} elementos\n\n`)

num.sort()

console.log(`Nosso vetor é: ${num}\n`)
console.log(`Temos: ${num.length} elementos\n\n`)

for (let i = 0; i <= num.length; i++) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

for (i in num) {
    console.log(`Tem o valor ${i} a posição ${num[i]}`)
}

console.log(`Posição do 1: ${num.indexOf(1)}`)