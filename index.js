let balance = 1200;
let operator = prompt("include operator");
let money = Number(prompt("include money"));
function sum(balance,money) {
    return balance + money;
}
function sub(balance,money) {
    return balance - money;
}
 Bank(balance, money, operator);

function Bank( balance, money,operator) {
    switch (operator) {
        case "+":
            alert("Balance: "+sum(balance, money))
          
            break;
        case "-":
            if (balance > money) {
                alert(sub(balance, money));
            }
            else if (balance < money) {
                alert("you have not enough money")
            }
            break;
        default:
            alert("please ,input correct operator");
                break;
    
    }
}