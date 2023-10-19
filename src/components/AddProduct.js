import React, { useState } from 'react';

const AddProduct = () => {
    const [productData, setProductData] = useState({
        photo: '',
        name: '',
        description: '',
        category: '',
        quantity: '',
        price: ''
    });

    const handleChange = event => {
        const { name, value } = event.target;
        setProductData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleFileChange = event => {
        const file = event.target.files[0];
        setProductData(prevData => ({
            ...prevData,
            photo: file ? file.name : ''
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(productData);
    };

    return (
        <div className="container">
            <h2 className="text-center mt-5">New Product</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-3 text-center">
                    <label className="btn btn-primary">
                        UPLOAD PHOTO
                        <input 
                            type="file" 
                            className="form-control d-none" 
                            onChange={handleFileChange} 
                            style={{ display: 'none' }} 
                        />
                    </label>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Name" name="name" value={productData.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Description" name="description" value={productData.description} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Category" name="category" value={productData.category} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <input type="number" className="form-control" placeholder="Quantity" name="quantity" value={productData.quantity} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Price" name="price" value={productData.price} onChange={handleChange} />
                </div>
                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary">SUBMIT</button>
                    <button type="button" className="btn btn-secondary">CANCEL</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;