fetch('http://localhost:900/addProduct' , {
    method : 'POST',
    headers: { 
        'Content-Type': 'application/json' 
    },
    body: JSON.stringify({
        title: 'Phone',
        brand: 'Samsung'
    })
})
.then((res)=> res.json())
.then((res)=> console.log(res))