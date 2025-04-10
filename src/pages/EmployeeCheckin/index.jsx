import Logo from "@/components/LogoDark";
import { useState } from 'react';
import { useRouter } from 'next/router';
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineKeyboardBackspace, MdArrowForwardIos, MdOutlineUnfoldMore } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBan, FaAlignLeft } from "react-icons/fa";
import { IoRepeatSharp } from "react-icons/io5";

export default function EmployeeCheckin() {
    const router = useRouter();

    const [logData, setLogData] = useState([
        {
            name: "Kapil Sanghani",
            type: "IN",
            time: "17-09-2024 10:00:08",
            id: "EMP-CKIN-09-2024-0001",
            metric: "5M",
        },
        {
            name: "Kapil Sanghani",
            type: "out",
            time: "17-09-2024 10:00:08",
            id: "EMP-CKIN-09-2024-0001",
            metric: "5M",
        },
        {
            name: "Kapil Sanghani",
            type: "IN",
            time: "17-09-2024 10:00:08",
            id: "EMP-CKIN-09-2024-0001",
            metric: "5M",
        },
        {
            name: "Kapil Sanghani",
            type: "out",
            time: "17-09-2024 10:00:08",
            id: "EMP-CKIN-09-2024-0001",
            metric: "5M",
        },
    ]);

    const toggleType = (index) => {
        const updated = [...logData];
        updated[index].type = updated[index].type === "IN" ? "OUT" : "IN";
        setLogData(updated);
    };

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
            <div className="container mx-auto px-4 space-y-6 max-w-7xl">
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

                <div className="flex flex-wrap gap-4 w-full justify-between">
                    <button className="text-base font-medium border-black leading-none px-4 py-3 rounded-md border cursor-pointer min-w-[210px] flex justify-between">
                        Employee Checkin
                        <MdArrowForwardIos />
                    </button>
                    <button
                        className="w-[30px] h-[30px] flex items-center justify-center rounded-sm bg-gray-200 hover:bg-gray-300 cursor-pointer transition"
                    >
                        <IoRepeatSharp className="w-[18px] h-[18px]" />
                    </button>
                </div>

                <div className="w-full flex flex-col sm:flex-row sm:justify-between gap-4">
                    <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 text-md w-full sm:w-auto">
                        <button className="text-base font-medium leading-none px-4 py-3 rounded-md border bg-[#EDEDED] cursor-pointer min-w-[100px] w-full sm:w-auto">
                            Id
                        </button>
                        <button className="text-base font-medium leading-none px-4 py-3 rounded-md border bg-[#EDEDED] cursor-pointer min-w-[200px] w-full sm:w-auto">
                            Employee
                        </button>
                        <div className="relative inline-block w-full sm:w-auto">
                            <select className="text-base font-medium leading-none w-full sm:w-[200px] py-3 px-4 rounded-md shadow-lg bg-[#EDEDED] text-[#928D8D] cursor-pointer appearance-none">
                                <option>Employee Name</option>
                            </select>
                            <MdOutlineUnfoldMore className="w-5 h-5 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 text-md w-full sm:w-auto">
                        <div className="relative inline-block w-full sm:w-auto">
                            <select className="text-base font-medium leading-none w-full sm:w-[150px] py-3 px-4 rounded-md shadow-lg bg-[#EDEDED] text-[#928D8D] cursor-pointer appearance-none">
                                <option>Filter</option>
                            </select>
                            <MdOutlineUnfoldMore className="w-5 h-5 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                        </div>
                        <div className="relative inline-block w-full sm:w-auto">
                            <FaAlignLeft className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-[#928D8D]" />
                            <select className="text-base font-medium leading-none w-full sm:w-[200px] py-3 px-10 rounded-md shadow-lg bg-[#EDEDED] text-[#928D8D] cursor-pointer appearance-none">
                                <option>Created On</option>
                            </select>
                        </div>
                        <button className="text-base font-medium leading-none px-4 py-3 rounded-md border text-white bg-[#0263AB] cursor-pointer min-w-[50px] w-full sm:w-auto flex justify-center items-center">
                            <FaBan />
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto bg-white shadow-md rounded-md">
                    <table className="min-w-full divide-y divide-gray-200 text-sm">
                        <thead className="bg-gray-200 text-gray-700 font-semibold">
                            <tr>
                                <th className="px-4 py-2 text-left whitespace-nowrap">Employee Name</th>
                                <th className="px-4 py-2 text-left whitespace-nowrap">Log Type</th>
                                <th className="px-4 py-2 text-left whitespace-nowrap">Time</th>
                                <th className="px-4 py-2 text-left whitespace-nowrap">ID</th>
                                <th className="px-4 py-2 text-left whitespace-nowrap">1 Of 20</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {logData.map((report, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition">
                                    <td className="px-4 py-3 whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            <input type="checkbox" className="w-4 h-4 bg-[#EBE8E8]" />
                                            {report.name}
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 whitespace-nowrap">
                                        <button
                                            onClick={() => toggleType(index)}
                                            className={`px-3 py-1 rounded-full font-semibold text-white cursor-pointer w-[70px] ${report.type === 'IN' ? 'bg-green-600' : 'bg-red-500'
                                                }`}
                                        >
                                            {report.type}
                                        </button>
                                    </td>
                                    <td className="px-4 py-3 whitespace-nowrap">{report.time}</td>
                                    <td className="px-4 py-3 whitespace-nowrap truncate">{report.id}</td>
                                    <td className="px-4 py-3 whitespace-nowrap">{report.metric}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
