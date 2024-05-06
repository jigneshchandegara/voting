import React, { useEffect, useRef, useState } from 'react'
// import bjp from '../../image/bharatiya-janata-party.png';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { GET_Party_PENDING, POST_Party_PENDING } from '../../use/action';

const Party = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  let partyname = useRef();
  let shortcode = useRef();
  let [file, setFile] = useState();

  let filedata = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  let dispatch = useDispatch()


  let formdata = new FormData();
  formdata.append("party_name", partyname.current.value);
  formdata.append("party_logo", file);
  formdata.append("short_code", shortcode.current.value);

  console.log(formdata, "submintdata");

  // let option = {
  //   header: {
  //     "Content-Type": "multipart/form-data",
  //   },
  // };

  useEffect(() => {
    dispatch({ type: GET_Party_PENDING });
  })

  let party = useSelector((state) => state.userReducer)
  console.log(party, "final data");

  let partysubmin = () => {
    dispatch({ type: POST_Party_PENDING, payload: formdata });
  }

  return (
    <>
      <div class="p-4 mt-16 sm:ml-64">
        <section>
          <div className='flex justify-between ' >
            <input type="search" name="search" placeholder='Entre search' className='p-1 border-2 border-indigo-300 rounded-md' />
            <Button variant="outlined" onClick={handleClickOpen}> Add party list </Button>
          </div>
          <>
            <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
              <DialogTitle id="alert-dialog-title">
                {"create party list"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <div className='grid gap-4 mb-4 grid-cols-2'>
                    <div className='col-span-2 mb-2'>
                      <label class="block  text-sm font-medium text-gray-900 dark:text-white">party name :-</label>
                      <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Party name" ref={partyname} required />
                    </div>
                    <div className='col-span-2 mb-2'>
                      <label class="block text-sm font-medium text-gray-900 dark:text-white">party logo :-</label>
                      <input type="file" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={filedata} required />
                    </div>
                    <div className='col-span-2 mb-2'>
                      <label class="block text-sm font-medium text-gray-900 dark:text-white">party short code :-</label>
                      <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Party short code" ref={shortcode} required />
                    </div>
                    <button type='submit' onClick={partysubmin}></button>
                  </div>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose}  > Add </Button>
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
                    party logo
                  </th>
                  <th scope="col" class="px-6 py-3">
                    party_name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    short_code
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  party.party?.map((value, index) => {
                    return (
                      <>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th scope="col" class="px-6 py-3 ">
                            {index + 1}
                          </th>
                          <td class="px-6 py-4 text-gray-600 ">
                            <img src={value.party_logo} className='w-16 h-16' />
                          </td>
                          <td class="px-6 py-4 text-gray-600 ">
                            {value.party_name}
                          </td>
                          <td class="px-6 py-4 text-gray-600 ">
                            {value.short_code}
                          </td>
                        </tr>
                      </>
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

export default Party