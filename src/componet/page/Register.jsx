import React from 'react'
import logo from '../../image/election-commission-of-india.jpg';


const Register = () => {
    return (
        <>
            <div className='flex'>
                <div className='w-1/2 h-screen bg-blue-800 relative'>
                    <div className=' absolute top-1/3 right-1/3  flex'>
                        <img src={logo} alt="" className='w-20 h-20 ' />
                        <div className='text-white m-2'>
                            <h4>भारत निर्वाचन आयोग</h4>
                            <h4>Election Commission of India</h4>
                            <p>Online Voting System</p>
                        </div>
                    </div>

                </div>
                <div className='w-1/2 h-screen bg-zinc-200'>
                    <section class="bg-gray-50 dark:bg-gray-900">
                        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1 class="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                        Admin Register
                                    </h1>
                                    <form class="space-y-4 md:space-y-6" action="#">
                                        <div>
                                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                                            <input type="email" name="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" required="" />
                                        </div>
                                        <div>
                                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                            <input type="password" name="password" id="password" placeholder="Enter your password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                        </div>

                                        <button type="submit" class="w-full text-white  bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">submit
                                        </button>
                                        <p>Login</p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Register