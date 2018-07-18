function totalAmount(bill, service){
    if (service == "good"){
        return (bill * .20) + bill
    }
    else if (service == "fair"){
        return (bill * .15) + bill
    }
    else if (service == "bad"){
        return (bill * .10) + bill
    }
}
console.log(totalAmount(120, "bad"))

