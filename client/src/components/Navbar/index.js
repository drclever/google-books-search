import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-primary bg-info">
            <a className="navbar-brand" href="/">
                <h2 className="text-white">Google Books</h2>
            </a>
            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item" id="home">
                        <a className="nav-link" href="/"><button type="button" className="btn btn-primary text-white">Search</button></a>
                    </li>
                    <li className="nav-item" id="report">
                        <a className="nav-link" href="/saved"><button type="button" className="btn btn-primary text-white">Saved</button></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;