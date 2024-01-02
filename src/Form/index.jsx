import { useState } from "react";

export default function Form() {
    const [formData, setFormData] = useState({firstName: '', lastName: ''});
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(previousState => {
            return {
                ...previousState,
                [name]: value
            }
        })
    }

    const handleSubmit = () => {
        console.log(formData);
    }

    return (
        <div>
            <label htmlFor="firstName">First Name:</label>
            <input value={formData.firstName} onChange={handleChange} name="firstName" id="firstName" type="text" />

            <label htmlFor="lastName">Last Name:</label>
            <input value={formData.lastName} onChange={handleChange} name="lastName"  id="lastName" type="text" />
            <button onClick={handleSubmit} type="submit">Sumbit</button>
        </div>
    )
}