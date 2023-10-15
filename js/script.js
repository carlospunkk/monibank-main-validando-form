// importar a função ehumCpf() de valida-cpf 
import ehumCpf from "./valida-cpf.js";
import ehMaiorDeIdade from "./valida-idade.js";



// pego todos os campos com o  atributo required = obrigatorio 
const camposDoFormulario = document.querySelectorAll("[required]")

// escutador de campos com addeventlistner
camposDoFormulario.forEach((campo)=>{
    campo.addEventListener("blur",()=> verificaCampo(campo));
})


function verificaCampo(campo){
    if(campo.name == "cpf" && campo.value.length >= 11){
    ehumCpf(campo)
    }
    if(campo.name == "aniversario" && campo.value != ""){
    ehMaiorDeIdade(campo)
    }
}
