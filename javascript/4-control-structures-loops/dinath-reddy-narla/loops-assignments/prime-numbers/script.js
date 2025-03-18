function calculatePrime(){
    let number = Number(document.getElementById('number').value);
    let result = document.getElementById("result")
    result.innerText = ""

    if(number < 2){
    result.innerText = `Enter number starting from 2`
    return;
    }
    result.innerText += `The Prime Numbers within the given range are : 2`
    for(let i = 3 ; i <= number ;i++){
        let flag = true
        for(let j = 2 ; j <= Math.sqrt(i) ; j++){
            if(i % j == 0){
                flag = false;
                break
            }
        }
        if(flag){
            result.innerText += `, ${i}`
        }
    }
    
}