import Logo from "@/components/LogoDark";
import { useRouter } from 'next/router';
import { IoMdNotifications } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiDotsThreeOutline } from "react-icons/pi";
import { MdOutlineUnfoldMore } from "react-icons/md";
import { IoRepeatSharp } from "react-icons/io5";
import { MdOutlineKeyboardBackspace } from "react-icons/md";


import { BarChart, Bar, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, XAxis } from 'recharts';

export default function DailyWorkReport() {
    const router = useRouter();
    const report = [
        {
            email: "info@techsoulsolution.com",
            name: "Kapil Sanghani",
            date: "12-03-2025",
            from: "10:31:00",
            to: "20:30:12",
            task: "implemented the bottom",
            challenges: " ",
            status: "Completed",
            verification: "Verified",
        },
        {
            email: "info@techsoulsolution.com",
            name: "Kapil Sanghani",
            date: "12-03-2025",
            from: "10:31:00",
            to: "19:30:12",
            task: "implemented the bottom",
            challenges: " ",
            status: "Completed",
            verification: "Verified",
        },
        {
            email: "info@techsoulsolution.com",
            name: "Kapil Sanghani",
            date: "12-03-2025",
            from: "10:31:00",
            to: "15:30:12",
            task: "implemented the bottom",
            challenges: " ",
            status: "Completed",
            verification: "Verified",
        },
        {
            email: "info@techsoulsolution.com",
            name: "Kapil Sanghani",
            date: "12-03-2025",
            from: "10:31:00",
            to: "18:30:12",
            task: "implemented the bottom",
            challenges: " ",
            status: "Completed",
            verification: "Verified",
        },
        {
            email: "info@techsoulsolution.com",
            name: "Kapil Sanghani",
            date: "12-03-2025",
            from: "10:31:00",
            to: "15:30:12",
            task: "implemented the bottom",
            challenges: " ",
            status: "Completed",
            verification: "Verified",
        },
        {
            email: "info@techsoulsolution.com",
            name: "Kapil Sanghani",
            date: "12-03-2025",
            from: "10:31:00",
            to: "15:30:12",
            task: "implemented the bottom",
            challenges: " ",
            status: "Completed",
            verification: "Verified",
        },
        {
            email: "info@techsoulsolution.com",
            name: "Kapil Sanghani",
            date: "12-03-2025",
            from: "10:31:00",
            to: "15:30:12",
            task: "implemented the bottom",
            challenges: " ",
            status: "Completed",
            verification: "Verified",
        },
        {
            email: "info@techsoulsolution.com",
            name: "Kapil Sanghani",
            date: "12-03-2025",
            from: "10:31:00",
            to: "15:30:12",
            task: "implemented the bottom",
            challenges: " ",
            status: "Completed",
            verification: "Verified",
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
                {/* Header */}
                <div className="flex justify-between items-center pt-8">
                    <button
                        onClick={() => router.push('/employeeSpace')}
                        className="w-[35px] h-[35px] flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-200 text-md cursor-pointer"
                    >
                        <MdOutlineKeyboardBackspace className="w-[20px] h-[20px]" />
                    </button>


                    <div className="flex items-center gap-7 text-md">
                        <span className="text-2xl"><IoMdNotifications /></span>
                        <span className="cursor-pointer flex">Help <RiArrowDropDownLine className="text-2xl" /></span>
                    </div>
                </div>

                <div className="flex justify-between items-center pt-6">

                    <h2 className="text-2xl font-bold underline pt-5">
                        Daily Work report
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


                <div className="flex flex-wrap gap-4 w-full justify-between sm:justify-around">

                    <button className="text-base font-medium leading-none px-4 py-3 rounded-md border bg-[#EDEDED] cursor-pointer w-full sm:w-[200px] ">
                        11-04-2025
                    </button>
                    <button className="text-base font-medium leading-none px-4 py-3 rounded-md border bg-[#EDEDED] cursor-pointer w-full sm:w-[200px]">
                        12-04-2025
                    </button>


                    <div className="relative inline-block w-full sm:w-auto">
                        <select className="text-base font-medium leading-none w-full sm:w-[250px] py-3 px-4 rounded-md shadow-lg bg-[#EDEDED] text-[#928D8D] cursor-pointer appearance-none">
                            <option>Month</option>
                        </select>
                        <MdOutlineUnfoldMore  className="w-5 h-5 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"/>
                    </div>


                    <div className="relative inline-block w-full sm:w-auto">
                        <select className="text-base font-medium leading-none w-full sm:w-[250px] py-3 px-4 rounded-md shadow-lg bg-[#EDEDED] text-[#928D8D] cursor-pointer appearance-none">
                            <option>Status</option>
                        </select>
                        <MdOutlineUnfoldMore  className="w-5 h-5 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"/>
                    </div>


                    <div className="relative inline-block w-full sm:w-auto">
                        <select className="text-base font-medium leading-none w-full sm:w-[250px] py-3 px-4 rounded-md shadow-lg bg-[#EDEDED] text-[#928D8D] cursor-pointer appearance-none">
                            <option>Verification Status</option>
                        </select>
                        <MdOutlineUnfoldMore  className="w-5 h-5 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"/>
                    </div>
                </div>

                <div className="w-full h-[350px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={report}>
                            <CartesianGrid />
                            <YAxis ticks={[3, 6, 9, 12, 15]} domain={[0, 15]} />
                            <Tooltip />
                            <Bar
                                dataKey={(data) => {
                                    const [fromH, fromM] = data.from.split(':').map(Number);
                                    const [toH, toM] = data.to.split(':').map(Number);
                                    let hours = toH + toM / 60 - fromH - fromM / 60;
                                    return parseFloat(hours.toFixed(2));
                                }}
                                fill="#0263AB9C"
                                name="Work Hours"
                                barSize={50}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>


                <div className="max-w-7xl mx-auto">

                    <div className="border border-gray-400 rounded-sm overflow-hidden mb-3">
                        <div className="w-full overflow-x-auto">
                            <table className="table-fixed min-w-[1200px] text-[12px] sm:text-[13px] md:text-[14px]">
                                <thead className="bg-white text-center">
                                    <tr>
                                        <th className="w-[40px] px-2 py-3 font-bold"></th>
                                        <th className="min-w-[170px] px-2 py-3">Employee Email</th>
                                        <th className="w-[160px] px-2 py-3">Employee Name</th>
                                        <th className="w-[110px] px-2 py-3">Date</th>
                                        <th className="w-[110px] px-2 py-3">From Time</th>
                                        <th className="w-[100px] px-2 py-3">To Time</th>
                                        <th className="w-[200px] px-2 py-3">Task Details</th>
                                        <th className="w-[160px] px-2 py-3">Challenges Faced</th>
                                        <th className="w-[100px] px-2 py-3">Status</th>
                                        <th className="w-[90px] px-2 py-3">Verification</th>
                                        <th className="w-[130px] px-2 py-3">Approve</th>
                                        <th className="w-[90px] px-2 py-3">View</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>

                    <div className="border border-gray-400 rounded-md overflow-auto">
                        <table className="table-fixed min-w-full text-[12px] font-normal">
                            <tbody>
                                {report.map((report, i) => (
                                    <tr key={i} className={`border-b border-gray-300 bg-[#f3f7fb] `}>
                                        <td className="w-[40px] px-2 py-2 text-center font-bold">{i + 1}</td>
                                        <td className="w-[180px] px-2 py-2 text-center">{report.email}</td>
                                        <td className="w-[160px] px-2 py-2 text-center">{report.name}</td>
                                        <td className="w-[100px] px-2 py-2 text-center">{report.date}</td>
                                        <td className="w-[110px] px-2 py-2 text-center">{report.from}</td>
                                        <td className="w-[100px] px-2 py-2 text-center">{report.to}</td>
                                        <td className="w-[200px] px-2 py-2 text-center">{report.task}</td>
                                        <td className="w-[160px] px-2 py-2 text-center">{report.challenges}</td>
                                        <td className="w-[100px] px-2 py-2 text-center">{report.status}</td>
                                        <td className="w-[120px] px-2 py-2 text-center">{report.verification}</td>
                                        <td className="w-[100px] px-2 py-2 text-center">
                                            <button className="border-2 border-gray-300 px-4 py-1 rounded-sm text-xs">Approve</button>
                                        </td>
                                        <td className="w-[80px] px-2 py-2 text-center">
                                            <button className="bg-[#0263AB] text-white px-4 py-1 rounded-sm text-xs">View</button>
                                        </td>
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