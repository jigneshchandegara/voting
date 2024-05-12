import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { POST_VOTING_PENDING } from '../../../use/action';


const Voter = () => {

  let connection = useSelector((state) => state.connectionReducer.connection);
  console.log(connection, "connection final data");

  const getUser = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    return userData;
  };
  let user = getUser();

  const [voterid, setvoterid] = useState(null);
  const [voterData, setvoterData] = useState(null);
  let dispatch = useDispatch();

  const voterselectedparty = (id, data) => {
    setvoterid(id);
    setvoterData(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let finaldata = {
      user: user?._id,
      party: voterData?._id,
      election: voterData?.election,
    };
    console.log(finaldata, "voting");
    dispatch({ type: POST_VOTING_PENDING, payload: finaldata });

    setvoterid(null);
    setvoterData(null);
  };
  return (
    <div class="p-4 mt-16 sm:ml-64">
      <button class="p-2 m-2 bg-blue-500 " onClick={handleSubmit}> Submit</button>
      <section>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-blue-400 dark:bg-blue-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No.
                </th>
                <th scope="col" className="px-6 py-3">
                  Party logo
                </th>
                <th scope="col" className="px-6 py-3">
                  Election
                </th>
                <th scope="col" className="px-6 py-3">
                  Party Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Select
                </th>
              </tr>
            </thead>
            <tbody>
              {
                connection?.map((value, index) => {
                  return (
                    <tr key={value._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="col" className="px-6 py-3">
                        {index + 1}
                      </th>
                      <td className="px-6 py-4 text-gray-600">
                        <img src={value?.party?.party_logo} alt="Party Logo" className="w-16 h-16" />
                      </td>
                      <td className="px-6 py-4 text-gray-600">{value?.election?.election_name}</td>
                      <td className="px-6 py-4 text-gray-600">{value?.party?.party_name}</td>
                      <td className="px-6 py-4 text-gray-600" >
                        <input type="radio" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" onClick={() => voterselectedparty(value._id, value)} checked={voterid === value._id} />
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
  )
}

export default Voter