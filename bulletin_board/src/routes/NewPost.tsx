import { useState } from 'react'
import './NewPost.css'
import { useNavigate } from 'react-router-dom';
import bulletinFetch from '../axios/config';

export default function NewPage() {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();

        const post = {title, body, userId: 1};
        await bulletinFetch.post("/posts", {
            body: post
        })

        navigate("/");
    }

    return (
        <div className="new-post-container">
            <h2>Make a new post</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="title">Title</label>
                    <input id="title" name="title" type="text" placeholder="Type the title" onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label htmlFor="body">Body</label>
                    <textarea id="body" name="body" placeholder="Type the body" onChange={(e) => setBody(e.target.value)}/>
                </div>
                <input type="submit" value="Create post" className="btn"/>
            </form>
        </div>
    )
}