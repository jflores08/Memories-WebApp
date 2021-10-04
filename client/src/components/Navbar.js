import React from 'react'
import{Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <Link to='/'>
                <button>Home</button>
            </Link>
            <Link to='/memories'>
                <button>Memories</button>
            </Link>
            <Link to='/signup'>
                <button>SignUp</button>
            </Link>
            <Link to='/login'>
                <button>LogIn</button>
            </Link>
        </nav>
    )
}
