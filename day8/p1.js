async function orderfood(name , time) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Order"+ name + "Prepared");

        },  time);
    });
    
}
async function resturant() {
    console.log("Order Placed");
    const pizza = await new orderfood("pizza", 1000);
    console.log(pizza);
    const burger = await new orderfood("burger", 500);
    console.log(burger);
    console.log("Order Served");
     try{
        const iceCream = await new orderfood("iceCream", 2000);
        console.log(iceCream);
     }catch(err){
        console.log("Error in iceCream order: ", err);
     }

     const noodles = await new orderfood("noodles", 2000);  
     console.log(noodles);
     console.log("Order Completed");
}
resturant();