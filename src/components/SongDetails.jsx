import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"

const API = import.meta.env.VITE_REACT_APP_API_URL;

function SongDetails() {
    const [song, setSong] = useState({})
    const { id } = useParams();
    const navigate = useNavigate()


    const fetchedSong = async () => {
        try {
            const res = await fetch(`${API}/songs/${id}`)
            if (!res.ok) {
                console.log(res)
                throw new Error("Network is not wurkin'")
            }
            const resJson = await res.json()
            console.log(resJson)
            setSong(resJson)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        fetchedSong()
    }, [id])


    const handleDelete = () => {
        const confirmed = window.confirm("Are you sure you wanna drop this jam?")
    if(confirmed){

        try {
            fetch(`${API}/songs/${id}`, { method: 'DELETE' })
            .then(() => {
                navigate('/songs')
            })
        } catch (error) {
            throw error
        }
    }
}
    
    return (

        <div key={song.id} className="container song">
            <div className="card song">
                <h3 className="card-text">{song.name}</h3>
                <h4 className="card-text">{song.artist}</h4>
                <p className="card-body">{song.album}</p>
                <h6 className="card-body">{song.time}</h6>
                {song.is_favorite ? (
                    <span>⭐️</span>
                ) : (
                    <span>&nbsp; &nbsp; &nbsp;</span>
                )}
            </div>
            <div className="songNavigation">
                <div>
                    {" "}
                    <Link to={`/songs`}>
                        <button>Back</button>
                    </Link>
                </div>
                <div>
                    {" "}
                    <Link to={`/songs/${id}/edit`}>
                        <button>Edit</button>
                    </Link>
                </div>
                <div>
                    <div>
                        <button onClick={handleDelete}> Delete</button>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default SongDetails;