export default function ehumCpf(campo){
 const cpf = campo.value.replace(/\.|-/g, ""); // replace recebe dois parametros o que a gente quer substituir e o segundo pelo que queremos substituir
 validaNumerosRepetidos(cpf)
 console.log(validaNumerosRepetidos(cpf))
}

function validaNumerosRepetidos(cpf){
  const numerosRepetidos = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999'
  ]

  return numerosRepetidos.includes(cpf) // percorre a lista e retorna verdadeiro se achar os numeros repetidos
}
