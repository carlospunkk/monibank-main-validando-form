export default function ehumCpf(campo){
 const cpf = campo.value.replace(/\.|-/g, ""); // replace recebe dois parametros o que a gente quer substituir e o segundo pelo que queremos substituir
if(validaNumerosRepetidos(cpf) || validaprimeiroDigito(cpf) || validaSegundoDigito(cpf)){
  console.log("esse cpf não existe")
}else{
  console.log("existe!")
}

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

// cpf base 937.777.040-83
function validaprimeiroDigito(cpf){
  let soma = 0 ;
  let multiplicador =10;

  for(let tamanho = 0 ; tamanho < 9 ; tamanho++){ // repete por nove vezes 
    soma += cpf[tamanho] * multiplicador; // soma recebe soma + posicao do cpf multiplicado pelo multiplicador decremento 
    multiplicador-- // decremento 
  }
  // soma = 311
  soma = (soma * 10) % 11; // 311 * 10 = 3110 %mod 11 = 8 

  if(soma == 10 || soma == 11){
    soma = 0;

  }
  return soma != cpf[9]; // retorna soma diferente da posicao 9 
}

function validaSegundoDigito(cpf){
  let soma = 0 ;
  let multiplicador =11;

  for(let tamanho = 0 ; tamanho < 10 ; tamanho++){ // repete por nove vezes 
    soma += cpf[tamanho] * multiplicador; // soma recebe soma + posicao do cpf multiplicado pelo multiplicador decremento 
    multiplicador-- // decremento 
  }
  // soma = 311
  soma = (soma * 10) % 11; // 311 * 10 = 3110 %mod 11 = 8 

  if(soma == 10 || soma == 11){
    soma = 0;

  }
  return soma != cpf[10]; // retorna soma diferente da posicao 9 
}