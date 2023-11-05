import { Link } from "react-router-dom";
import './NavBar.css'


const NavBar = () => {

    return (
        <div className="frame-parent">
            <div className="navhome-wrapper">
                <div className="navhome">
                    <div className="home"><Link to={`/`}> <h2>Home</h2></Link></div>
                </div>
            </div>
            <div className="navbar">
                <div className="navhome">
                    <div className="home"><Link to={`/songs`}> <h2>Songs</h2></Link></div>
                </div>
            </div>
            <div className="navhome-wrapper">
                <div className="navnew">
                    <div className="home"><Link to={`/songs/new`}> <h2>New</h2></Link></div>
                </div>
            </div>
            <div className="navbar">
                <div className="navhome">
                    <div className="home"> <a href="https://github.com/XavierRice"><h2>About </h2></a></div>
                </div>
            </div>
        </div>
    );

}

export default NavBar;