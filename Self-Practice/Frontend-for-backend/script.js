async function signup() {
    const email = 'javaidhassan474@gmail.com';
    const password = 'hassan.92';

    if (!email || !password) {
        alert('Email and password are required!');
        return;
    }

    try {
        const response = await fetch('http://localhost:9090/createNewUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Something went wrong');
        }

        console.log('Signup successful:', result);
    } catch (error) {
        alert('Error occurred!');
        console.log(error.message);
    }
}

document.querySelector('button').addEventListener('click', signup);
