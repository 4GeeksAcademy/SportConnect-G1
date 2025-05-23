import React, { useState } from "react";

const CreatePost = ({ setPosts }) => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        date: "",
        time: "",
        address: "",
        sport: "",
        capacity: "",
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
        // Limpiar formulario
        setFormData({
            title: "",
            description: "",
            date: "",
            time: "",
            address: "",
            sport: "",
            capacity: "",
        });
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
                        name="title"
                        placeholder="Título"
                        className="form-control"
                        value={formData.title}
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
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <input
                            type="date"
                            name="date"
                            className="form-control"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <input
                            type="time"
                            name="time"
                            className="form-control"
                            value={formData.time}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        name="address"
                        placeholder="Dirección"
                        className="form-control"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
                        <input
                            type="number"
                            name="capacity"
                            placeholder="Capacidad"
                            className="form-control"
                            value={formData.capacity}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-success w-100">
                    Publicar
                </button>
            </form>
        </div>
    );
};

export default CreatePost;
