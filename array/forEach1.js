const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
 aprovados.forEach(function(nome, indice, array){
     console.log(`${indice+1}) ${nome}`)
     array.push(indice)
     console.log(array)
 })

 aprovados.forEach(nome => console.log(nome))

 const exibirAprovados = aprovado => console.log(aprovado)

 aprovados.forEach(exibirAprovados)