const vehicles = [
    { 
        id: 1,
        brand: 'Chevrolet',
        model: 'Onix Plus',
        manufactureYear: 2022,
        modelYear: 2023
    }
];

const getAllVehicles = () => {
    return vehicles;
};

const createVehicle = ({
    brand,
    model,
    manufactureYear,
    modelYear
}) => {
    if (!brand || !model || !manufactureYear || !modelYear) {
        throw new Error('All fields are required');
    }

    const newVehicle = {
        id: vehicles.length + 1,
        brand,
        model,
        manufactureYear,
        modelYear
    };

    vehicles.push(newVehicle);
    return newVehicle;
};

module.exports = {
    getAllVehicles,
    createVehicle
};