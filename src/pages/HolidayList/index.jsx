import Logo from "@/components/LogoDark";
import { useRouter } from 'next/router';
import { IoMdNotifications } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiDotsThreeOutline } from "react-icons/pi";
import { IoRepeatSharp } from "react-icons/io5";
import { MdOutlineKeyboardBackspace } from "react-icons/md";


export default function DailyWorkReport() {
    const router = useRouter();
    const report = [
        {
            Date: "01 - 01 - 2025",
            Day: "Monday",
            Festival: "New Year",
        },
        {
            Date: "01 - 01 - 2025",
            Day: "Monday",
            Festival: "New Year",
        },
        {
            Date: "01 - 01 - 2025",
            Day: "Monday",
            Festival: "New Year",
        },
        {
            Date: "01 - 01 - 2025",
            Day: "Monday",
            Festival: "New Year",
        },
        {
            Date: "01 - 01 - 2025",
            Day: "Monday",
            Festival: "New Year",
        },
        {
            Date: "01 - 01 - 2025",
            Day: "Monday",
            Festival: "New Year",
        },
    ]

    return (
        <div className="min-h-screen bg-white text-black pb-10">
            <div className="shadow-lg bg-white">
                <div className="flex items-center gap-2 max-w-7xl mx-auto py-4 h-[50px]">
                    <div className="w-[130px] h-[30px]">
                        <Logo />
                    </div>
                </div>
                <hr className="border-t border-gray-300" />
            </div>

            <div className="container mx-auto px-4 space-y-4 max-w-7xl mx-auto">
                <div className="flex justify-between items-center pt-8">
                    <button
                        onClick={() => router.push('/employeeSpace')}
                        className="w-[35px] h-[35px] flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-200 text-md cursor-pointer"
                    >
                        <MdOutlineKeyboardBackspace className="w-[20px] h-[20px]" />
                    </button>
                    <div className="flex items-center gap-7 text-md">
                        <span className="text-2xl"><IoMdNotifications /></span>
                        <span className="cursor-pointer flex">Help<RiArrowDropDownLine className="text-2xl" /></span>
                    </div>
                </div>

                <div className="flex justify-between items-center pt-6 mb-12">
                    <h2 className="text-2xl font-bold underline pt-5">
                        Holiday List
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

                <div className="max-w-4xl mx-auto">
                    <div className="border border-gray-400 rounded-3xl overflow-auto">
                        <table className="table-fixed min-w-full text-[14px] font-normal">
                            <thead className="bg-white text-center">
                                <tr className="bg-[#DDDDDD]">
                                    <th className=" px-2 py-5 font-bold"><span className="border rounded-full text-md px-2 py-2 bg-white">No</span></th>
                                    <th className=" px-2 py-5"><span className="border rounded-lg px-16 text-md py-2 bg-white">Date</span></th>
                                    <th className=" px-2 py-5"><span className="border rounded-lg px-16 text-md py-2 bg-white">Day</span></th>
                                    <th className=" px-2 py-5"><span className="border rounded-lg px-16 text-md py-2 bg-white">Festival</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                {report.map((report, i) => (
                                    <tr key={i} className="border-t border-gray-300 border-dashed bg-[#f4f7ff]">
                                        <td className="px-2 py-4 text-md border-r border-gray-300 border-dashed text-center font-bold">{i + 1}</td>
                                        <td className="px-2 py-4 text-md border-r border-gray-300 border-dashed text-center">{report.Date}</td>
                                        <td className="px-2 py-4 text-md border-r border-gray-300 border-dashed text-center">{report.Day}</td>
                                        <td className="px-2 py-4 text-md border-gray-300 border-dashed text-center">{report.Festival}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}