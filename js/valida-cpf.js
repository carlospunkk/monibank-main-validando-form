export default function ehumCpf(campo){
 const cpf = campo.value.replace(/\.|-/g, ""); // replace recebe dois parametros o que a gente quer substituir e o segundo pelo que queremos substituir
 validaNumerosRepetidos(cpf)
 validaprimeiroDigito(cpf)
 
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

function validaprimeiroDigito(cpf){
  let soma = 0 ;
  let multiplicador =10;

  for(tamanho = 0 ; tamanho <=9 ; tamanho++){
    soma += cpf[tamanho] * multiplicador;
    multiplicador-- 
  }
  soma = (soma * 10) % 11;

  if(soma == 10 || soma == 11){
    soma = 0;

  }
  return soma != cpf[9];
}