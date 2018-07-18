function tipAmount(bill, service){
        if (service == "good"){
            return bill * .20
        }
        else if (service == "fair"){
            return bill * .15
        }
        else if (service == "bad"){
            return bill * .10
        }
}
console.log(tipAmount(80, "fair"))