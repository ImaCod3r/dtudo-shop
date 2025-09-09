import "../styles/Modal.css"; // Crie este arquivo para estilizar o modal

const Modal = ({ children, isOpen, onClose }) => {
    if (!isOpen) return null;

    function handleBackdropClick(e) {
        if (e.target === e.currentTarget && onClose) {
            onClose();
        }
    }

    return (
        <div className="modal-backdrop" role="dialog" onClick={handleBackdropClick}>
            <div className="modal-content">
                {children}
            </div>
        </div>
    );
};

export default Modal;