import { useEffect, useState } from "react";
import { XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export default function AddTaskModal({ isOpen, onClose, reportingManagers }) {
    const [newTask, setNewTask] = useState({
        reportingManager: "",
        fromTime: "",
        toTime: "",
        details: "",
        status: "Pending",
        challenges: "",
    });

    const [errors, setErrors] = useState({
        reportingManager: false,
        fromTime: false,
        toTime: false,
        details: false,
    });

    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTaskList(savedTasks);
    }, []);

    const validateFields = () => {
        const newErrors = {
            reportingManager: !newTask.reportingManager,
            fromTime: !newTask.fromTime,
            toTime: !newTask.toTime,
            details: !newTask.details,
        };
        setErrors(newErrors);
        return !Object.values(newErrors).some(error => error);
    };

    const handleAddTask = () => {
        if (!validateFields()) {
            return;
        }

        const taskToSave = {
            ...newTask,
            date: new Date().toLocaleDateString("en-GB"),
        };

        const updatedTasks = [...taskList, taskToSave];
        setTaskList(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        onClose();
        setNewTask({
            reportingManager: "",
            fromTime: "",
            toTime: "",
            details: "",
            status: "Pending",
            challenges: "",
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center">
            <div className="absolute inset-0 bg-black opacity-30" onClick={onClose}></div>

            <div className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl mx-4 mt-8">
                {/* Header */}
                <div className="flex justify-between items-center border-b px-5 py-3">
                    <h3 className="text-lg font-semibold text-black">Add Task</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 cursor-pointer">
                        <XMarkIcon className="h-6 w-6" />
                    </button>
                </div>
                <hr className="border-t border-gray-300" />

                {/* Form */}
                <div className="p-6 space-y-4">
                    {/* Reporting Manager */}
                    <div>
                        <div className="flex items-center gap-4 pb-2 relative">
                            <label className="text-sm font-medium text-gray-700 w-1/3">
                                Reporting Manager <span className="text-red-700 text-sm">*</span>
                            </label>
                            <div className="relative w-2/3">
                                <select
                                    value={newTask.reportingManager}
                                    onChange={(e) => {
                                        setNewTask({ ...newTask, reportingManager: e.target.value });
                                        setErrors({ ...errors, reportingManager: false });
                                    }}
                                    className={`w-full rounded-md p-3 text-xs appearance-none ${errors.reportingManager ? 'bg-red-50 border border-red-500' : 'bg-gray-100'} text-gray-700 pr-10`}
                                >
                                    <option value="">Select Reporting Manager</option>
                                    {reportingManagers.map((manager) => (
                                        <option
                                            key={manager.id}
                                            value={manager.name}
                                            className="bg-gray-100 text-black hover:bg-gray-300 hover:text-black"
                                        >
                                            {manager.id} - {manager.name}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                                {errors.reportingManager && (
                                    <p className="text-red-500 text-xs mt-1">Please select a reporting manager</p>
                                )}
                            </div>
                        </div>

                        {/* From Time */}
                        <div className="flex items-center gap-4 pb-2">
                            <label className="text-sm font-medium text-gray-700 w-1/3">
                                From Time <span className="text-red-700 text-sm">*</span>
                            </label>
                            <div className="w-2/3">
                                <input
                                    type="time"
                                    value={newTask.fromTime}
                                    onChange={(e) => {
                                        setNewTask({ ...newTask, fromTime: e.target.value });
                                        setErrors({ ...errors, fromTime: false });
                                    }}
                                    className={`w-full rounded-md p-3 text-xs ${errors.fromTime ? 'bg-red-50 border border-red-500' : 'bg-gray-100'} text-gray-700`}
                                />
                                {errors.fromTime && (
                                    <p className="text-red-500 text-xs mt-1">Please enter a start time</p>
                                )}
                            </div>
                        </div>

                        {/* To Time */}
                        <div className="flex items-center gap-4 pb-2">
                            <label className="text-sm font-medium text-gray-700 w-1/3">
                                To Time <span className="text-red-700 text-sm">*</span>
                            </label>
                            <div className="w-2/3">
                                <input
                                    type="time"
                                    value={newTask.toTime}
                                    onChange={(e) => {
                                        setNewTask({ ...newTask, toTime: e.target.value });
                                        setErrors({ ...errors, toTime: false });
                                    }}
                                    className={`w-full rounded-md p-3 text-xs ${errors.toTime ? 'bg-red-50 border border-red-500' : 'bg-gray-100'} text-gray-700`}
                                />
                                {errors.toTime && (
                                    <p className="text-red-500 text-xs mt-1">Please enter an end time</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Task Details */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 block mb-2">
                            Task Details <span className="text-red-700 text-sm">*</span>
                        </label>
                        <textarea
                            value={newTask.details}
                            onChange={(e) => {
                                setNewTask({ ...newTask, details: e.target.value });
                                setErrors({ ...errors, details: false });
                            }}
                            className={`w-full rounded-md p-3 text-xs h-24 ${errors.details ? 'bg-red-50 border border-red-500' : 'bg-gray-100'} text-gray-700`}
                        />
                        {errors.details && (
                            <p className="text-red-500 text-xs mt-1">Please enter task details</p>
                        )}
                    </div>


                    {/* Status */}
                    <div className="flex items-center gap-4 relative">
                        <label className="text-sm font-medium text-gray-700 w-1/3">
                            Status <span className="text-red-700 text-sm">*</span>
                        </label>
                        <div className="relative w-2/3">
                            <select
                                value={newTask.status}
                                onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
                                className="w-full rounded-md p-3 text-xs appearance-none bg-gray-100 text-gray-700 pr-10"
                            >
                                <option value="Completed">Completed</option>
                                <option value="Pending">Not-Completed</option>
                            </select>
                            <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                        </div>
                    </div>

                    {/* Challenges Faced */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 block mb-2">
                            Challenges Faced
                        </label>
                        <textarea
                            value={newTask.challenges}
                            onChange={(e) =>
                                setNewTask({ ...newTask, challenges: e.target.value })
                            }
                            className="w-full rounded-md p-3 text-xs h-24 bg-gray-100 text-gray-700"
                        />
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end p-4 border-t">
                    <button
                        onClick={handleAddTask}
                        className="px-4 py-2 bg-black text-white rounded-md text-sm hover:bg-gray-800 transition-colors cursor-pointer"
                    >
                        Save Task
                    </button>
                </div>
            </div>
        </div>
    );
}