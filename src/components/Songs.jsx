import { useState, useEffect } from "react";
import Song from "./Song";

const API = import.meta.env.VITE_REACT_APP_API_URL;

function Songs() {
  
  const [songs, setSongs] = useState([]);
  
  const fetchedSongs = async () => {
    try {
      const res = await fetch(`${API}/songs`)
      
      if(!res.ok){
        console.log(res)
        throw new Error("Network is giving sass!")
      }
      const resJson = await res.json() 
      console.log(resJson)
        setSongs(resJson)
    } catch (error) {
      console.error("error in fetching songs:", error)
    }
  }
  
  useEffect(() => {
    fetchedSongs()
  }, [])
  
  console.log(songs)
  
  return (
    <div className="Songs">
      <section>
        <table className="table-stripe table-hover">
          <thead>
            <tr>
              {/* <h4>Welcome to the song list</h4> */}
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <Song key={song.id} song={song} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Songs;

// const fetchedSongs = async () => {
//   try {
//     const res = await fetch(`${API}/songs`)
    
//     .then(res => res.json())
//     .then(resJson => {
//       setSongs(resJson)
//     })
//   } catch (error) {
//     throw error;
//   }
// }
