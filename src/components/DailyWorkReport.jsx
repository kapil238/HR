import { useState } from "react";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import AddTaskModal from "./AddTaskModal";
import TaskTable from "./TaskTable"; // Import TaskTable component

export default function DailyWorkReport() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            date: "04-04-2025",
            fromTime: "10:05:00 AM",
            toTime: "4:03:00 PM",
            details: "Coordinated virtual meeting",
            reportingManager: "HR-EMP-00078 - Matlapudi Santhosh Kumar",
            status: "Completed",
            challenges: "None"
        }
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newTask, setNewTask] = useState({
        date: "",
        fromTime: "",
        toTime: "",
        details: "",
        reportingManager: "",
        status: "Pending",
        challenges: ""
    });

    const reportingManagers = [
        { id: "HR-EMP-00078", name: "Matlapudi Santhosh Kumar" },
        { id: "HR-EMP-00058", name: "Vadolya Shilpa Dhirajbhai" },
        { id: "HR-EMP-00062", name: "Ajinkya Biyani" },
        { id: "HR-EMP-00068", name: "Ajith E V" },
        { id: "HR-EMP-00051", name: "Akash Khare" }
    ];

    const handleAddTask = () => {
        if (newTask.date && newTask.fromTime && newTask.toTime && newTask.details && newTask.reportingManager) {
            setTasks([...tasks, {
                ...newTask,
                id: tasks.length + 1,
                reportingManager: `${newTask.reportingManager} - ${reportingManagers.find(rm => rm.id === newTask.reportingManager)?.name}`
            }]);
            setNewTask({
                date: "",
                fromTime: "",
                toTime: "",
                details: "",
                reportingManager: "",
                status: "Pending",
                challenges: ""
            });
            setIsModalOpen(false);
        }
    };

    return (
        <div className="bg-white overflow-hidden mb-4">
            {/* Use TaskTable component and pass onOpenModal */}
            <TaskTable tasks={tasks} onOpenModal={() => setIsModalOpen(true)} />

            <AddTaskModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                newTask={newTask} 
                setNewTask={setNewTask} 
                handleAddTask={handleAddTask} 
                reportingManagers={reportingManagers} 
            />
        </div>
    );
}
