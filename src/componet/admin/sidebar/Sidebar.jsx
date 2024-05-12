import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../image/election-commission-of-india.jpg';


const Sidebar = () => {

    const handlechange = () => {
        window.location.reload();
        localStorage.clear();
        window.location.href = "/";
    }
    return (
        <>
            <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div class="px-3 py-3 lg:px-5 lg:pl-3">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center justify-start rtl:justify-end">
                            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <span class="sr-only">Open sidebar</span>
                                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <div class="flex ms-2 md:me-24">
                                <img src={logo} class="h-10 w-20 me-3" alt="FlowBite Logo" />
                                <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">भारत निर्वाचन आयोग</span>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
            <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul class="space-y-2 font-medium">
                        <li>
                            <Link to={'/dashboard'} class="text-center flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" >Dashboard</Link>
                        </li>
                        <li>
                            <Link to={'/party'} class="text-center flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" >Party</Link>
                        </li>
                        <li>
                            <Link to={'/election'} class="text-center flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">Election</Link>
                        </li>
                        <li>
                            <Link to={'/conection'} class=" text-center flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" >Conection</Link>
                        </li>
                        <li>
                            <Link to={'/user'} class=" text-center flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">User</Link>
                        </li>
                        <li class=" text-center flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={handlechange}>
                            Log out
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar
