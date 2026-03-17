import { useEffect, useState } from 'react'
import './Home.css'
import type Post from '../interfaces/Post';
import bulletinFetch from '../axios/config';
import { Link } from 'react-router-dom';

export default function Home() {
    const [posts, setPosts] = useState<Post[]>([]);
    
    const getPosts = async () => {
        try {
            const response = await bulletinFetch.get("/posts")
            setPosts(response.data)
        } catch (error) {
            console.error(error);
        }     
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div className='home'>
            <h1>Latest posts</h1>
            {posts.length === 0 ? (<p>loading....</p>) : (
                posts.map((post) => (
                    <div className='post' key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <Link className='btn' to={`/post/${post.id}`}>Read more</Link>
                    </div>
                ))
            )}
        </div>
    )
}