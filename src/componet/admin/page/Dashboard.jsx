import React from 'react'
import bjp from '../../../image/bharatiya-janata-party.png';
import { useSelector } from 'react-redux';

const Dashboard = () => {

    let party = useSelector((state) => state.partyReducer.party);
    let voter = useSelector((state) => state.voterReducer.voter);
    let election = useSelector((state) => state.electionReducer.election);
    let votingdata = useSelector((state) => state.votingReducer.voting)


    function calculatePartyVotes(votingdata) {
        const partyVotes = {}
        const votedEntries = votingdata.filter(
            (value) => value.party !== null && value.election !== null
        );
        votedEntries.forEach((value) => {
            const { party } = value;
            if (party.party_name in partyVotes) {
                partyVotes[party.party_name]++;
            } else {
                partyVotes[party.party_name] = 1;
            }
        });
        return partyVotes;
    }

    const partyVotes = calculatePartyVotes(votingdata)

    let count = partyVotes[party.party_name] || 0 ;

    return (
        <>
            <div class="p-4 mt-16 sm:ml-64 ">
                <section>
                    <div className='flex justify-between'>
                        <div class="w-80  p-6 m-6 text-center  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{party.length}</h5>
                            <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">Party No.</p>
                        </div>
                        <div class="w-80  p-6 m-6 text-center  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{voter.length}</h5>
                            <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">Voter No.</p>
                        </div>
                        <div class="w-80  p-6 m-6 text-center  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{votingdata.length}</h5>
                            <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">Voting No.</p>
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
                                {
                                    party?.map((value, index) => {
                                        return (
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-3 ">
                                                    {index + 1}
                                                </th>
                                                <td class="px-6 py-4 text-gray-600 ">
                                                    <img src={value.party_logo} className='w-16 h-16 ' alt="bjp" />
                                                </td>
                                                <td class="px-6 py-4 text-gray-600 ">
                                                    {value.party_name}
                                                </td>
                                                <td class="px-6 py-4 text-gray-600 ">
                                                    {value.short_code}
                                                </td>
                                                <td class="px-6 py-4 text-gray-600 ">
                                                    {count}
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Dashboard


