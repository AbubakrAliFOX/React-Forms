import { useState } from "react";

export default function ShoppingListForm ({addItem}) {
    const [formData, setFormData] = useState({item: '', qty: 0});
    const handleChange = (evt) => {
        setFormData(previousState => {
            return {
                ...previousState,
                [evt.target.name]: evt.target.value
            }
        })
    }
    const sumbitForm = (evt) => {
        evt.preventDefault();
        addItem(formData);
    }

    return (
        <form onSubmit={sumbitForm}>
            <h1>{formData.item}, {formData.qty}</h1>
            <label htmlFor="item">Item</label>
            <input value={formData.item} onChange={handleChange} id="item" name="item" type="text" />
            <label htmlFor="qty">Quantity</label>
            <input value={formData.qty} onChange={handleChange} id="qty" name="qty" type="number" />
            <button type="sumbit">Add</button>
        </form>
    )
} 