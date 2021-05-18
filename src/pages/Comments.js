import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function Comments() {
    const [comments,setComments] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(res => {
            setComments(res.data);
        })
    }, [])

    const commentsJSX = comments.map(comment => {
        return (
        <tr>
            <th scope="row">{comment.postId}</th>
            <td>{comment.id}</td>
            <td>{comment.name}</td>
            <td>{comment.email}</td>
            <td>{comment.body}</td>
        </tr>
        )
    })


    return (
        <div>
            <h1>Mes supers commentaires</h1>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Numéro</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Email</th>
                        <th scope="col">Texte</th>
                    </tr>
                </thead>
                <tbody>
                   {commentsJSX}
                </tbody>
                </table>
        </div>
    )
}
