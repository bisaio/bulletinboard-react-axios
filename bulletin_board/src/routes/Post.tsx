import { useEffect, useState } from "react";
import type Post from "../interfaces/Post";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Post() {
    const [post, setPost] = useState<Post>();
    const { id } = useParams();

    const getPosts = async () => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            setPost(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div>
            <h2>{post!.title}</h2>
            <p>{post!.body}</p>
        </div>
    )
}