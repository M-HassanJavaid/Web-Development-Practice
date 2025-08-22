function createOrder() {
    const promise = new Promise((res , rej)=>{
        if (!validateCart()) {
            rej('Cart is not valid')
        } 

        const orderID = 1234;
        res(orderID)
    });

    return promise
}

function validateCart() {
    return false
}

createOrder()
.then((orderID)=>{
    console.log(`your new Order Id is ${orderID}`)
    return payment(orderID)
})
.then((paymentStatus)=>{
    console.log(paymentStatus)
    //...continue
})
.catch((err)=>{
    console.log(err)
})

function payment(orderID) {
    return new Promise((res , rej)=>{
        if (orderID === 1234) {
            res('Payment is succesfull')
        } else {
            rej('Payment failed')
        }
    })
}