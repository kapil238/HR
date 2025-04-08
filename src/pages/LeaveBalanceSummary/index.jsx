import Logo from "@/components/LogoDark";
import { useRouter } from 'next/router';
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineKeyboardBackspace, MdOutlineUnfoldMore } from "react-icons/md";
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

                <h2 className="text-xl sm:text-xl font-bold underline mb-5">
                    Employee Leave Balance Summary
                </h2>

                <div className="flex flex-wrap gap-4 w-full justify-between sm:justify-around">

                    <button className="text-base font-medium leading-none px-4 py-3 rounded-md border bg-[#EDEDED] cursor-pointer min-w-[200px] ">
                        12-03-2025
                    </button>
                    <button className="text-base font-medium leading-none px-4 py-3 rounded-md border bg-[#EDEDED] cursor-pointer min-w-[200px]">
                        TECHSOUL SOLUTIONS
                    </button>

                    <div className="relative inline-block w-full sm:w-auto">
                        <select className="text-base font-medium leading-none w-full sm:w-[250px] py-3 px-4 rounded-md shadow-lg bg-[#EDEDED] text-[#928D8D] cursor-pointer appearance-none">
                            <option>Employee</option>
                        </select>
                        <MdOutlineUnfoldMore className="w-5 h-5 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                    </div>


                    <div className="relative inline-block w-full sm:w-auto">
                        <select className="text-base font-medium leading-none w-full sm:w-[250px] py-3 px-4 rounded-md shadow-lg bg-[#EDEDED] text-[#928D8D] cursor-pointer appearance-none">
                            <option>Department</option>
                        </select>
                        <MdOutlineUnfoldMore className="w-5 h-5 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                    </div>


                    <div className="relative inline-block w-full sm:w-auto">
                        <select className="text-base font-medium leading-none w-full sm:w-[250px] py-3 px-4 rounded-md shadow-lg bg-[#EDEDED] text-[#928D8D] cursor-pointer appearance-none">
                            <option>Active</option>
                        </select>
                        <MdOutlineUnfoldMore className="w-5 h-5 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                    </div>
                </div>


                <div className="overflow-x-auto mt-14 shadow-xl">
                    <div className="rounded-lg overflow-hidden border border-gray-300 min-w-[600px]">
                        <table className="min-w-full text-sm">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-2 text-center"></th>
                                    <th className="px-4 py-2 text-center">Employee</th>
                                    <th className="px-4 py-2 text-center">Employee Name</th>
                                    <th className="px-4 py-2 text-center">Department</th>
                                    <th className="px-4 py-2 text-center">Casual Leave</th>
                                    <th className="px-4 py-2 text-center">Sick Leave</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index} className="border-t">
                                        <td className="px-4 py-4 text-center">{item.index}</td>
                                        <td className="px-4 py-4 text-center border-l">{item.id}</td>
                                        <td className="px-4 py-4 text-center border-l">{item.name}</td>
                                        <td className="px-4 py-4 text-center border-l">{item.department}</td>
                                        <td className="px-4 py-4 text-center border-l">
                                            {typeof item.casual === "number" ? item.casual.toFixed(3) : item.casual}
                                        </td>
                                        <td className="px-4 py-4 text-center border-l">
                                            {typeof item.sick === "number" ? item.sick.toFixed(3) : item.sick}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className="text-sm text-gray-900 mt-10 border-t pt-5 flex flex-col sm:flex-row justify-between gap-3">
                    <p>
                        For comparison, use &gt;5, &lt;10 or 324. For ranges, use 5:10 (for values between 5 &amp; 10).
                    </p>
                    <p>Execution Time: 0.039415 sec</p>
                </div>
            </div>
        </div>
    );
}
