import "./VehicleModal.css";

function VehicleModal({
  isOpen,
  onClose
}) {

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">

        <h2>
          New Vehicle
        </h2>

        <p>
          Vehicle form coming soon...
        </p>

        <button
          onClick={onClose}
        >
          Close
        </button>

      </div>
    </div>
  );
}

export default VehicleModal;