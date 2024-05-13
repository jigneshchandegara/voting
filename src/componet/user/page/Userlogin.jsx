import React, {  useRef, useState } from 'react'
import logo from '../../../image/election-commission-of-india.jpg';
import axios from 'axios';
import {  useSelector } from 'react-redux';



const Userlogin = () => {

    let cardno = useRef();
    let password = useRef();

    const [loading, setLoading] = useState(false);

    let voter = useSelector((state) => state.voterReducer.voter)
    // console.log(voter , "voter login data");

    const userlogin = async () => {

        setLoading(true);
        let userlogin = {
            cardNo: cardno.current.value,
            password: password.current.value
        };
        console.log(userlogin, "login");
        if (cardno.current.value === "" || password.current.value === "") {
            setLoading(false);
            alert("Please complete all fields");
        } else {
            try {
                let res = await axios.post(
                    "http://13.127.211.205:8000/v1/login/user",
                    userlogin
                );
                if (res.status === 200) {
                    if (!voter.find((value) => value.user?.cardNo === userlogin.cardNo)) {
                        localStorage.setItem("role", "user");
                        localStorage.setItem("userData", JSON.stringify(res.data.data));
                        alert("Login Successfully")
                        setTimeout(() => {
                            window.location.href = "/voter";
                        }, 600);
                        cardno.current.value = "";
                        password.current.value = "";
                    } else {
                        setLoading(false);
                        alert("You have already voted")
                        cardno.current.value = "";
                        password.current.value = "";
                    }
                } else {
                    setLoading(false);
                    alert("Please check VoterID and password");
                    cardno.current.value = "";
                    password.current.value = "";
                }
            } catch (error) {
                setLoading(false);
                alert("Please check VoterID and password");
                console.error(error);
            }
        }
    };

    const siterolechange = (e) => {
        e.preventDefault();
        window.location.href = "/adminLogin";
    }

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
                                        User Login
                                    </h1>
                                    <div class="space-y-4 md:space-y-6">
                                        <div>
                                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Crad No</label>
                                            <input type="text" name="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter card No" ref={cardno} required />
                                        </div>
                                        <div>
                                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                            <input type="password" name="password" placeholder="Enter your password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ref={password} required />
                                        </div>
                                        <button type="submit" class="w-full text-white  bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={userlogin}>submit</button>
                                        <button class="w-full text-white  bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={siterolechange}>Admin login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Userlogin









