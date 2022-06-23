import React from "react"
import { Link } from "react-router-dom"

const Nav = (props) => {
    return <header>
        <h1>WorldSmith</h1>
        <nav>
            <Link to="/"><p>Home</p></Link>
            <Link to="/auth/login"><p>Home</p></Link>
        </nav>
        </header>
}

export default Nav