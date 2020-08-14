import React, { Component } from 'react'
import "./../css/components.css";
import "./../css/global.css";
import "./../css/layout.css";
import "./../css/sample-wallpaper.css";



export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                 <div className="container">
                    <a href="#">Hulk</a>
                    <a href="#" className="logo is-active">Mavel</a>
                    <a href="#">Venom</a>
                </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
