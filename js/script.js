
// pego todos os campos com o matributo required = obrigatorio 
const camposDoFormulario = document.querySelectorAll("[required]")

// escutador de campos com addeventlistner
camposDoFormulario.forEach((campo)=>{
    campo.addEventListener("blur",()=> verificaCampo(campo));
})


function verificaCampo(campo){
    console.log(campo);
}
