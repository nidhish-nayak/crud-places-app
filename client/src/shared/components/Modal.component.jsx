const Modal = ({ isOpen, onClose, title, description }) => {
    if (!isOpen) {
        return null
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center m-2 sm:m-0">
            <div className="fixed inset-0 bg-gray-900 opacity-50" onClick={onClose}></div>
            <div className="z-10 p-6 bg-white rounded-lg shadow-lg w-96">
                <h2 className="mb-4 text-xl font-bold">{title}</h2>
                <p className="mb-6">{description}</p>
                <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
