import React from 'react'

export default function UserUpdate(props) {

    const id = props.match.params.bachi;


    return (
        <div>
            <h1>Page de modification d'un utilisateur: {id} </h1>
        </div>
    )
}