interface DeleteModalProps {
    isOpen: boolean;
    onConfirm: () => void;
    onClose: () => void;
  }
  
  const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, onConfirm, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white m-6 sm:m-0 p-6 rounded shadow-lg w-96">
          <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-4">Confirm Delete</h3>
          <p className="mb-2 sm:mb-4">Are you sure you want to delete this call?</p>
          <div className="flex justify-end space-x-1 sm:space-x-2 text-sm sm:text-base">
            <button
              onClick={onClose}
              className="px-2 sm:px-4 py-1 sm:py-2 bg-gray-300 rounded hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-2 sm:px-4 py-1 sm:py-2 bg-red-500 text-white rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default DeleteModal;
  