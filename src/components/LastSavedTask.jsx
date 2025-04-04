import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function LastSavedTask({ task, onClose }) {
    if (!task) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center">
            <div className="absolute inset-0 bg-black opacity-30 " onClick={onClose}></div>

            <div className="relative bg-white mt-7 rounded-xl shadow-xl w-full max-w-5xl mx-4 px-6 pt-3 pb-6">

                {/* Header */}
                <div className="flex justify-between items-center pb-3">
                    <h2 className="text-xl font-bold text-gray-800">Last Saved Task</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 cursor-pointer">
                        <XMarkIcon className="h-5 w-5" />
                    </button>
                </div>
                <hr className="border-t border-gray-300 pb-5" />

                {/* Task Details */}
                <div className="space-y-4">
                    <div className="gap-4">
                        <div className="flex items-center gap-4 pb-3">
                            <label className="text-sm font-medium text-gray-700 w-2/5">Date</label>
                            <div className="w-3/5 rounded-lg p-2 text-sm bg-gray-100 text-gray-800">
                                {task.date || new Date().toLocaleDateString('en-GB')}
                            </div>
                        </div>


                        <div className="flex items-center gap-4 pb-3">
                            <label className="text-sm font-medium text-gray-700 w-2/5">From Time</label>
                            <div className="w-3/5 rounded-lg p-2 text-sm bg-gray-100 text-gray-800">
                                {task.fromTime}
                            </div>
                        </div>

                        <div className="flex items-center gap-4 pb-2">
                            <label className="text-sm font-medium text-gray-700 w-2/5">To Time</label>
                            <div className="w-3/5 rounded-lg p-2 text-sm bg-gray-100 text-gray-800">
                                {task.toTime}
                            </div>
                        </div>

                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700 pb-3 block">
                            Task Details
                        </label>
                        <div className="w-full rounded-md p-3 text-sm bg-gray-100 text-gray-700 overflow-y-auto whitespace-pre-line">
                            {task.details}
                        </div>
                    </div>


                    <div className="flex items-center gap-4 pb-2">
                        <label className="text-sm font-medium text-gray-700 w-2/5">Status</label>
                        <div className={`w-3/5 rounded-lg p-2 text-sm font-medium 
        ${task.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {task.status}
                        </div>
                    </div>



                    {task.challenges && (
                        <div>
                            <label className="text-sm font-medium text-gray-700 pb-3 block">
                                Challenges Faced
                            </label>
                            <div className="w-full rounded-md p-3 text-sm bg-gray-100 text-gray-700 overflow-y-auto whitespace-pre-line">
                                {task.challenges}
                            </div>
                        </div>
                    )}


                </div>
            </div>
        </div>
    );
}