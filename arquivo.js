function generateNumber() {


    const min = Math.ceil(document.querySelector(".input1").value)
    const max = Math.floor(document.querySelector(".input2").value)
    

    if(min > max) {
        alert("O valor máximo deve ser MAIOR, que o valor mínimo!  ")

    }
    else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
   
    alert(result)

    }
    
}

