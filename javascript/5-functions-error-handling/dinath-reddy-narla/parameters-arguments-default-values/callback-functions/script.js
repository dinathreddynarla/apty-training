
function callbackUpper(str){
    return str.toUpperCase()
}

function convertToUpper(callbackUpper , str = "Dinath Reddy"){
    return callbackUpper(str)

}

document.getElementById('convert').addEventListener('click',()=>{
    
    let str = document.getElementById('input').value.trim();
    //if no input is given length of input is 0 has emptystring
    //to trigger default value , we need to send empty string as undefined
     str = str.length == 0 ? undefined : str

    document.getElementById('result').innerText = convertToUpper(callbackUpper,str)
})