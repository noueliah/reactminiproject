import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

function HomePage() {
    return (

        <div>
            <p>Hi, this is Home.</p>
            <p>Go to <Link to="../components/login">Login</Link> page.</p>
        </div>
    )
}

export default HomePage