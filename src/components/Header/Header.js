import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="header_body">
                <nav className="header_nav">
                    <ul>
                        <li>Home</li>
                        <li>ABC</li>
                        {/* <li className="header_login">Login</li> */}
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;