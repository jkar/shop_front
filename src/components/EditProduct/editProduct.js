import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Header from '../Header/Header';

const EditProduct = ({ products, currentPage, user, errorSuccessMessage, setErrorSuccessMessage }) => {

    const id = useParams().id;
    const prods = products[currentPage-1];
    const product = prods.find(p => p._id == id);

    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(product.title);
    const [description, setDescription] = useState(product.description);

    const deleteOldImage = async () => {

        try {
            const config = {
                headers: { Authorization: `Bearer ${user.data.token}` },
              }
              const res2 = await axios.post(`http://localhost:3001/api/products/img`, { img : product.imagePath } , config)

        } catch (error) {
            console.log('ERROR', error.response.data)
            setErrorSuccessMessage(error.response.data.msg);
            setTimeout( () => {
                setErrorSuccessMessage('');
            }, 3000);
        }
    }

    const putCardWithoutImage = async () => {
        try {
            const config = {
                headers: { Authorization: `Bearer ${user.data.token}` },
              }

            const res = await  axios.put(`http://localhost:3001/api/products/withoutImage/${product._id}`, { title : title, description : description, imagePath : product.imagePath, date : Date.parse(product.date) } , config)
            setErrorSuccessMessage('file was uploaded successfuly');
            setTimeout(() => {
                setErrorSuccessMessage('');
            }, 3000);

        } catch (error) {
            console.log('ERROR', error.response.data)
            setErrorSuccessMessage(error.response.data.msg);
            setTimeout( () => {
                setErrorSuccessMessage('');
            }, 3000);
        }
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        // if (file === null || title === '' || description === '') {
            if (title === '' || description === '') {
            setErrorSuccessMessage('file or title or description is empty');
            setTimeout( () => {
                setErrorSuccessMessage('');
            }, 3000);
            return
        }

        console.log('DATE', product.date)
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('date', Date.parse(product.date));
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization' : `Bearer ${user.data.token}`
            }
        };
        if (file !== null ) {
            axios.put(`http://localhost:3001/api/products/${product._id}`, formData, config)
                .then((response) => {
                    deleteOldImage();
                    setErrorSuccessMessage('file was uploaded successfuly');
                    setTimeout(() => {
                        setErrorSuccessMessage('');
                    }, 3000);
                }).catch((error) => {
                    console.log('ERROR', error.response.data)
                    setErrorSuccessMessage(error.response.data.msg);
                    setTimeout( () => {
                        setErrorSuccessMessage('');
                    }, 3000);
            });
        } else {
            console.log('ELSE', file)
            putCardWithoutImage();
        }
    }

    const onChange = (e) => {
        setFile(e.target.files[0]);
    };

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const onChangeDescription = (e) => {
        setDescription(e.target.value);
    }

    return (
        <>
            <Header user={user} />
            <h3>Edit</h3>
            {/* <div>
                <p>{product.title}</p>
                <p>{product.description}</p>
                <p>{product.number}</p>
                {product.imagePath ? <img src={`http://localhost:3001/${product.imagePath}`} width='100px' height='100px' /> : null }
            </div> */}
            <form onSubmit={onFormSubmit}>
                <label>File Upload</label>
                <input type="file" name="file" onChange= {onChange} />
                <label>title</label>
                <input type="text" name="title" value={title} onChange={onChangeTitle} />
                <label>description</label>
                <input type="text" name="description" value={description} onChange={onChangeDescription} />
                <button type="submit">Upload to DB</button>
                { errorSuccessMessage !== '' ? <p>{errorSuccessMessage}</p> : null }
            </form>
        </>
    )
}

export default EditProduct;