export default function ehMaiorDeIdade(campo){
    const dataNascimento = new Date(campo.value)
    validaIdade(dataNascimento)
    console.log(validaIdade(dataNascimento))
}

function validaIdade(data){
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18 , data.getUTCDate()) // PEGOU AS A DATA INSERIDA NO CAMPO HTML
    return dataAtual >= dataMais18;
}
// parei aqui....