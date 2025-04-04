import { UserCircleIcon } from "@heroicons/react/24/outline";

const ProfileCard = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={closeModal} // ✅ Close on click
        >
          ✖
        </button>
        <div className="flex flex-col items-center">
          {/* ✅ Replaced Image with User Icon */}
          <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center">
            <UserCircleIcon className="h-16 w-16 text-blue-600" />
          </div>

          <h2 className="text-xl font-semibold mt-4">John Doe</h2>
          <p className="text-gray-500">Software Developer</p>
        </div>
        <div className="mt-6">
          <p className="text-gray-700">
            <strong>Email:</strong> johndoe@example.com
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Phone:</strong> +123 456 7890
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Location:</strong> New York, USA
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
