var idade = 67

if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade >= 67){
    console.log('Voto opcional')
} else if (idade >= 18) {
    console.log('Voto obirgatório')
}