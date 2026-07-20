import { useState } from "react";
import "./VehicleModal.css";

function VehicleModal({
    isOpen,
    onClose
}) {
    const [formData, setFormData] = useState({
        brand: "",
        model: "",
        manufactureYear: "",
        modelYear: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));

    }

    function handleSubmit(event) {
        event.preventDefault();

        console.log(formData);
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
                            onClick={onClose}
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