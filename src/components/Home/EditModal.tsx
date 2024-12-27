import { useState } from "react";

interface EditModalProps {
  isOpen: boolean;
  description: string;
  title: string;
  onSave: (newDescription: string) => void;
  onClose: () => void;
}

const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  description,
  title,
  onSave,
  onClose,
}) => {
  const [newDescription, setNewDescription] = useState(description);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white m-6 sm:m-0 p-6 rounded shadow-lg w-96">
        <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-4">{title}</h3>
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          className="w-full p-2 border rounded mb-2 sm:mb-4"
        />
        <div className="flex justify-end space-x-1 sm:space-x-2 text-sm sm:text-base">
          <button
            onClick={onClose}
            className="px-2 sm:px-4 py-1 sm:py-2 bg-gray-300 rounded hover:bg-gray-500"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(newDescription)}
            className="px-4 sm:px-4 py-1 sm:py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
