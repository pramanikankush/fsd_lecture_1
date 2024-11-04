async function orderfood(name , time) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Order"+ name + "Preparedd"
            );

        },time);
    });
    
}