import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "./ItemsTableStyles.css"
import {useNavigate} from 'react-router-dom'
import Pagination from '../pagination/pagination';


const ItemsTable = () => {

    const [items, setItems] = useState([])
    const [inputText, setInputText] = useState("");
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);


    const handleRowClick = (item) => {

        localStorage.setItem('itemId', item.id);
        navigate("/info");
    }  

    const handleButtonClick = () => {
        navigate("/create");
    } 

    useEffect(() => {

        axios.get('http://localhost:5028/api/tvshows')
            .then(res => {
                console.log(res)
                setItems(res.data)

            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    let inputHandler = (e) => {
      var lowerCase = e.target.value.toLowerCase();
      setCurrentPage(1);
      setInputText(lowerCase);
    };

    const filteredData = items.filter((el) => {
        if (inputText === '') {
            return el;
        } else {
            return el.name.toLowerCase().includes(inputText)
        }
    })

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

  return (

    <div className='itemsTable'>
        <div class="container">

            <div className='title'>
                <h1>Tv Shows Reviews ⸜( ⌓̈ )⸝</h1>

            </div>

            <div className='tools'>


                <div className='search'><input type="text" placeholder="Search.." onChange={inputHandler}/></div>
                {/* <button><Link to='/create'>Add new</Link></button> */}
                <button onClick={handleButtonClick}>Add new</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Release year</th>
                        <th>Genre</th>
                        <th>Review</th>
                    </tr>
                </thead>
                <tbody>

                {currentPosts.map((item) => (

                    <tr onClick={()=> handleRowClick(item)}>
                        <td>{item.name}</td>
                        <td>{item.releaseYear}</td>
                        <td>{item.genre}</td>
                        <td>{item.review}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div className='pages'>
                    <Pagination 
                        postsPerPage={postsPerPage}
                        totalPosts={filteredData.length}
                        paginate={paginate}
                    />
            </div>
        </div>
    </div>
  )
}

export default ItemsTable