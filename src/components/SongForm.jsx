import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const API = import.meta.env.VITE_REACT_APP_API_URL;

const SongForm = () => {
    const navigate = useNavigate()
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
        if (event.target.id === "name") {
            if (event.target.value === "") {
                setNameError("You gotta name it someting")
            }
        }
        if (event.target.id === "artist") {
            if (event.target.value === "") {
                setArtistError("You gotta know the artist")
            }
        }
        setSong({ ...song, [event.target.id]: event.target.value })
    }

    const handleCheck = (event) => {
        setSong({ ...song, is_favorite: !song.is_favorite })
    }

    const addSong = () => {
        try {
            fetch(`${API}/songs`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(song)
            })
                .then(res => res.json())
                .then(() => navigate('/songs'))
        } catch (error) {
            console.error(error)
        }
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        addSong();
    }

    return (

        <div className="NewForm">
             <h3 className="header">New Jam!</h3>
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor="name">Name:</label>
                <input
                 className='form-control'
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
                 className='form-control'
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
                 className='form-control'
                    id="album"
                    value={song.album}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Album"

                />
                <label htmlFor="time">Time:</label>
                <input
                 className='form-control'
                    id="time"
                    value={song.time}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="How long is it?"

                />
                <label className="form-check-label" htmlFor="isFavorite">Favorite:</label>
                <input
                 className='form-check-input'
                    id="is_favorite"
                    type="checkbox"
                    onChange={handleCheck}
                    checked={song.is_favorite}
                    value={song.is_favorite}
                />
                <br />
                <br />
                <button className= "btn btn-primary" type="submit">Submit</button>
            </form>
            <br />
            <Link to={`/songs`}>
                <button>Nevermind!</button>
            </Link>
        </div>
    );


}

export default SongForm