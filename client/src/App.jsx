import {Routes, Route, Link} from "react-router-dom"
import Home from "./Components/Home"
import MovieContext  from "./Components/MovieContext"
import SearchStyle from "./Components/SearchStyle"
import Favorites from "./Components/Favorites"

function App () {
    return (
        <div>
            <div >
                <nav className="relative w-80 mb-5 flex flex-wrap items-center justify-between
                py-5 ">
                <Link to="/Home" style={{padding: 5}}> 
                    Home
                </Link>
                <Link to="/SearchStyle" style={{padding: 5}}>
                    Search
                </Link>
                 <Link to="/Favorites" style={{padding: 5}}>
                    Favorites
                </Link> 
            </nav>
            

            <MovieContext>
                <Routes>
                    <Route index element={<Home />}/>
                    <Route path="/Home"  index element={<Home />} />
                    <Route path="searchStyle" element={<SearchStyle />}/>
                    <Route path="/Favorites" element={<Favorites />}/>
                </Routes>
            </MovieContext>

            </div>
        </div>
    )
}

export default App

