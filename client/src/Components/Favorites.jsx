import React,{useContext} from "react"
import { DataContext } from "./MovieContext"



 function Favorites() {

    const {favorites,deleteFavoriteDb} = useContext(DataContext)
    console.log(favorites, "comparing")
    return (
        <div className="grid grid-cols-3 gap-3 mt-5">
          
            {favorites.map(data => (
              <section className="movie-container flex flex-wrap justify-center flex--movie hover:scale-110 p-10">
              <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">   
                  <div class="absolute backface-hidden border-2 w-full h-full">  
                    <img src={data.Poster} className="w-full h-full" />
                 </div>
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
          <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
            <h3 className="text-3xl font-semibold">{data.Title}</h3>
            <span className="my-2">{data.Year}, {data.Genre}</span>
            <span>{data.Actors}</span>
            <span>{data.Awards}</span>
            <p>{data.Plot}</p>
            <button className="bg-black px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"
            onClick={() => deleteFavoriteDb(data._id)}>Remove From Favorites
            </button>
          </div>
        </div>
      </div>
    </div>
    </section>
                ))}   
        </div>
        )  
    }
        export default Favorites

       