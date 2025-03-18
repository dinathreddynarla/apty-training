
let cache = {}
function getFact(n){
    if(cache[n]){
        //if value in cache , return factorial from cache
        return cache[n]
    }
    if(n == 0) return 1;
    let fact =1
    for(let i =1 ;i<=n;i++){
        fact *=i
    }
    //calculate factorial and store in cache for future uses
    cache[n] = fact;

    return cache[n]
}

function calculateFactorial(){
    let number = parseInt(document.getElementById('number').value); // Parse input to integer
            if (isNaN(number) || number < 0) {
                document.getElementById('result').innerText = 'Please enter a valid positive number.';
            } else {
                document.getElementById('result').innerText = `Factorial is ${getFact(number)}`;
            }
}