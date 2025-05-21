import React from "react";
import { FaHeart } from "react-icons/fa";

const PostCard = ({ post, onToggleFavorite, onJoin }) => {
    return (
        <div
            className="mb-4 p-4 rounded shadow"
            style={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderRadius: "1rem"
            }}
        >
            <div className="d-flex justify-content-between align-items-center mb-2">
                <h5 className="mb-0">{post.user}</h5>
                <button
                    className="btn btn-link text-danger"
                    onClick={onToggleFavorite}
                >
                    <FaHeart color={post.isFavorite ? "red" : "lightgray"} />
                </button>
            </div>
            <p className="mb-1"><strong>Deporte:</strong> {post.sport}</p>
            <p className="mb-3">{post.description}</p>
            <div className="d-flex justify-content-between align-items-center">
                <span className="text-muted">{post.participants} participantes</span>
                <button className="btn btn-success" onClick={onJoin}>Anotarme</button>
            </div>
        </div>
    );
};

export default PostCard;
