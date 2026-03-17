import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar">
            <h2>
                <Link to={'/'}>Bulletin Board</Link>
            </h2>
            <ul>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/new-post'} className="new-btn"><li>New post</li></Link>
            </ul>
        </nav>
    )
}