import { MdArrowOutward } from "react-icons/md";

const EmployeeCard = ({ title, subtitle, entries, isOpen, onClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all mb-4">
      
      <div 
        className="flex justify-between items-center px-4 py-2 cursor-pointer hover:bg-gray-50"
        onClick={onClick} // Click event controlled by parent
      >
        <div>
          <h2 className="text-md font-semibold text-gray-500">{title}</h2>

          
          {isOpen && subtitle && (
            <h3 className="text-sm font-medium text-gray-500 mt-1">{subtitle}</h3>
          )}
        </div>
        
        
        <span className={`text-gray-400 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}>
          <MdArrowOutward size={17} />
        </span>
      </div>

      {isOpen && (
        <div className="px-4 pb-4">
          <ul className="space-y-3">
            {entries.map((entry, index) => (
              <li key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                <div>
                  <p className="text-gray-800 font-medium">{entry.name}</p>

                  {/* Show status text if it exists */}
                  {entry.statusText && (
                    <span className="text-xs px-2 py-1 rounded-md mt-1 inline-block bg-blue-100 text-blue-800">
                      {entry.statusText}
                    </span>
                  )}

                  {/* Show status icon if it exists */}
                  {entry.statusIcon && <span className="ml-2">{entry.statusIcon}</span>}
                </div>
                <span className="text-sm text-gray-500">{entry.date}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EmployeeCard;
