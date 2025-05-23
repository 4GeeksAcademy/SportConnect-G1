import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import CreatePost from "../components/CreatePost";

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [activeTab, setActiveTab] = useState("all");

    useEffect(() => {
        // Empieza vacío, sin publicaciones por defecto
        setPosts([]);
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

    const filteredPosts = activeTab === "favorites"
        ? posts.filter(post => post.isFavorite)
        : posts;

    return (
        <div
            className="bg-light min-vh-100"
            style={{
                backgroundImage: `url('/FondoFeed.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <Navbar />

            <div className="container mt-5">
                {isLoggedIn && <CreatePost setPosts={setPosts} />}

                <div className="btn-group mb-4">
                    <button
                        className={`btn ${activeTab === "all" ? "btn-success" : "btn-outline-success"}`}
                        onClick={() => setActiveTab("all")}
                    >
                        Todos
                    </button>
                    <button
                        className={`btn ${activeTab === "favorites" ? "btn-success" : "btn-outline-success"}`}
                        onClick={() => setActiveTab("favorites")}
                    >
                        Favoritos ❤️
                    </button>
                </div>

                {filteredPosts.length === 0 ? (
                    <p className="text-white">No hay publicaciones.</p>
                ) : (
                    filteredPosts.map(post => (
                        <PostCard
                            key={post.id}
                            post={post}
                            onToggleFavorite={() => handleToggleFavorite(post.id)}
                            onJoin={() => handleJoin(post.id)}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Feed;
