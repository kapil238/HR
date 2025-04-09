import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

const EmployeeStatusList = () => {
    // Sample data
    const employeeData = [
        {
            checkinInfo: { name: "Kapil Sanghani", time: "17 hours ago" },
            attendance: { name: "Kapil Sanghani", time: "17 hours ago" },
            leaveApplications: [
                { status: "Submitted", name: "Kapil Sanghani", time: "2 days ago" },
                { draft: true },
            ],
        },
        {
            checkinInfo: { name: "Kapil Sanghani", time: "23 hours ago" },
            attendance: { name: "Kapil Sanghani", time: "yesterday" },
            leaveApplications: [
                { status: "Submitted", name: "Kapil Sanghani", time: "2 weeks ago" },
                { approved: true },
            ],
        },
        {
            checkinInfo: { name: "Kapil Sanghani", time: "" },
            attendance: { name: "Kapil Sanghani", time: "" },
            leaveApplications: [{ name: "Kapil Sanghani", time: "" }, {}],
        },
    ];

    return (
        <div className="bg-white px-4 rounded-lg">

            <div className="grid grid-cols-3 gap-6 p-3 rounded-t-md font-semibold text-gray-500 text-sm">
                <div>Checkin Info</div>
                <div>Attendance</div>
                <div>Leave Application</div>
            </div>


            {employeeData.map((employee, index) => (
                <div key={index} className="grid grid-cols-3 gap-7 px-3 py-1 items-center">

                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs text-gray-900">{employee.checkinInfo.name}</p>
                            <p className="text-xs text-gray-500">{employee.checkinInfo.time}</p>
                        </div>
                        <MdArrowForwardIos className="text-gray-500 text-sm" />



                    </div>



                    <div className="flex gap-2 items-center justify-between">
                        <div>
                            <p className="text-xs text-gray-900">{employee.attendance.name}</p>
                            <p className="text-xs text-gray-500">{employee.attendance.time}</p>
                        </div>
                        <div className="flex gap-2">{employee.leaveApplications[0].status && (
                            <div className="flex items-center text-green-600 bg-green-100 rounded-full px-2 py-1 ">
                                <AiOutlineCheckCircle className="text-green-500 mr-1" />
                                <span className="text-xs">{employee.leaveApplications[0].status}</span>
                            </div>
                        )}
                            <MdArrowForwardIos className="text-gray-500 text-sm" />
                        </div>
                    </div>



                    <div className="flex gap-2 items-center justify-between">
                        <div>
                            <p className="text-xs text-gray-900">{employee.leaveApplications[0].name}</p>
                            <p className="text-xs text-gray-500">{employee.leaveApplications[0].time}</p>
                        </div>

                        <div className="flex gap-2 items-center">
                            {employee.leaveApplications[1].draft && (
                                <span className="flex items-center gap-1 px-3 py-1 text-xs  text-red-500 bg-red-100 rounded-full">
                                    <GoDotFill className="text-red-500 text-base" />
                                    Draft
                                </span>
                            )}
                            {employee.leaveApplications[1].approved && (
                                <span className="flex items-center gap-1 px-2 py-1 text-xs  text-green-600 bg-green-100 rounded-full">
                                    <GoDotFill className="text-green-500 text-base" />

                                    Approved
                                </span>
                            )}

                            <MdArrowForwardIos className="text-gray-500 text-base" />
                        </div>
                    </div>
                </div>
            ))}

            <div className="grid grid-cols-3 gap-6 p-3 rounded-t-md font-semibold text-gray-500 text-sm mt-3">
                <div className="flex gap-4 items-center">
                    <span>View List</span>
                    <MdArrowForwardIos className="text-gray-500 text-xs" />
                </div>
                <div className="flex gap-4 items-center">
                    <span>View List</span>
                    <MdArrowForwardIos className="text-gray-500 text-xs" />
                </div>
                <div className="flex gap-4 items-center">
                    <span>View List</span>
                    <MdArrowForwardIos className="text-gray-500 text-xs" />
                </div>
            </div>

        </div>
    );
};

export default EmployeeStatusList;
