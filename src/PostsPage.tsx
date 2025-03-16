import React, { useEffect, useState } from 'react'

type Post = {
    userId: number,
    id: number,
    title: string,
    body: string,
}

const PostsPage = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    const getPosts = async() => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
        const jsonResp = await resp.json();
        setPosts(jsonResp);
        console.log(jsonResp);
        
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <section className='mb-16 flex flex-col gap-4'>
        <h1>PostsPage</h1>
        {posts.map((postItem, key) => {
            return <div key={key} className='flex flex-col gap-2'>
                <h2 className='text-xl font-bold'>{postItem.title}</h2>
                <p>{postItem.body}</p>
            </div>
        })}
        </section>
    )
}

export default PostsPage