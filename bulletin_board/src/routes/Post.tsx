import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bulletinFetch from "../axios/config";
import type Post from "../interfaces/Post";
import './Post.css'

export default function Post() {
    const [post, setPost] = useState<Post>();
    const { id } = useParams();

    const getPost = async () => {
        try {
            const response = await bulletinFetch.get(`/posts/${id}`)
            setPost(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getPost()
    }, [])

    return (
        <div className="post-container">
            {post ? (
                <>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}