import Logo from "@/components/LogoDark";
import { useState } from 'react';
import { useRouter } from 'next/router';
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineKeyboardBackspace, MdArrowForwardIos } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";

export default function LeaveSummary() {
    const router = useRouter();
    const [employee, setEmployee] = useState('HR-EMP-00013');
    const [employeeName, setEmployeeName] = useState('Kapil Sanghani');




    return (
        <div className="min-h-screen bg-white text-black">
            {/* Header */}
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

                    <button className="text-base font-medium border-black leading-none px-4 py-3 rounded-md border cursor-pointer min-w-[200px] flex justify-between">
                        Attendance Request
                        <MdArrowForwardIos />
                    </button>
                    <button className="text-base font-medium border-black leading-none px-4 py-3 rounded-md border cursor-pointer min-w-[200px] flex justify-between">
                        New Attendance Request
                        <MdArrowForwardIos />
                    </button>
                </div>

                <div className="flex justify-between items-center pt-6">

                    <h2 className="text-2xl font-bold underline pt-5">
                        New Attendance Request

                    </h2>


                    <div className="flex items-center gap-4 text-md mr-3">
                        <button className="text-base font-medium text-white leading-none px-4 py-3 bg-[#928D8D] rounded-md border cursor-pointer min-w-[100px]">
                            Save
                        </button>

                    </div>
                </div>
                <div className="overflow-x-auto mt-14">
                    <div className="flex gap-10 w-full h-auto mb-10">
                        <div>
                            <label className="block font-medium mb-2">Employee :</label>
                            <label className="block font-medium mb-2">Company  :</label>
                        </div>
                        <div className="border rounded-md p-2 bg-white shadow-sm w-full sm:w-[300px]">
                            <div className="border p-2 rounded-md">
                                <div className="font-medium text-gray-800">{employee}</div>
                                <div className="text-sm text-gray-600">{employeeName}</div>
                            </div>
                            <div className="flex items-center"><IoMdSearch /><input type="text" placeholder="Advanced Search" className="w-full mt-2  rounded px-2 py-1 text-sm" /></div>
                        </div>

                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-3">
                                    <label className="block font-medium mb-1 w-full">Form Data :</label>
                                    <input type="date" className="w-full border rounded px-2 py-1" />
                                </div>

                                <div className="flex gap-3">
                                    <label className="block font-medium mb-1 mt-4 w-full">To Data :</label>
                                    <input type="date" className="w-full border rounded px-2 py-1" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="flex gap-3 items-baseline">
                                    <input type="checkbox" className="border rounded px-2 py-1" />
                                    <label className="block font-medium mb-1 mt-4 w-full">Half Day</label>
                                </div>
                                <div className="flex gap-3 items-baseline">
                                    <input type="checkbox" className="border rounded px-2 py-1" />
                                    <label className="block font-medium mb-1 mt-4 w-full">Include Holidays</label>
                                </div>
                                <div className="flex gap-3">
                                    <label className="block font-medium mb-1 mt-4 w-full">Shift :</label>
                                    <input type="text" className="w-full border rounded px-2 py-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
