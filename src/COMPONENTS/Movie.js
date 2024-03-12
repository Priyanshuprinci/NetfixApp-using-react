import {useState} from 'react'
import Axios from "axios"
import YouTube from "react-youtube"//In built Component
import movieTrailer from "movie-trailer"

function Movie(props) 
{
    const [ Movies, setMovies] = useState([])

    const [ fetchedVideoID, setFetchedVideoID ] = useState("")

  Axios.get(props.url)
  .then(function(output)
  {
    setMovies(output.data.results)
  })
  .catch(function(error)
  {
    console.log(error)
  })

  function collectTheMovieName(name)
  {
    
    movieTrailer(name)
    .then(function(output)
    {
      
        console.log(output)
     
        const myVideoID = new URLSearchParams(new URL(output).search).get("v")
        setFetchedVideoID(myVideoID)
        
    })
    .catch(function(error)
    {
        console.log(error)
    })
  }

  const additionalData = {
    height: "400px",
    width: "100%",
    playerVars: {
        autoplay: 1//Play the video
    }
  }

  return (
    <div>
        <h2 style={{color: "white", fontSize: "20px", fontWeight: "900"}}>{props.Name}</h2>
      
        { fetchedVideoID && <YouTube videoId={fetchedVideoID} opts={additionalData}/> }
        {/* console.log({fetchedVideoID}) */}
        <div className='trendingdiv' style={{display: "flex", overflowX: "scroll"}}>
        {
            Movies.map(function(i)
            {
                return (
                    <img style={{margin: "6px"}} onClick={function()
                    {
                      //console.log("hi")
                        collectTheMovieName(i.title)
                    }} height="250px" width="250px" src={"https://image.tmdb.org/t/p/original"+i.poster_path} />
                )
            })
        }
        </div>
    </div>
  )
}

export default Movie
