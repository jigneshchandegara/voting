import React, { useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_VOTE_PENDING, GET_VOTE_PENDING, POST_VOTE_PENDING } from '../../use/action';
import { base_url, get_voter_list } from '../../AllURL';

const User = () => {

  const [open, setOpen] = React.useState(false);
  const cardnoRef = useRef();
  const voternameRef = useRef();
  const fathernameRef = useRef();
  const sexRef = useRef();
  const birthdataRef = useRef();
  const AssemblyNoandNameRef = useRef();
  const PartNoandNameRef = useRef();
  const addressRef = useRef();
  const passwordRef = useRef();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();


  // post data
  const votercreate = () => {
    setOpen(false);
    const cardno = cardnoRef.current.value;
    const votername = voternameRef.current.value;
    const fathername = fathernameRef.current.value;
    const sex = sexRef.current.value;
    const birthdata = birthdataRef.current.value;
    const AssemblyNoandName = AssemblyNoandNameRef.current.value;
    const PartNoandName = PartNoandNameRef.current.value;
    const address = addressRef.current.value;
    const password = passwordRef.current.value;

    const date = new Date(birthdata);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;

    const voterlist = {
      cardNo: cardno,
      name: votername,
      fatherName: fathername,
      sex: sex,
      dob: formattedDate,
      assemblyNoandName: AssemblyNoandName,
      partNoandName: PartNoandName,
      address: address,
      password: password
    }
    console.log(voterlist, "voterlist")

    dispatch({ type: POST_VOTE_PENDING, payload: voterlist });
  }

  let voter = useSelector((state) => state.voterReducer.voter)
  console.log(voter, "final voter data");

  //delete data
  const voterdelete = (id) => {
    console.log(id, "voter id");
    dispatch({ type: DELETE_VOTE_PENDING, payload: id });
  }


  //get useEffect
  useEffect(() => {
    let url = base_url + get_voter_list;
    dispatch({ type: GET_VOTE_PENDING ,url })
  }, [])



  return (
    <div className="p-4 mt-16 sm:ml-64">
      <section>
        <div className='flex justify-between ' >
          <input type="search" name="search" placeholder='Entre search' className='p-1 border-2 border-indigo-300 rounded-md' />
          <Button variant="outlined" onClick={handleClickOpen}> Add voter list </Button>
        </div>
        <>
          <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">
              {"Create Election and Party "}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <form className='grid gap-4 mb-4 grid-cols-2'>
                  <div className='col-span-2 mb-2'>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">Card No</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ref={cardnoRef} placeholder="Enter Voter Card NO" required />
                  </div>
                  <div className='col-span-2 mb-2'>
                    <label class="block text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ref={voternameRef} placeholder='Enter Voter Name' required />
                  </div>
                  <div className='col-span-2 mb-2'>
                    <label class="block  text-sm font-medium text-gray-900 dark:text-white">Father Name</label>
                    <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ref={fathernameRef} placeholder="Enter Father Name" required />
                  </div>
                  <div className='col-span-2 mb-2'>
                    <label class="block  text-sm font-medium text-gray-900 dark:text-white">Sex</label>
                    <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ref={sexRef} placeholder="Enter Sex" required />
                  </div>
                  <div className='col-span-2 mb-2'>
                    <label class="block  text-sm font-medium text-gray-900 dark:text-white">Birth Data</label>
                    <input type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ref={birthdataRef} required />
                  </div>
                  <div className='col-span-2 mb-2'>
                    <label class="block  text-sm font-medium text-gray-900 dark:text-white">AssemblyNoandName</label>
                    <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ref={AssemblyNoandNameRef} placeholder="Enter AssemblyNoandName" required />
                  </div>
                  <div className='col-span-2 mb-2'>
                    <label class="block  text-sm font-medium text-gray-900 dark:text-white">PartNoandName</label>
                    <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ref={PartNoandNameRef} placeholder="Enter PartNoandName" required />
                  </div>
                  <div className='col-span-2 mb-2'>
                    <label class="block  text-sm font-medium text-gray-900 dark:text-white">Address</label>
                    <textarea id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ref={addressRef} placeholder="Enter Address"></textarea>
                  </div>
                  <div className='col-span-2 mb-2'>
                    <label class="block  text-sm font-medium text-gray-900 dark:text-white">Password </label>
                    <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ref={passwordRef} placeholder="Enter Password" required />
                  </div>
                </form>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Disagree</Button>
              <Button onClick={votercreate} autoFocus> Create </Button>
            </DialogActions>
          </Dialog>
        </>
      </section>
      <section>
        <div class="mt-4 overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-blue-400 dark:bg-blue-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  No.
                </th>
                <th scope="col" class="px-6 py-3">
                  cardNo.
                </th>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Father Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Sex
                </th>
                <th scope="col" class="px-6 py-3">
                  Birth Data
                </th>
                <th scope="col" class="px-6 py-3">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {
                voter?.map((value, index) => {
                  return (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="col" class="px-6 py-3 ">
                        {index + 1}
                      </th>
                      <td class="px-6 py-4 text-gray-600 ">
                        {value.cardNo}
                      </td>
                      <td class="px-6 py-4 text-gray-600 ">
                        {value.name}
                      </td>
                      <td class="px-6 py-4 text-gray-600 ">
                        {value.fatherName}
                      </td>
                      <td class="px-6 py-4 text-gray-600 ">
                        {value.sex}
                      </td>
                      <td class="px-6 py-4 text-gray-600 ">
                        {value.dob}
                      </td>
                      <td class="px-6 py-4 text-gray-600 ">
                        <i className="fa-solid fa-trash font-medium text-blue-600 dark:text-blue-500 hover:text-red-600" onClick={() => voterdelete(value._id)}></i>
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

export default User