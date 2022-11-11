// function translate(size){
//     switch(size){
//         case S:
//             size = 1
//             break
//         case M:
//             size = 2
//             break
//         case L:
//             size =3
//         default:
//             console.log("Invalid input")
//     }

//     return size
// }

function compare(total, request){
    
    newTotal = total.slice(-1)[0]
    newRequest = request.slice(-1)[0]

    let totalscore = 0
    let requestscore = 0

    if (newTotal === "S"){
        totalscore -= total.length
    } else if (newTotal === "M"){
        totalscore = 0
    } else if (newTotal === "L"){
        totalscore += total.length
    }

    if (newRequest === "S"){
        requestscore -= request.length
    } else if (newRequest === "M"){
        requestscore = 0
    } else if (newRequest === "L"){
        requestscore += request.length
    }

    console.log(`requestscore = ${requestscore}`)
    console.log(`totalscore = ${totalscore}`)

    if (totalscore > requestscore){
        console.log("return true")
        return true
    }

    console.log("return false")
    return false
    

}

function validate(n, total, m, request){
    
    if (n != total.length){
        console.log('not matching total length')
        return
    }else if (m != request.length){
        console.log('not matching request length')
        return
    }

    for (let y = 0; y < request.length; y++){
        for (let x = 0; x < total.length; x++){
            console.log(total[x] + "&" + request[y])
            let result = compare(total[x], request[y])
            if (result === false && x === (total.length - 1))
                console.log('No')
                return
            }
            
            console.log("continue matching")
            continue
        }
    

    console.log("Yes")

}

validate(5, ["XL", "XXXXXL", "XXS", "M", "XXS"], 4, ["L", "M", "L", "XXS"])