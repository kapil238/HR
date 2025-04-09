import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Header from "../../components/Header";
import Logo from "../../components/LogoDark";
import DailyWorkReport from "../../components/DailyWorkReport";
import EmployeeCard from "@/components/EmployeeCard";
import EmployeeStatusTable from "@/components/EmployeeStatusTable";

export default function EmployeeSpace() {
  const router = useRouter();

  const [currentTime, setCurrentTime] = useState(null);
  const [isPunchedIn, setIsPunchedIn] = useState(false);
  const [startShift, setStartShift] = useState(null);
  const [endShift, setEndShift] = useState(null);
  const [openCard, setOpenCard] = useState(null);

  useEffect(() => {
    setCurrentTime(new Date());
    const interval = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  const formattedDate = currentTime ? currentTime.toLocaleDateString("en-GB") : "Loading...";
  const formattedTime = currentTime ? currentTime.toLocaleTimeString("en-US") : "Loading...";

  const handlePunch = () => {
    setStartShift(isPunchedIn ? startShift : formattedTime);
    setEndShift(isPunchedIn ? formattedTime : null);
    setIsPunchedIn(!isPunchedIn);
  };

  const handleCardClick = (index) => {
    const routes = ["/LeaveBalanceSummary", "/DailyWorkReport", "/HolidayList"];
    index < routes.length ? router.push(routes[index]) : setOpenCard(openCard === index ? null : index);
  };

  const cardData = [
    { title: "Leave Balance Sum...", entries: [{ name: "Kapil Sanghani", date: "2 days ago" }] },
    { title: "Daily Work Report", entries: [{ name: "Kapil Sanghani", date: "3 days ago", statusIcon: <AiOutlineCheckCircle className="text-green-500" /> }] },
    { title: "Holiday List", entries: [{ name: "Kapil Sanghani", date: "1 month ago", statusIcon: <AiOutlineCheckCircle className="text-green-500" /> }] }
  ];

  const handleTaskClick = (index) => {
    const routes = ["/newTaskHandover", "/leaveApplication"];
    index < routes.length ? router.push(routes[index]) : setOpenCard(openCard === index ? null : index);
  };

  const taskData = [
    { title: "New Task Handover..." },
    { title: "Leave Application" },
  ];

  return (
    <div className="relative min-h-screen bg-[#f8fbff] flex flex-col items-center p-1">
      <div className="w-full max-w-8xl mx-auto">
        <Header />
        <hr className="border-t border-gray-300" />
        <h3 className="text-3xl font-semibold text-gray-800 pb-2 pt-2 px-4 sm:px-10 md:px-20">
          Employee Space
        </h3>
        <hr className="border-t border-gray-300" />

        <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="w-full p-4 mb-3">
            <div className="flex flex-row items-center justify-between mt-2">
              <Logo />
            </div>

           
            <div className="flex flex-col sm:flex-row gap-7 mt-6 w-full pb-10 max-w-full sm:max-w-2xl mx-auto">
              
              <div className="flex flex-col items-center w-full sm:w-auto">
                <div className="text-center">
                  <p className="text-sm sm:text-2xl font-semibold text-gray-800 pb-2 tracking-wider">
                    {formattedDate}
                  </p>
                  <p className="text-lg sm:text-4xl font-bold text-blue-600 pb-2 tracking-tight">
                    {formattedTime}
                  </p>
                </div>
                <button
                  className={`w-full sm:w-72 px-5 py-2 text-white rounded-md font-medium text-base transition cursor-pointer ${isPunchedIn ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"}`}
                  onClick={handlePunch}
                >
                  {isPunchedIn ? "Punch Out" : "Punch In"}
                </button>
              </div>

             
              <div className="text-gray-800 text-sm sm:text-base flex flex-col justify-center w-full sm:w-auto">
                <p className="font-semibold">Start Shift: {startShift || ""}</p>
                <p className="mt-2 font-semibold">End Shift: {endShift || ""}</p>
              </div>
            </div>

            <DailyWorkReport />

            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
              {cardData.map((card, index) => (
                <EmployeeCard
                  key={index}
                  title={card.title}
                  entries={card.entries}
                  isOpen={openCard === index}
                  onClick={() => handleCardClick(index)}
                />
              ))}
            </div>
            <div className="overflow-x-auto mt-6">
              <EmployeeStatusTable />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full mt-6">
              {taskData.map((task, index) => (
                <EmployeeCard
                  key={index}
                  title={task.title}
                  // entries={task.entries}
                  isOpen={openCard === index}
                  onClick={() => handleTaskClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
