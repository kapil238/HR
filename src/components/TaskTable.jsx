import { useState } from "react";
import LastSavedTask from "./LastSavedTask";

export default function TaskTable({ tasks, onOpenModal }) {
    const [hovered, setHovered] = useState(false);
    const [isLastTaskOpen, setIsLastTaskOpen] = useState(false);

    const lastTask = tasks[tasks.length - 1];

    return (
        <div className="relative overflow-hidden pb-7">
            <div
                className="relative border-3 border-blue-500 rounded-lg overflow-hidden"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {/* Blur Effect Only Inside Table Border */}
                {hovered && (
                    <div className="absolute inset-0 z-10 bg-black/0 backdrop-blur-xs flex items-center justify-center">
                        <button
                            className="bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2 rounded-full shadow hover:bg-gray-100 transition cursor-pointer"
                            onClick={() => setIsLastTaskOpen(true)}
                        >
                            View Task
                        </button>

                    </div>
                )}

                <table className="min-w-full relative z-0">
                    <thead className="bg-blue-500 text-white">
                        <tr>
                            {["DATE", "FROM TIME", "TO TIME", "TASK DETAILS", "STATUS", "CHALLENGES FACED"].map((header) => (
                                <th
                                    key={header}
                                    className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider"
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody className="bg-white">
                        {tasks.map((task) => (
                            <tr key={task.id} className="hover:bg-gray-50">
                                <td className="px-4 py-3 text-sm text-gray-700">{task.date}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{task.fromTime}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{task.toTime}</td>
                                <td className="px-4 py-3 text-sm text-gray-700 truncate max-w-xs">{task.details}</td>
                                <td className="px-4 py-3">
                                    <span className={`px-2 py-2 text-xs rounded-full ${task.status === "Completed"
                                        ? "bg-green-100 text-green-800"
                                        : "bg-red-100 text-red-700"
                                        }`}>
                                        {task.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-700">{task.challenges || "None"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Last Saved Task Modal */}
            {isLastTaskOpen && (
                <LastSavedTask task={lastTask} onClose={() => setIsLastTaskOpen(false)} />
            )}

            {/* Submit Button */}
            <div className="absolute bottom-1 right-0 z-10">
                <button
                    onClick={onOpenModal}
                    className="px-4 py-1 border-3 border-blue-500 text-blue-600 text-sm flex items-center gap-2 bg-white hover:bg-blue-50 cursor-pointer transition-colors"
                    style={{
                        borderTopLeftRadius: '10px',
                        borderBottomRightRadius: '10px',
                        borderBottomLeftRadius: '10px'
                    }}
                >
                    SUBMIT DAILY WORK REPORT
                </button>
            </div>
        </div>
    );
}
