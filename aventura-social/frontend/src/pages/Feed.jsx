import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import CreatePost from "../components/CreatePost";

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulación del login

    useEffect(() => {
        // Acá tiene que ir el fetch a la API para traer las publicaciones
        setPosts([
            {
                id: 1,
                user: "Juan Pérez",
                sport: "Fútbol",
                description: "Partido este sábado a las 17h en el parque",
                isFavorite: false,
                participants: 3,
            },
            // Más publicaciones si querés
        ]);
    }, []);

    const handleToggleFavorite = (id) => {
        setPosts(posts.map(post =>
            post.id === id ? { ...post, isFavorite: !post.isFavorite } : post
        ));
    };

    const handleJoin = (id) => {
        setPosts(posts.map(post =>
            post.id === id ? { ...post, participants: post.participants + 1 } : post
        ));
    };

    return (
        <div
            className="min-vh-100 d-flex flex-column"
            style={{
                backgroundImage: `url("/FondoFeed.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <Navbar />

            <div className="container mt-5">
                {isLoggedIn && <CreatePost setPosts={setPosts} />}

                {posts.map(post => (
                    <PostCard
                        key={post.id}
                        post={post}
                        onToggleFavorite={() => handleToggleFavorite(post.id)}
                        onJoin={() => handleJoin(post.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Feed;
