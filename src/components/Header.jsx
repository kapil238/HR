import { useState } from "react";
import { useRouter } from "next/router";
import {
    BellIcon,
    QuestionMarkCircleIcon,
    UserCircleIcon,
    ChevronDownIcon,
    Bars3Icon,
} from "@heroicons/react/24/outline";
import MobileMenu from "../components/MobileMenu";
import ThemeSwitcher from "../components/ThemeSwitcher";
import ProfileCard from "../components/ProfileCard";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);
    const [isThemeSwitcherOpen, setThemeSwitcherOpen] = useState(false);
    const [isProfileOpen, setProfileOpen] = useState(false);

    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        sessionStorage.removeItem("authToken");
        router.push("/Login");
    };

    return (
        <div className="relative flex justify-between justify-end items-center border-b pb-1 px-4 sm:px-6">

            {/* Mobile Menu Button */}
            <div className="relative sm:hidden">
                <button
                    className="p-2 text-gray-600 hover:text-gray-800"
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    <Bars3Icon className="h-8 w-8" />
                </button>

                <div className={`absolute top-full right-0 mt-2 transition-all duration-300 ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
                    <MobileMenu menuOpen={menuOpen} />
                </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-3">
                <div className="relative group flex items-center gap-5">
                    <button className="relative text-gray-500 hover:text-gray-700 cursor-pointer">
                        <BellIcon className="h-6 w-6" />
                        <span className="absolute top-0 right-0 h-1 w-1 rounded-full bg-red-500"></span>
                    </button>

                    {/* Vertical Line */}
                    <div className="h-6 w-px bg-gray-300"></div>

                    {/* Tooltip on hover */}
                    <div className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Notifications
                    </div>
                </div>


                <div className="relative group">
                    <button className="p-1 text-gray-500 hover:text-gray-700">
                        <QuestionMarkCircleIcon className="h-6 w-6" />
                    </button>

                    {/* Tooltip on hover */}
                    <div className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Help
                    </div>
                </div>

                {/* Profile Section */}
                <div className="relative">
                    <button
                        className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100"
                        onClick={() => setProfileMenuOpen((prev) => !prev)}
                    >
                        <div className="h-7 w-7 rounded-full bg-blue-100 flex items-center justify-center">
                            <UserCircleIcon className="h-6 w-6 text-blue-600" />
                        </div>
                        <ChevronDownIcon className="h-3 w-3 text-gray-500" />
                    </button>

                    {profileMenuOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2">
                            <button
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => {
                                    setProfileOpen(true); // ✅ Open ProfileCard
                                    setProfileMenuOpen(false);
                                }}
                            >
                                View Profile
                            </button>
                            <button
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setThemeSwitcherOpen(true)}
                            >
                                Switch Theme
                            </button>
                            <button
                                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* ✅ Theme Switcher Modal */}
            {isThemeSwitcherOpen && <ThemeSwitcher closeModal={() => setThemeSwitcherOpen(false)} />}

            {/* ✅ Profile Card Modal */}
            {isProfileOpen && <ProfileCard closeModal={() => setProfileOpen(false)} />}
        </div>
    );
}
