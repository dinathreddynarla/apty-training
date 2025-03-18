function checkLeapYear() {
    let year = document.getElementById("year").value;
    year =  Number(year);

    // Check if marks are a positive number
    if (year < 0) {
        document.getElementById("result").innerText = 'year should be a positive number';
        return;
    }

    // Determine the grade
    let result = document.getElementById("result");
    if((year % 4 == 0) && (year % 100 !=0) || (year % 400 == 0)){
        result.innerText = `${year} is a Leap Year`
    }else{
        result.innerText = `${year} is not a Leap Year`
    }
    

}
