import Logo from "@/components/LogoDark";
import { useState } from 'react';
import { useRouter } from 'next/router';
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineKeyboardBackspace, MdArrowForwardIos, MdOutlineUnfoldMore } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

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

                <div className="flex flex-wrap gap-4 w-full">
                    <button className="text-base font-medium border-black leading-none px-4 py-3 rounded-md border cursor-pointer min-w-[210px] flex justify-between">
                        Employee Checkin
                        <MdArrowForwardIos />
                    </button>
                </div>

                <div className="flex flex-wrap gap-4 w-full justify-between sm:justify-around">
                    <button className="text-base font-medium leading-none px-4 py-3 rounded-md border bg-[#EDEDED] cursor-pointer min-w-[150px]">
                        Id
                    </button>
                    <button className="text-base font-medium leading-none px-4 py-3 rounded-md border bg-[#EDEDED] cursor-pointer min-w-[200px]">
                        Employee
                    </button>
                    <div className="relative inline-block w-full sm:w-auto">
                        <select className="text-base font-medium leading-none w-full sm:w-[200px] py-3 px-4 rounded-md shadow-lg bg-[#EDEDED] text-[#928D8D] cursor-pointer appearance-none">
                            <option>Employee Name</option>
                        </select>
                        <MdOutlineUnfoldMore className="w-5 h-5 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                    </div>
                    <div className="relative inline-block w-full sm:w-auto">
                        <select className="text-base font-medium leading-none w-full sm:w-[250px] py-3 px-4 rounded-md shadow-lg bg-[#EDEDED] text-[#928D8D] cursor-pointer appearance-none">
                            <option>Filter</option>
                        </select>
                        <MdOutlineUnfoldMore className="w-5 h-5 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                    </div>
                    <div className="relative inline-block w-full sm:w-auto">
                        <select className="text-base font-medium leading-none w-full sm:w-[250px] py-3 px-4 rounded-md shadow-lg bg-[#EDEDED] text-[#928D8D] cursor-pointer appearance-none">
                            <option>Created On</option>
                        </select>
                        <MdOutlineUnfoldMore className="w-5 h-5 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                    </div>
                </div>

                <div className="bg-white shadow-md rounded-md overflow-hidden">
                    <div className="grid grid-cols-5 gap-4 bg-gray-200 font-semibold text-sm text-gray-700 px-4 py-2">
                        <span>Employee Name</span>
                        <span>Log Type</span>
                        <span>Time</span>
                        <span>ID</span>
                        <span>1 Of 20</span>
                    </div>

                    {logData.map((report, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-5 items-center gap-4 px-4 py-3 border-b text-sm text-black bg-white hover:bg-gray-50 transition"
                        >
                            <span>{report.name}</span>
                            <button
                                onClick={() => toggleType(index)}
                                className={`px-3 py-1 rounded-full font-semibold text-white w-fit cursor-pointer ${report.type === 'IN' ? 'bg-blue-600' : 'bg-red-500'}`}
                            >
                                {report.type}
                            </button>
                            <span>{report.time}</span>
                            <span className="truncate">{report.id}</span>
                            <span>{report.metric}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
