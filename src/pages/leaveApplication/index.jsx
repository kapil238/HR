import Logo from "@/components/LogoDark";
import { useState } from 'react';
import { useRouter } from 'next/router';
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineKeyboardBackspace, MdArrowForwardIos, MdOutlineUnfoldMore } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";

export default function LeaveSummary() {
    const router = useRouter();
    const [employee, setEmployee] = useState('HR-EMP-00013', 'Kapil Sanghani');
    const [employeeName, setEmployeeName] = useState('Kapil Sanghani');
    const [reason, setReason] = useState('Work From Home');
    const [explanation, setExplanation] = useState('');

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
            <div className="container mx-auto px-4 space-y-6 max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-14 pt-10 flex-wrap gap-4">
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
                    <button className="text-base font-medium border-black leading-none px-4 py-3 rounded-md border cursor-pointer min-w-[210px] flex justify-between">
                        Attendance Request
                        <MdArrowForwardIos />
                    </button>
                    <button className="text-base font-medium border-black leading-none px-4 py-3 rounded-md border cursor-pointer min-w-[250px] flex justify-between">
                        New Attendance Request
                        <MdArrowForwardIos />
                    </button>
                </div>
                <div className="flex justify-between items-center pt-6">
                    <h2 className="text-2xl font-bold pt-5">
                        New Attendance Request
                    </h2>
                    <div className="flex items-center gap-4 text-md mr-3">
                        <button className="text-base font-medium text-white leading-none px-4 py-2 bg-[#928D8D] rounded-md border cursor-pointer min-w-[100px]">
                            Save
                        </button>
                    </div>
                </div>
                <div className="p-6 min-h-screen font-sans">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col sm:flex-row gap-4 w-full">
                            <div className="sm:min-w-[100px]">
                                <label className="block font-medium mb-1 mt-2 text-base sm:text-lg font-semibold">
                                    Employee :
                                </label>
                                <label className="block font-medium mb-1 mt-2 text-base sm:text-lg font-semibold">
                                    Company :
                                </label>
                            </div>
                            <div
                                className="border border-blue-500 rounded-md p-2 w-full h-full sm:w-[400px] sm:h-[120px]"
                            // style={{
                            //     boxShadow: 'inset 0 20px 25px -5px rgb(0 13 255 / 10%), 0 8px 10px -6px rgb(73 8 244 / 10%)' // top inset shadow
                            // }}
                            >

                                <div className="relative w-full sm:w-[300px] pt-3">
                                    <select
                                        value={reason}
                                        onChange={(e) => setReason(e.target.value)}
                                        className="border border-blue-500 rounded p-2 w-full appearance-none"
                                    >
                                        <option>
                                            <span>{employee}</span> <br /> <span>({employeeName})</span>
                                        </option>
                                        <option>
                                            <span>{employee}</span> <br /> <span>({employeeName})</span>
                                        </option>
                                        <option>
                                            <span>{employee}</span> <br /> <span>({employeeName})</span>
                                        </option>
                                    </select>
                                    <MdOutlineUnfoldMore className="w-5 h-5 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                                </div>

                                <div className="flex items-center w-full mt-2 rounded p-3 text-sm sm:text-md gap-4">
                                    <IoMdSearch className="text-xl text-gray-500" />
                                    <input
                                        type="text"
                                        placeholder="Advanced Search"
                                        className="w-full outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 flex-col">
                            <div>
                                <div className="flex gap-4 p-2">
                                    <label className="block font-medium mb-1 w-full sm:w-[150px] text-lg">Form Data :</label>
                                    <input type="date" className="w-full border rounded px-2 py-1 bg-[#F0EEEE] w-full sm:w-[300px]" />
                                </div>
                                <div className="flex gap-4 p-2">
                                    <label className="block font-medium mb-1 w-full sm:w-[150px] text-lg">To Data :</label>
                                    <input type="date" className="w-full  border rounded px-2 py-1 bg-[#F0EEEE] w-full sm:w-[300px]" />
                                </div>
                            </div>

                            <div>
                                <label className="flex items-center space-x-2 mt-2 px-2">
                                    <input type="checkbox" className="w-4 h-4 bg-[#EBE8E8]" />
                                    <span>Half Day</span>
                                </label>
                                <label className="flex items-center space-x-2 mt-2 px-2">
                                    <input type="checkbox" className="w-4 h-4 bg-[#EBE8E8]" />
                                    <span>Include Holidays</span>
                                </label>
                            </div>


                            <div className="flex gap-3 mt-4 p-2">
                                <div>
                                    <label className="block font-medium mb-1 w-full sm:w-[150px] text-lg">Shift </label>
                                </div>
                                <div>
                                    <input type="text" className="border border-black rounded px-2 py-1 w-full sm:w-[300px]" />
                                    <p className="text-sm text-gray-500 mt-1">Note : Shift will not be overwritten in existing <br /> attendance records</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4 p-2 border border-blue-500 rounded-md mt-6 p-4 bg-white shadow-sm">
                        <div className="border border-gray-300  mb-4 w-full sm:w-[150px] shadow-md text-center rounded-md p-2 mb-10">
                            <h2>Reason</h2>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                            <label className="block font-medium w-full sm:w-[200px] py-3">
                                Reason :
                            </label>
                            <div className="flex flex-col gap-10 w-full">
                                <div className="relative w-full sm:w-[300px]">
                                    <select
                                        value={reason}
                                        onChange={(e) => setReason(e.target.value)}
                                        className="border rounded p-2 w-full bg-[#F0EEEE] appearance-none"
                                    >
                                        <option>Work From Home</option>
                                        <option>Leave</option>

                                    </select>
                                    <MdOutlineUnfoldMore className="w-5 h-5 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                                </div>
                                <div>
                                    <label className="block font-medium mb-4">Explanation : </label>
                                    <textarea
                                        value={explanation}
                                        onChange={(e) => setExplanation(e.target.value)}
                                        rows={5}
                                        className="w-full sm:w-[800px] border rounded px-3 py-2 bg-[#F0EEEE]"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
