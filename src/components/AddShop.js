import React, { useState } from 'react';

const AddShop = () => {
    const [shopData, setShopData] = useState({
        logo: '',
        name: '',
        description: ''
    });

    const handleChange = event => {
        const { name, value } = event.target;
        setShopData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleFileChange = event => {
        const file = event.target.files[0];
        setShopData(prevData => ({
            ...prevData,
            logo: file ? file.name : ''
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(shopData);
    };

    return (
        <div className="container">
            <h2 className="text-center mt-5">New Shop</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 text-center">
                    <label className="btn btn-primary">
                        UPLOAD LOGO
                         <input 
                            type="file" 
                            className="form-control d-none" 
                            onChange={handleFileChange} 
                            style={{ display: 'none' }} 
                       />
                  </label>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Name" name="name" value={shopData.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Description" name="description" value={shopData.description} onChange={handleChange} />
                </div>
                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary">SUBMIT</button>
                    <button type="button" className="btn btn-secondary">CANCEL</button>
                </div>
            </form>
        </div>
    );
};

export default AddShop;
