import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

export default function Navbar({routes}) {
    return <nav className="navlinks">
      <h1>RESCUE ME</h1>
        {
            routes.map(({pathName, uri}, i) => {
                return <Link key={i} to={uri}>{pathName}</Link>
            })
        }
    </nav>
}