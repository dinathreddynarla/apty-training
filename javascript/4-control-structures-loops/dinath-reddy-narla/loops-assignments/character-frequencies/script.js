function calculateFrequencies(){
    let inputString = document.getElementById('input-string').value;
    let result = document.getElementById("result")
    result.innerHTML = ""
    let frequencyObject = {}
    for( let  i in inputString){
            if(inputString[i] == " ") continue;
            frequencyObject[inputString[i]] = (frequencyObject[inputString[i]] + 1) || 1
    }

    for(let  char in frequencyObject){
        
        result.innerHTML += `Character : ${char} --> frequency : ${frequencyObject[char]} <br>`
    }
    
}