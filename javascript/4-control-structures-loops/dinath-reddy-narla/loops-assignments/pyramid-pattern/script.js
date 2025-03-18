function createPyramid(){
    let rows =  Number(document.getElementById('rows').value);
    let result = document.getElementById('result')
    result.innerHTML = ""

    for(let i = 0 ; i< rows ; i++){
        let str = ""
        for(let spaces = 0 ; spaces < rows -i-1;spaces++){
            str += " "
        }
        for(let j = 0;j < i+1 ; j++){
            str += "* "
        }
        result.innerHTML += `${str} <br>`
    }
}