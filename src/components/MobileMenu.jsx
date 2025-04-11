import { useState } from "react";
import {
    BellIcon,
    QuestionMarkCircleIcon,
    UserCircleIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import ThemeSwitcher from "./ThemeSwitcher"; 

export default function MobileMenu() {
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);
    const [themeSwitcherOpen, setThemeSwitcherOpen] = useState(false); 

    return (
        <div className="sm:hidden flex flex-row gap-4 bg-white p-4 shadow rounded-lg relative">
            
            <button className="relative p-1 text-gray-500 hover:text-gray-700">
                <BellIcon className="h-6 w-6" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
            </button>

        
            <button className="p-1 text-gray-500 hover:text-gray-700">
                <QuestionMarkCircleIcon className="h-6 w-6" />
            </button>

            
            <button
                className="p-1 text-gray-500 hover:text-gray-700"
                onClick={() => setThemeSwitcherOpen(true)} 
            >
                <Cog6ToothIcon className="h-6 w-6" />
            </button>

          
            <div className="relative">
                <button
                    className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 w-full"
                    onClick={() => setProfileMenuOpen((prev) => !prev)}
                >
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <UserCircleIcon className="h-6 w-6 text-blue-600" />
                    </div>
                    <ChevronDownIcon className="h-4 w-4 text-gray-500" />
                </button>

              
                {profileMenuOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 z-10">
                        <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            View Profile
                        </button>
                        <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                            Logout
                        </button>
                    </div>
                )}
            </div>

          
            {themeSwitcherOpen && <ThemeSwitcher closeModal={() => setThemeSwitcherOpen(false)} />}
        </div>
    );
}
