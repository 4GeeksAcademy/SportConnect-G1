// src/components/CreatePost.jsx
import React, { useState } from "react";

const CreatePost = ({ setPosts }) => {
    const [form, setForm] = useState({
        user: "",
        sport: "",
        description: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            id: Date.now(),
            ...form,
            isFavorite: false,
            participants: 0,
        };

        setPosts(prev => [newPost, ...prev]);

        // Reset form
        setForm({ user: "", sport: "", description: "" });
    };

    return (
        <div className="card mb-5 shadow-sm">
            <div className="card-body">
                <h5 className="card-title">Crear nueva publicación</h5>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            name="user"
                            value={form.user}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Deporte</label>
                        <input
                            type="text"
                            className="form-control"
                            name="sport"
                            value={form.sport}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Descripción</label>
                        <textarea
                            className="form-control"
                            name="description"
                            rows="3"
                            value={form.description}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Publicar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreatePost;
