import React, { useState } from "react";

const CreateEvent = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        date: "",
        time: "",
        location: "",
        sport: "",
        capacity: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulación de éxito o error:
        const success = Math.random() > 0.3; // 70% de éxito

        if (success) {
            setAlert({
                type: "success",
                message: "¡Evento creado con éxito!",
                show: true
            });
            setFormData({
                title: "",
                description: "",
                date: "",
                time: "",
                location: "",
                sport: "",
                capacity: ""
            });
        } else {
            setAlert({
                type: "danger",
                message: "Hubo un error al crear el evento. Inténtalo nuevamente.",
                show: true
            });
        }
    };

    const [alert, setAlert] = useState({
        type: "",  // "success" o "danger"
        message: "",
        show: false
    });


    return (
        <div className="container mt-5">
            <h2 className="mb-4">Crear un nuevo evento</h2>
            {alert.show && (
                <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                    {alert.message}
                    <button type="button" className="btn-close" onClick={() => setAlert({ ...alert, show: false })}></button>
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Título</label>
                    <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Descripción</label>
                    <textarea className="form-control" name="description" value={formData.description} onChange={handleChange} required />
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Fecha</label>
                        <input type="date" className="form-control" name="date" value={formData.date} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Hora</label>
                        <input type="time" className="form-control" name="time" value={formData.time} onChange={handleChange} required />
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Ubicación</label>
                    <input type="text" className="form-control" name="location" value={formData.location} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Deporte</label>
                    <select className="form-select" name="sport" value={formData.sport} onChange={handleChange} required>
                        <option value="">Selecciona un deporte</option>
                        <option value="Fútbol">Fútbol</option>
                        <option value="Ciclismo">Ciclismo</option>
                        <option value="Running">Running</option>
                        <option value="Fitness">Fitness</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Cupo máximo (opcional)</label>
                    <input type="number" className="form-control" name="capacity" value={formData.capacity} onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-success">Crear evento</button>
            </form>
        </div>
    );
};

export default CreateEvent;