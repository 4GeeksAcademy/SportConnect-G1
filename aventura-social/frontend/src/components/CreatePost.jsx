import React, { useState } from "react";

const CreatePost = ({ setPosts }) => {
    const [formData, setFormData] = useState({
        user: "",
        sport: "",
        description: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            ...formData,
            isFavorite: false,
            participants: 0,
        };
        setPosts(prev => [newPost, ...prev]);
        setFormData({ user: "", sport: "", description: "" });
    };

    return (
        <div
            className="mb-5 p-4 rounded shadow"
            style={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderRadius: "1rem"
            }}
        >
            <h5 className="mb-3">Crear nueva publicación</h5>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        type="text"
                        name="user"
                        placeholder="Tu nombre"
                        className="form-control"
                        value={formData.user}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        name="sport"
                        placeholder="Deporte"
                        className="form-control"
                        value={formData.sport}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <textarea
                        name="description"
                        placeholder="Descripción"
                        className="form-control"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success w-100">
                    Publicar
                </button>
            </form>
        </div>
    );
};

export default CreatePost;
