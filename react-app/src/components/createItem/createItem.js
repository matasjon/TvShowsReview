import React, { useState } from 'react'
import axios from "axios";
import "./CreateItemStyles.css"
import {useNavigate} from 'react-router-dom'

const CreateItem = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [review, setReview] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    const [msg, setMsg] = useState('');

    const handleButtonClick = () => {
        navigate("/");
    } 

    const CreateItem = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5028/api/tvshows', {
                name: name,
                description: description,
                review: review,
                genre: genre,
                releaseYear: releaseYear,
                image: image
            },);
            setMsg("Added succesfully");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
                setMsg("Failed to add");
            }
        }
    }

  return (
    <div className='createItem'>
        <div className='backButton'><button onClick={handleButtonClick}>Go back</button></div>
        <div className='container'>
            <div className='form-container'>
                <form onSubmit={CreateItem}>  
                    <h1>Add Tv Show</h1>
                    <p>{msg}</p>
                    <div>
                        <label>Name</label>
                        <input type="text" placeholder='Enter a name' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div>
                        <label>Release year</label>
                        <input type="number" min="1928" max="2023" placeholder='Enter a release year' value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} />
                    </div>

                    <div>
                        <label>Genre</label>
                        <input type="text" placeholder='Enter a genre' value={genre} onChange={(e) => setGenre(e.target.value)} />
                    </div>

                    <div>
                        <label>Description</label>
                        <textarea rows='5' placeholder='Enter a show description' value={description} onChange={(e) => setDescription(e.target.value)}/>
                    </div>

                    <div>
                        <label>Review</label>
                        <input type="text" placeholder='Enter a short review' value={review} onChange={(e) => setReview(e.target.value)} />
                    </div>

                    <div>
                        <label>Image</label>
                        <input type="text" placeholder='Enter a image URL' value={image} onChange={(e) => setImage(e.target.value)} />
                    </div>
                    
                    <button className='buttonForm' type="submit">Add</button>

                </form>
            </div>
        </div>
    </div>
  )
}

export default CreateItem