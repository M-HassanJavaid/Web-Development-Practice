// const promise = createOrder(cart)  //API

// promise.then(function(orderId){
//    return payment(orderId)
// }).then(function (paymentStatus){
//     return getOrderDetails(paymentStatus)
// }).then(function (orderDetails){
//     return fulfillOrder(orderDetails)
// }).then(function (fulfillmentStatus){
//     console.log(`Fulfillment Status: ${fulfillmentStatus}`);
// })

// promise.then(orderid => payment(orderid))
// .then(paymentStatus => getOrderDetails(paymentStatus))
// .then(orderDetails => fulfillOrder(orderDetails))
// .then(fulfillmentStatus => {
//     console.log(`Fulfillment Status: ${fulfillmentStatus}`);
// })


const promise = createOrder(cart) //--> PROMISE !!

promise.then((orderId) => {
    console.log(`Order created with ID: ${orderId}`);
    return payment(orderId)
}).then((paymentStatus) => {
    console.log(`Payment Status: ${paymentStatus}`);
    return getOrderDetails(paymentStatus)
}).then((orderDetails) => {
    console.log(`Order details : ${orderDetails}`);
    return fulfillOrder(orderDetails)
}).then((fulfillmentStatus)=>{
    console.log(fulfillmentStatus)
}).catch((error) => {
    console.log(`Error: ${error}`);
})

function createOrder(cart) {

    const promise = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            reject('Cart is not valid');
        }

        const orderId = 1234567890;
        resolve(orderId)

    })

    return promise;
}
function validateCart() {
    return false
}

function payment(orderId) {
    return new Promise(function (resolve, reject) {

        setTimeout(() => {
            if (orderId === 1234567890) {
                resolve('Payment Successful');
            } else {
                reject('Payment Failed');
            }
        }, 3000)


    })
}


function getOrderDetails(paymentStatus) {
    
    return new Promise((res , rej)=>{
        if (paymentStatus) {
            res({
                CustomerName: 'hassan',
                productName: 'Tshirts',
                price: '23$'
            })
        } else {
            rej('could not get order details');
        }
    })


}

function fulfillOrder(orderDetails){
    let trueOrFalse = true;

    return new Promise((resolve, reject) => {
        if (trueOrFalse) {
            resolve('Order has fulfiled!')
        } else {
            reject('Order could not be fulfiled')
        }
        
    })

}