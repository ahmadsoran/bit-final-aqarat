import React from 'react'

export default function Searchbar(input) {

    return (
        <>
            <input onChange={input.change} className="search" placeholder=" 🔍apartment type" />

        </>
    )
}
