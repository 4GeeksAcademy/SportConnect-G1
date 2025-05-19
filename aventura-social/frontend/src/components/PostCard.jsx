// src/components/PostCard.jsx
import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";


const PostCard = ({ post, onToggleFavorite, onJoin }) => {
    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="card-title mb-0">{post.user}</h5>
                    <button
                        className="btn btn-link p-0"
                        onClick={onToggleFavorite}
                        aria-label="Marcar como favorito"
                    >
                        {post.isFavorite ? (
                            <AiFillHeart color="red" size={24} />
                        ) : (
                            <AiOutlineHeart color="gray" size={24} />
                        )}
                    </button>
                </div>

                <h6 className="text-muted">{post.sport}</h6>
                <p className="card-text">{post.description}</p>

                <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-success" onClick={onJoin}>
                        Anotarse
                    </button>
                    <span className="text-muted">
                        Participantes: {post.participants}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
