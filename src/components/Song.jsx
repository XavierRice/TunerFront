import { Link } from "react-router-dom";


function Song({song}){
    return (
        <tr>
          <td>
            <h3>{song.name}</h3>
            {song.time ? (<span><h5>{song.time}</h5></span> ):(<span>&nbsp; &nbsp; &nbsp;</span>)}
          </td>
          <td>
            {song.is_favorite ? (
              <span>⭐️</span>
            ) : (
              <span>&nbsp; &nbsp; &nbsp;</span>
            )}
          </td>
          <td>
           <span> <h5>{song.artist}</h5><h5>{song.album}</h5></span> 
          </td>
          <td>
            <Link to={`/songs/${song.id}`}> {song.name}</Link>
          </td>
          <td>
            {" "}
          </td>
        </tr>
      );
}

export default Song;

