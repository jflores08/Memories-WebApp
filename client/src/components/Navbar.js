import React from 'react'
import{Link} from "react-router-dom";
import { logout } from '../Services/auth';

export default function Navbar(props) {
    
    const handleLogout = () => {
        logout().then(() => {
            props.setUser(null);
        })
    }

    return (
        <nav>
        {props.user ? (

            <>

                <Link to='/'>
                <button>Home</button>
                </Link>
                <Link to='/memories'>
                <button>Memories</button>
                </Link>
                <Link to="/" onClick={() => handleLogout()}>
                <button>Logout</button>
                </Link>

            </>

        ) : (

            <>

                <Link to='/signup'>
                <button>SignUp</button>
                </Link>
                <Link to='/login'>
                    <button>LogIn</button>
                </Link>

            </>

        )}
            
           
        </nav>
    )
}
