import React, {useState, useEffect} from 'react'
import "./ItemInfoStyles.css"
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const ItemInfo = () => {

  const [item, setItem] = useState([])
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  } 

  useEffect(() => {

    axios.get("http://localhost:5028/api/tvshows/" + localStorage.getItem('itemId'))
        .then(res => {
            console.log(res)
            setItem(res.data)

        })
        .catch(err => {
            console.log(err)
        })

  }, [])


  return (

  <div className='itemInfo'>
    <div className='backButton'><button onClick={handleButtonClick}>Go back</button></div>
    <div className='container'>
      <div className="card">

          <img src={item.image} alt='Avatar'/>

          <div class="cardContainer">
             <p><b>Name: </b> {item.name}</p>
             <p><b>Release year: </b> {item.releaseYear}</p>
             <p><b>Genre: </b> {item.genre}</p>
             <p><b>Description: </b> {item.description}</p>
             <p><b>Review: </b> {item.review}</p>

        </div>
      </div>
    </div>
  </div>
  )
}

export default ItemInfo