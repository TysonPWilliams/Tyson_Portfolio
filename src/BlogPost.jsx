import React from "react";
import { useParams } from "react-router-dom";
import aiPost from "./posts/post1";
import linuxPost from "./posts/post2";
import './Blog.css'

const postMap = {
    "ai-vs-human-code": aiPost,
    "switching-to-linux-mint": linuxPost
}

const BlogPost = () => {
    const { slug } = useParams();
    const post = postMap[slug]

    if (!post) return <p>Post not found.</p>

    return (
        <section className="blog-post-detail">
            <h2>{post.title}</h2>
            <p><strong>By {post.author}</strong></p>
            <time className="blog-date"><em>Posted on {post.date}</em></time>
            {post.content}
        </section>
    )
}

export default BlogPost