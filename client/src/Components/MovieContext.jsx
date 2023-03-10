import React, { createContext, useState} from 'react'
import axios from "axios"
import "/src/App.css"
import { useEffect } from 'react'



 export const DataContext = createContext()

export default function MovieContext(props) {
  

  const [homePage, setHomePage] = useState([
    {
      title:"Malcolm X",
      year:"1992",
      genre:"Biography, Drama, History",
      awards:"Nominated for 2 Oscars. 20 wins & 24 nominations total",
      actors: "Denzel Washington, Angela Bassett, Delroy Lindo",
      plot:"Biographical epic of the controversial and influential Black Nationalist leader,from his early life and career as a small-time gangster, to his ministry as a member of the Nation of Islam.",
      poster: "https://m.media-amazon.com/images/M/MV5BZDkzOTFmMTUtMmI2OS00MDE4LTg5YTUtODMwNDMzNmI5OGYwL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      title:"Training Day",
      genre:"Action, Crime, Drama",
      actors: "Denzel Washington, Ethan Hawke, Scott Glenn", 
      awards:"Won 1 Oscar. 18 wins & 23 nominations total",
      year: "2001",
      plot: "A rookie cop spends his first day as a Los Angeles narcotics officer with a rogue detective who isn't what he appears to be.",
      poster: "https://m.media-amazon.com/images/M/MV5BMDZkMTUxYWEtMDY5NS00ZTA5LTg3MTItNTlkZWE1YWRjYjMwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      title: "Ali",
      awards: "Nominated for 2 Oscars. 10 wins & 27 nominations total",
      genre: "Biography, Drama, Sport",
      actors: "Will Smith, Jamie Foxx, Jon Voight",
      year: "2001",
      plot:"A biography of sports legend Muhammad Ali, focusing on his triumphs and controversies between 1964 and 1974.",
      poster: "https://m.media-amazon.com/images/M/MV5BZjA3OTUxNTktN2FlNC00NGUyLWI1NDktY2FlZTc5MDlmOGFhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    }

  ])
 
  const [searchData, setSearchData] = useState({
    title:"",
    id:""
  })
  const [apiData, setApiData] = useState([])
  const [favorites, setFavorites] = useState([])

  function handleChange(e){
    const {name, value} = e.target
    setSearchData(prevSearch => {
      return {
        ...prevSearch,
        [name]:value
      }
    })

  }
  function handleSubmit(e){
    e.preventDefault()
      axios.get(`http://www.omdbapi.com/?t=${searchData.title}&apikey=9d97bb4b`)
      .then((res) => setApiData(([
        res.data
      ])))

      .catch(error => console.log(error)) 
    }
    console.log(apiData, "testing ApiData")

    function getFavorites(){
      axios.get("http://localhost:3001/favoritesData")
      .then(res => setFavorites(res.data))
      .catch(err => console.log(err))
    }

    useEffect(() =>{
      getFavorites()
    }, [])

    function addToFavoritesDb(newFavorite){
      axios.post("http://localhost:3001/favoritesData", newFavorite)
      .then(res => {
        setFavorites(prevFav => [...prevFav, res.data])
      })
    }
    
    function deleteFavoriteDb (favoriteId){
      axios.delete(`http://localhost:3001/favoritesData/${favoriteId}`)
      .then(res => {
        setFavorites(prevFav => prevFav.filter(favorite => favorite._id !== favoriteId))
        
      })
    }
    
    return (
      <DataContext.Provider 
      value={{
        homePage, searchData, setSearchData, handleChange,
        apiData,handleSubmit,addToFavoritesDb,favorites,
        deleteFavoriteDb
      }}>
            {props.children}
    </DataContext.Provider>
  )
}
