import { useState, useEffect } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'

const API = import.meta.env.VITE_REACT_APP_API_URL;

const EditSong = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [nameError, setNameError] = useState("")
    const [artistError, setArtistError] = useState("")
    const [song, setSong] = useState({

        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false

    })

    const handleTextChange = (event) => {
        if(event.target.id === "name"){
            if(event.target.value === ""){
                setNameError("You gotta name it someting")
            }
        }
        if(event.target.id === "artist"){
            if(event.target.value === ""){
                setArtistError("You gotta know the artist")
            }
        }
        setSong({ ...song, [event.target.id]: event.target.value })
    }

    const handleCheck = (event) => {
        setSong({ ...song, is_favorite: !song.is_favorite })
    }

    const updateSong = () => {
        try {
            fetch(`${API}/songs/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(song)
            })
                .then(res => res.json())
                .then(() => navigate(`/songs/${id}`))
        } catch (error) {
            console.error(error)
        }
    }

    const fetchedSong = () => {
        try {
            fetch(`${API}/songs/${id}`)
                .then(res => res.json())
                .then(resJson => {
                    setSong(resJson)
                })
        } catch (error) {
            console.error(error)
        }
    };

    useEffect(() => {
        fetchedSong()
    }, [id])

    const handleSubmit = (event) => {
        event.preventDefault();
        updateSong();
    }

    return (
        <div className="Edit">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              value={song.name}
              type="text"
              onChange={handleTextChange}
              placeholder="Name of Song"
              required
            />
            {nameError != "" && <div className='error-message'>{nameError}</div>}
             <label htmlFor="artist">Artist:</label>
            <input
              id="artist"
              value={song.artist}
              type="text"
              onChange={handleTextChange}
              placeholder="Name of Artist"
              required
            />
            {artistError != "" && <div className='error-message'>{artistError}</div>}
            <label htmlFor="album">Album:</label>
            <input
              id="album"
              value={song.album}
              type="text"
              onChange={handleTextChange}
              placeholder="Album"
              
            />
            <label htmlFor="time">Time:</label>
            <input
              id="time"
              value={song.time}
              type="text"
              onChange={handleTextChange}
              placeholder="How long is it?"
              
            />
            <label htmlFor="isFavorite">Favorite:</label>
            <input
              id="is_favorite"
              type="checkbox"
              onChange={handleCheck}
              checked={song.is_favorite}
              value={song.is_favorite}
            />
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
          <br />
          <Link to={`/songs/${id}`}>
            <button>Nevermind!</button>
          </Link>
        </div>
      );

}

export default EditSong