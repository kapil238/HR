import Logo from "@/components/LogoDark";
import { useRouter } from 'next/router';
import { IoMdNotifications } from "react-icons/io";
import { IoRepeatSharp } from "react-icons/io5";
import { MdOutlineKeyboardBackspace, MdArrowForwardIos } from "react-icons/md";
import { PiDotsThreeOutline } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function LeaveSummary() {
    const router = useRouter();

    const data = [
        {
            index: "",
            id: "—— ——",
            name: "—— ——",
            department: "—— ——",
            casual: "—— ——",
            sick: "—— ——",
        },
        {
            index: "1",
            id: "HR-EMP-001:K...",
            name: "Kapil Sanghani",
            department: "",
            casual: 20.0,
            sick: 3.0,
        },
    ];

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

                    <button className="text-base text-white font-medium leading-none px-4 py-3 rounded-md border bg-[#828282] cursor-pointer min-w-[200px] flex justify-between">
                        Task Handover
                        <MdArrowForwardIos />
                    </button>
                    <button className="text-base text-white font-medium leading-none px-4 py-3 rounded-md border bg-[#828282] cursor-pointer min-w-[200px] flex justify-between">
                        New Task Handover
                        <MdArrowForwardIos />
                    </button>
                    <button className="text-base text-white font-medium leading-none px-4 py-3 rounded-md border bg-[#828282] cursor-pointer min-w-[200px] flex justify-between">
                        Add Task
                        <MdArrowForwardIos />
                    </button>
                </div>

                <div className="flex justify-between items-center pt-6">

                    <h2 className="text-2xl font-bold underline pt-5">
                        New Task Handover
                    </h2>

                    <div className="flex items-center gap-4 text-md mr-3">
                        <button
                            className="w-[30px] h-[30px] flex items-center rounded-sm justify-center bg-gray-200 hover:bg-gray-200 text-md cursor-pointer"
                        >
                            <IoRepeatSharp className="w-[18px] h-[18px]" />
                        </button>
                        <button
                            className="w-[30px] h-[30px] flex items-center rounded-sm justify-center bg-gray-200 hover:bg-gray-200 text-md cursor-pointer"
                        >
                            <PiDotsThreeOutline className="w-[18px] h-[18px]" />
                        </button>

                    </div>
                </div>




                <div className="overflow-x-auto mt-14">
                    <div className="rounded-lg overflow-hidden min-w-[600px] pb-10">


                        <div className="mt-10 space-y-6">

                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="handoverConfirmed" className="w-4 h-4 cursor-pointer" />
                                <label htmlFor="handoverConfirmed" className="text-sm font-medium">Handover Confirmed</label>
                            </div>


                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 px-10">
                                <div className="space-y-2">
                                    {[
                                        "Handover To",
                                        "Handover To (Email)",
                                        "Handover To (Name)",
                                        "Deadline For Completion",
                                        "Team Lead ID",
                                        "Team Lead (Email)",
                                        "Team Lead (Name)",
                                    ].map((label, i) => (
                                        <div key={i} className="flex items-center gap-6">
                                            <span className="text-md text-black font-medium w-2/5">• {label} :</span>
                                            <input type="text" className="bg-[#ECECEC] w-[250px] h-[30px] px-2 py-1 rounded-sm w-3/5" />
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-2">
                                    {[
                                        "Employee ID",
                                        "Employee (Name)",
                                        "Employee (Email)",
                                        "Form Data",
                                        "To Data",
                                    ].map((label, i) => (
                                        <div key={i} className="flex items-center gap-6">
                                            <span className="text-md text-black font-medium w-2/5">• {label} :</span>
                                            <input type="text" className="bg-[#ECECEC] w-[250px] h-[30px] p-1 rounded-sm w-3/5" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button className="bg-gray-200 px-8 rounded-sm py-2 font-medium text-lg rounded-t cursor-pointer">Task To Handover</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
