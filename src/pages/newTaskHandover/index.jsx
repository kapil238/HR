'use client'
import { useState } from 'react';
import QuillEditor from '@/components/QuillEditor';
import Logo from "@/components/LogoDark";
import { useRouter } from 'next/router';
import { IoMdNotifications } from "react-icons/io";
import { IoRepeatSharp } from "react-icons/io5";
import { MdOutlineKeyboardBackspace, MdArrowForwardIos } from "react-icons/md";
import { PiDotsThreeOutline } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function LeaveSummary() {
    const router = useRouter();
    const [editorContent, setEditorContent] = useState('');
    
    return (
        <div className="min-h-screen bg-white text-black">
            <div className="bg-white shadow-lg">
                <div className="flex items-center gap-2 max-w-7xl mx-auto py-4 px-4 h-[50px]">
                    <div className="w-[130px] h-[30px]">
                        <Logo />
                    </div>
                </div>
                <hr className="border-t border-gray-300 shadow-lg" />
            </div>

            <div className="container mx-auto px-4 space-y-4 max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-10 pt-6 flex-wrap gap-4">
                    <button
                        onClick={() => router.push('/employeeSpace')}
                        className="w-[35px] h-[35px] flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 text-md cursor-pointer"
                    >
                        <MdOutlineKeyboardBackspace className="w-[20px] h-[20px]" />
                    </button>

                    <div className="flex items-center gap-4 text-md">
                        <span className="text-2xl cursor-pointer "><IoMdNotifications /></span>
                        <span className="cursor-pointer flex items-center ">
                            Help <RiArrowDropDownLine className="text-2xl" />
                        </span>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 w-full">
                    <button className="text-base text-white font-medium leading-none px-2 py-3 rounded-md border bg-[#828282] cursor-pointer min-w-[175px] flex justify-between">
                        Task Handover
                        <MdArrowForwardIos />
                    </button>
                    <button className="text-base text-white font-medium leading-none px-2 py-3 rounded-md border bg-[#828282] cursor-pointer min-w-[220px] flex justify-between">
                        New Task Handover
                        <MdArrowForwardIos />
                    </button>
                    <button className="text-base text-white font-medium leading-none px-2 py-3 rounded-md border bg-[#828282] cursor-pointer min-w-[120px] flex justify-between">
                        Add Task
                        <MdArrowForwardIos />
                    </button>
                </div>

                <div className="flex flex-wrap justify-between items-center gap-4 pt-6 px-4 sm:px-6">
                    <div className="text-xl sm:text-2xl font-bold border border-gray-300 p-2 rounded-md text-black">
                        New Task Handover
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4 text-sm sm:text-md">
                        <button
                            className="w-[30px] h-[30px] flex items-center justify-center rounded-sm bg-gray-200 hover:bg-gray-300 cursor-pointer transition"
                        >
                            <IoRepeatSharp className="w-[18px] h-[18px]" />
                        </button>
                        <button
                            className="w-[30px] h-[30px] flex items-center justify-center rounded-sm bg-gray-200 hover:bg-gray-300 cursor-pointer transition"
                        >
                            <PiDotsThreeOutline className="w-[18px] h-[18px]" />
                        </button>
                    </div>
                </div>
                
                <div className="overflow-x-auto px-4 sm:px-6 py-2">
                    <div className="rounded-lg overflow-hidden min-w-[300px] sm:min-w-[600px]">
                        <div className="mt-10 space-y-6">
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="handoverConfirmed"
                                    className="w-4 h-4 cursor-pointer"
                                />
                                <label
                                    htmlFor="handoverConfirmed"
                                    className="text-sm font-medium"
                                >
                                    Handover Confirmed
                                </label>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 px-0 sm:px-6">
                                <div className="space-y-4">
                                    {[
                                        "Handover To",
                                        "Handover To (Email)",
                                        "Handover To (Name)",
                                        "Deadline For Completion",
                                        "Team Lead ID",
                                        "Team Lead (Email)",
                                        "Team Lead (Name)",
                                    ].map((label, i) => (
                                        <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
                                            <span className="text-md text-black font-medium sm:w-2/5 w-full">• {label} :</span>
                                            <input
                                                type="text"
                                                className="bg-[#ECECEC] h-[36px] px-3 py-1 rounded-sm w-full sm:w-3/5"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-4">
                                    {[
                                        "Employee ID",
                                        "Employee (Name)",
                                        "Employee (Email)",
                                        "Form Data",
                                        "To Data",
                                    ].map((label, i) => (
                                        <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
                                            <span className="text-md text-black font-medium sm:w-2/5 w-full">• {label} :</span>
                                            <input
                                                type="text"
                                                className="bg-[#ECECEC] h-[36px] px-3 py-1 rounded-sm w-full sm:w-3/5"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex pt-4">
                                <button className="bg-gray-200 px-8 py-2 font-medium text-lg rounded cursor-pointer hover:bg-gray-300 transition">
                                    Task To Handover
                                </button>
                            </div>
                            
                            <div className="pt-4 px-0 sm:px-6">
                                <label className="block text-md text-black font-medium mb-2">
                                    Task Description
                                </label>
                                <div className="bg-white rounded-md border border-gray-300">
                                    <QuillEditor 
                                        value={editorContent} 
                                        onChange={setEditorContent} 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}