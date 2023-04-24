const input = document.querySelector("#validation-input")
function inputValidityCheck(){
    let dataLength = input.getAttribute("data-length")
    if(input.value.length===(Number(dataLength))){
        input.classList.add("valid")
        input.classList.remove("invalid");
    } else{
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
}
input.addEventListener("blur", inputValidityCheck);