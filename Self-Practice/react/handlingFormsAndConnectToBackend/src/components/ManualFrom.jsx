import { useState } from 'react'

const ManualFrom = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    function handleChange(e) {
        let currentValue = e.target.value;
        let currentKey = e.target.id;
        let newFormData = { ...formData };
        newFormData[currentKey] = currentValue;
        setFormData(newFormData)
    }

    return (
        <form action="">
            <h1>Manual Form</h1>
            <input
                type="email"
                name="email"
                id="email"
                placeholder='Enter your email'
                value={formData.email} onChange={handleChange} />

            <input
                type="password"
                name="password"
                id="password"
                placeholder='Enter your password'
                value={formData.password} onChange={handleChange} />

            <button onClick={(e) => {
                e.preventDefault()
                console.log(formData)
            }}>Login</button>
        </form>
    )
}

export default ManualFrom
