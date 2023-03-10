import React,{useContext}from "react"
import {DataContext} from "./MovieContext"

function Home (){

    const {homePage} = useContext(DataContext)

    const favoriteMovies = homePage.map(data => {
        return (
            <section className="movie-container flex flex-wrap justify-center flex--movie hover:scale-110 p-10">
          <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">   
              <div class="absolute backface-hidden border-2 w-full h-full">  
                <img src={data.poster} className="w-full h-full" />
             </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-18">
                <h3 className="text-3xl font-semibold">{data.title}</h3>
                <span className="my-2">{data.year}, {data.genre}</span>
                <span>{data.actors}</span>
                <span>{data.awards}</span>
                <p className="">{data.plot}</p>
      </div>
    </div>
  </div>
</div>
</section>

        )
    })

    return(
      <div class="w-full h-screen relative flex items-center">
      <div class="mx-auto max-w-6xl py-20 px-12 lg:px-24 shadow-xl mb-24">
        <div class="mb-12">
          <h1 class="text-3xl font-bold text-white lg:text-4xl text-center mb-6 tracking-wider">The InfoMovie App</h1>
          <p class="tracking-wide text-sm text-white leading-loose mx-auto max-w-xl text-center">
              Once in everyone's life they have asked a friend for a movie recommendation
              , or was recommended to watch a particular movie. Our response were "Well Is It Good ?",
              im here to answer that question. I developed a movie app that lets you search for
              movies and in return receive information about that movie, that will help you determine
              if said movie is good or not.
            </p>
            </div>
            <div class="flex flex-wrap -mx-2">
              <div className="grid grid-cols-3 gap-3 mt-5">
                {favoriteMovies}
                </div>      
          </div>
        </div>
      </div>

    )
}

export default Home