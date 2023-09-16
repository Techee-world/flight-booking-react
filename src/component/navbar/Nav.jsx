import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

function Nav({ email }) {
    const [isAlertClicked, setIsAlertClicked] = useState(false);

    function clickHandleLog() {
        window.alert('Click OK');
        setIsAlertClicked(true);
    }

    return (
        <div className="nav-main">
            <div className="container">
                <div className="icon">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        ✈ FLIGHT
                    </Link>
                </div>
                <div className="nav-menu">
                    <ul>
                        <li>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                Home
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="btn">
                    {email ? (
                        isAlertClicked ? (
                            <button>
                                <Link to="/login" style={{ textDecoration: 'none' }}>
                                    Log in
                                </Link>
                            </button>
                        ) : (
                            <Link to='/'><button onClick={clickHandleLog}>Log out</button></Link>
                        )
                    ) : (
                        <button>
                            <Link to="/login" style={{ textDecoration: 'none' }}>
                                Log In
                            </Link>
                        </button>
                    )}
                    <span >{isAlertClicked ? <span></span> : email}</span>
                </div>
            </div>
        </div>
    );
}

export default Nav;
