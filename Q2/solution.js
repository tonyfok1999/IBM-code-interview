function validate(input){
    let allValid = true
    errorCodes = []

    for (let i = 0; i < input.length; i++) {
        let newInput = input.split(' ')
        allValid = newInput[1]
        if(!newInput[1]){
            errorCodes.push(newInput[2])
        }
    }

    if (allValid) {
        console.log("Yes")
    } else {
        console.log("No")
        console.log(errorCodes.join(" "))
    }

}