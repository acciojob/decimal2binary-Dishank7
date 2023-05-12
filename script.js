

let dec = 7;
let binary = "";
while(dec > 0){
    if(dec % 2 == 1){
     binary = "1" + binary;
    }else{
        binary = '0' + binary;
    }
    dec = parseInt(dec/2);
}

console.log(binary);