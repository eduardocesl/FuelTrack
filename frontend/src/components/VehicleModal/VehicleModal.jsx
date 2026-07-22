import { useState } from "react";
import { createVehicle } from "../../services/api";
import "./VehicleModal.css";

function VehicleModal({
    isOpen,
    onClose,
    onVehicleCreated,
}) {
    const [formData, setFormData] = useState({
        brand: "",
        model: "",
        manufactureYear: "",
        modelYear: "",
    });

    function resetForm() {
        setFormData({
            brand: "",
            model: "",
            manufactureYear: "",
            modelYear: "",
        });
    }

    function handleChange(event) {
        const { name, value, type } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: type === "number" ? Number(value) : value,
        }));

    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const newVehicle = await createVehicle(formData);

            onVehicleCreated(newVehicle);

            resetForm();

            onClose();
        } catch (error) {
            console.error(error);
        }
    }

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">

                <h2>New Vehicle</h2>


                <form onSubmit={handleSubmit}>

                    <label>
                        Brand
                    </label>

                    <input
                        type="text"
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                    />

                    <label>
                        Model
                    </label>

                    <input
                        type="text"
                        name="model"
                        value={formData.model}
                        onChange={handleChange}
                    />

                    <label>
                        Manufacture Year
                    </label>

                    <input
                        type="number"
                        name="manufactureYear"
                        value={formData.manufactureYear}
                        onChange={handleChange}
                    />

                    <label>
                        Model Year
                    </label>

                    <input
                        type="number"
                        name="modelYear"
                        value={formData.modelYear}
                        onChange={handleChange}
                    />

                    <div className="modal-actions">

                        <button
                            type="button"
                            onClick={() => {
                                resetForm();
                                onClose();
                            }}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                        >
                            Save
                        </button>

                    </div>

                </form>

            </div>
        </div>
    );
}

export default VehicleModal;