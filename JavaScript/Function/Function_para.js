// Normal cost 
var beer_cost=5.75;
var burger_cost=3.57;
var pop_cost=3.30;

// main account
var account_balance=15.75;

function drink_beer(){
    account_balance=account_balance-beer_cost;
    console.log(account_balance);
}

function eat_burger(){
    account_balance=account_balance-burger_cost;
    console.log(account_balance);
}

function drink_pop(){
    account_balance=account_balance-pop_cost;
    console.log(account_balance);
}

var mealList =[drink_beer, eat_burger, drink_pop];

// mList is a parameter
function allcalculation(mList){

    for (var i=0;i<mList.length;i++)
    {
        mList[i]();
    }

}

allcalculation(mealList);