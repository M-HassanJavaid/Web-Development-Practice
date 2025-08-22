async function getProducts() {
    let data = await fetch('https://fakestoreapi.com/products/1');
    let json = await data.json();
    console.log(json)
}

getProducts()