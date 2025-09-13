import React from "react";
import Link from "next/link";
import { User, Settings, ChartBar } from "lucide-react";

function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4 px-8 bg-gray-50 border-b border-gray-50 text-gray-700">
            <div>
                <Link href='/settings' className="group relative">
                    <Settings size={32} className="cursor-pointer inline-block"/>
                </Link>
            </div>
            <div className='font-bold text-3xl'>
                <Link href="/" className="group relative">
                    <span className="cursor-pointer inline-block text-gray-900">DevGPA</span>
                </Link>
            </div>
            <div>
                <Link href='profile' className="group relative">
                    <User size={32} className="cursor-pointer inline-block"/>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;