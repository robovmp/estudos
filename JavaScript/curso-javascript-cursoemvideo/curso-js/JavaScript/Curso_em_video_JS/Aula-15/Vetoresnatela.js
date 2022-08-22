var valores = [8, 5, 2, 9, 4]
/*
for (var pas = 0; pas < valores.length; pas++){
    console.log(`A posição ${pas} tem o valor ${valores[pas]}`)
}
*/
for (var pas in valores) {
    console.log(`A posição ${pas} tem o valor ${valores[pas]}`)
}