import React, { useState } from 'react';
import axios from 'axios';

const FormProduct = () => {

    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');



    const onFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', title);
        // console.log(formData.get("file"));
        // console.log(formData.get("title"));
        // console.log('formData', formData);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("http://localhost:3001/api/products", formData, config)
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
        });
    }

    const onChange = (e) => {
        setFile(e.target.files[0]);
    };

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <label>File Upload</label>
            <input type="file" name="file" onChange= {onChange} />
            <label>title</label>
            <input type="text" name="title" value={title} onChange={onChangeTitle} />
            <button type="submit">Upload to DB</button>
    </form>
    )
}

export default FormProduct;