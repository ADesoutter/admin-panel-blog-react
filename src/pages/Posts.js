import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Posts() {
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            setPosts(res.data);
        })
    }, [])

    const postsJSX = posts.map(post => {
        return (
        <tr>
            <th scope="row">{post.userId}</th>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
        </tr>
        )
    })


    return (
        <div>
            <h1>Voici ma super page des posts</h1>

              <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">numéro</th>
                        <th scope="col">Titre</th>
                        <th scope="col">Texte</th>
                    </tr>
                </thead>
                <tbody>
                   {postsJSX}
                </tbody>
                </table>
        </div>
    )
}
