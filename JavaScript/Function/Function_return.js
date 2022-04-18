// Normal cost 
var beer_cost=5.75;
var burger_cost=3.57;
var pop_cost=3.30;

// main account
var account_balance=15.75;

function checkBalance(amount){
    if (account_balance - amount>0)
    {
        return true
    }else{
        console.log("Insuficient Funds");
        return false
    }

}

function drink_beer(){
    if (checkBalance(beer_cost))
    {
        account_balance=account_balance-beer_cost;
        console.log("Enjoy your beer");
    }
   
    console.log("\t Balance: "+account_balance);
}

function eat_burger(){
    if (checkBalance(burger_cost))
    {
        account_balance=account_balance-burger_cost;
        console.log("Enjoy your burger");
    }
    
    console.log("\t Balance: "+account_balance);
}

function drink_pop(){
    if (checkBalance(pop_cost)){
        account_balance=account_balance-pop_cost;
        console.log("Enjoy your pop");

    }
    
    console.log("\t Balance: "+account_balance);
}

var mealList =[drink_beer, eat_burger, drink_pop,drink_beer];

// mList is a parameter
function allcalculation(mList){

    for (var i=0;i<mList.length;i++)
    {
        mList[i]();
    }

}

allcalculation(mealList);