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
        </nav>
    )
}
