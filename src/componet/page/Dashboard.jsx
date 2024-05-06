import React from 'react'
import bjp from '../../image/bharatiya-janata-party.png';

const Dashboard = () => {
    return (
        <>
            <div class="p-4 mt-16 sm:ml-64 ">
                <section>
                    <div className='flex justify-between'>
                        <div class="w-80  p-6 m-6 text-center  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">6</h5>
                            <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">Party No.</p>
                        </div>
                        <div class="w-80  p-6 m-6 text-center  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">6</h5>
                            <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">Party No.</p>
                        </div>
                        <div class="w-80  p-6 m-6 text-center  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">6</h5>
                            <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">Party No.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="relative mt-4 overflow-x-auto">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-blue-400 dark:bg-blue-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        No.
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        party logo
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        party name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        short code
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        voting No
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-3 ">
                                        1
                                    </th>
                                    <td  class="px-6 py-4 text-gray-600 ">
                                        <img src={bjp} className='w-16 h-16 ' alt="bjp" />
                                    </td>
                                    <td  class="px-6 py-4 text-gray-600 ">
                                        Bharatiya Janata Party
                                    </td>
                                    <td  class="px-6 py-4 text-gray-600 ">
                                        bjp
                                    </td>
                                    <td  class="px-6 py-4 text-gray-600 ">
                                        5
                                    </td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-3 ">
                                        2
                                    </th>
                                    <td  class="px-6 py-4 text-gray-600 ">
                                        <img src={bjp} class='w-16 h-16' alt="bjp" />
                                    </td>
                                    <td  class="px-6 py-4 text-gray-600 ">
                                        Bharatiya Janata Party
                                    </td>
                                    <td  class="px-6 py-4 text-gray-600 ">
                                        bjp
                                    </td>
                                    <td  class="px-6 py-4 text-gray-600 ">
                                        5
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Dashboard


