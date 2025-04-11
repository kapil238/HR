'use client'
import { useState } from 'react';
import QuillEditor from '@/components/QuillEditor';
import Input from '@/components/Input';
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

  const [newTask, setNewTask] = useState({
    handoverTo: '',
    handoverEmail: '',
    handoverName: '',
    deadline: '',
    teamLeadId: '',
    teamLeadEmail: '',
    teamLeadName: '',
    employeeId: '',
    employeeName: '',
    employeeEmail: '',
    fromDate: '',
    toDate: '',
    details: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask(prev => ({ ...prev, [name]: value }));
    if (value.trim() !== '') {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateFields = () => {
    const newErrors = {};
    Object.keys(newTask).forEach((key) => {
      if (!newTask[key]) newErrors[key] = true;
    });
    if (!editorContent.trim()) newErrors.details = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateFields()) {
      console.log("Form submitted", newTask, editorContent);
    }
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
          {["Task Handover", "New Task Handover", "Add Task"].map((label, i) => (
            <button key={i} className="text-base text-white font-medium leading-none px-2 py-3 rounded-md border bg-[#828282] cursor-pointer min-w-[175px] flex justify-between">
              {label}
              <MdArrowForwardIos />
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-between items-center gap-4 pt-6 px-4 sm:px-6">
          <div className="text-xl sm:text-2xl font-bold border border-gray-300 p-2 rounded-md text-black">
            New Task Handover
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-sm sm:text-md">
            <button className="w-[30px] h-[30px] flex items-center justify-center rounded-sm bg-gray-200 hover:bg-gray-300 cursor-pointer transition">
              <IoRepeatSharp className="w-[18px] h-[18px]" />
            </button>
            <button className="w-[30px] h-[30px] flex items-center justify-center rounded-sm bg-gray-200 hover:bg-gray-300 cursor-pointer transition">
              <PiDotsThreeOutline className="w-[18px] h-[18px]" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto px-4 sm:px-6 py-2">
          <div className="rounded-lg overflow-hidden min-w-[300px] sm:min-w-[600px]">
            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="handoverConfirmed" className="w-4 h-4 cursor-pointer" />
                <label htmlFor="handoverConfirmed" className="text-sm font-medium">
                  Handover Confirmed
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 px-0 sm:px-6">
                <div className="space-y-4">
                  {[
                    { label: "Handover To", name: "handoverTo", valid: "ID" },
                    { label: "Handover To (Email)", name: "handoverEmail", valid: "Email" },
                    { label: "Handover To (Name)", name: "handoverName", valid: "Name" },
                    { label: "Deadline For Completion", name: "deadline", valid: "Deadline" },
                    { label: "Team Lead ID", name: "teamLeadId", valid: "Team ID" },
                    { label: "Team Lead (Email)", name: "teamLeadEmail", valid: "Email" },
                    { label: "Team Lead (Name)", name: "teamLeadName", valid: "Name" },
                  ].map(({ label, name, valid }) => (
                    <div key={name} className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-center">
                      <span className="text-md text-black font-semibold sm:w-3/7 w-full">
                        • {label} <span className="text-red-700 text-md">*</span> :
                      </span>
                      <div className="w-full sm:w-4/7">
                        <Input
                          label={label}
                          name={name}
                          value={newTask[name]}
                          onChange={handleInputChange}
                          error={errors[name]}
                        />
                        {/* {errors[name] && <p className="text-red-500 text-xs mt-1">{valid} required</p>} */}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Employee ID", name: "employeeId", valid: "Employee ID" },
                    { label: "Employee (Name)", name: "employeeName", valid: "Employee Name" },
                    { label: "Employee (Email)", name: "employeeEmail", valid: "Employee Email" },
                    { label: "Form Date", name: "fromDate", valid: "Form Date" },
                    { label: "To Date", name: "toDate", valid: "To Date" },
                  ].map(({ label, name, valid }) => (
                    <div key={name} className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-center">
                      <span className="text-md text-black font-semibold sm:w-3/7 w-full">
                        • {label} <span className="text-red-700 text-md ">*</span> :
                      </span>
                      <div className="w-full sm:w-4/7">
                        <Input
                          label={label}
                          name={name}
                          value={newTask[name]}
                          onChange={handleInputChange}
                          error={errors[name]}
                        />
                        {/* {errors[name] && <p className="text-red-500 text-xs mt-1">{valid} required</p>} */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex pt-4">
                <button
                  onClick={handleSubmit}
                  className="bg-gray-200 px-8 py-2 font-medium text-lg rounded cursor-pointer hover:bg-gray-300 transition"
                >
                  Task To Handover
                </button>
              </div>

              <div className="pt-4 px-0 sm:px-6">
                <div className="bg-white rounded-md border border-gray-300">
                  <QuillEditor value={editorContent} onChange={setEditorContent} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
