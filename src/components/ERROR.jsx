import React from 'react'
import { Link } from 'react-router-dom'

export default function ERRORPAGENOTFOUND() {
    return (
        <div>
            <div className="PAGENOTFOUNDerr">
                <h1>404 PAGE NOT FOUND <br /><Link to='/'>BACK TO HOME</Link></h1>
            </div>
        </div>
    )
}
