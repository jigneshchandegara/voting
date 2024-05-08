import React, { useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_Party_PENDING, GET_Party_PENDING, POST_Party_PENDING } from '../../use/action';

const Party = () => {
  const [open, setOpen] = useState(false);
  const partyname = useRef();
  const shortcode = useRef();
  const [file, setFile] = useState();
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const filedata = (e) => {
    setFile(e.target.files[0]);
  };

  const partycreate = (e) => {
    e.preventDefault();
    const party_name = partyname.current.value;
    const short_code = shortcode.current.value;
    const formdata = new FormData();
    formdata.append("party_name", party_name);
    formdata.append("party_logo", file);
    formdata.append("short_code", short_code);
    console.log(party_name);
    console.log(file);
    console.log(short_code);
    console.log(formdata);
    dispatch({ type: POST_Party_PENDING, payload: formdata });
  }

  let party = useSelector((state) => state.userReducer);

  const handledelete = (id) => {
    console.log(id , "delete id");
    dispatch({ type: DELETE_Party_PENDING, payload: id })
  }

  useEffect(() => {
    dispatch({ type: GET_Party_PENDING });
  }, []);

  return (
    <>
      <div className="p-4 mt-16 sm:ml-64">
        <section>
          <div className='flex justify-between'>
            <input type="search" name="search" placeholder='Enter search' className='p-1 border-2 border-indigo-300 rounded-md' />
            <Button variant="outlined" onClick={handleClickOpen}> Add party list </Button>
          </div>
          <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">
              {"Create party list"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <form className='grid gap-4 mb-4 grid-cols-2'>
                  <div className='col-span-2 mb-2'>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">Party name:</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Party name" ref={partyname} required />
                  </div>
                  <div className='col-span-2 mb-2'>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">Party logo:</label>
                    <input type="file" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={filedata} required />
                  </div>
                  <div className='col-span-2 mb-2'>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">Party short code:</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Party short code" ref={shortcode} required />
                  </div>
                </form>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Disagree</Button>
              <Button onClick={partycreate} autoFocus> Add </Button>
            </DialogActions>
          </Dialog>
        </section>
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
                    Party name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Short code
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {party.party.data?.map((value, index) => (
                  <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="col" className="px-6 py-3">
                      {index + 1}
                    </th>
                    <td className="px-6 py-4 text-gray-600">
                      <img src={value.party_logo} alt="Party Logo" className="w-16 h-16" />
                    </td>
                    <td className="px-6 py-4 text-gray-600">{value.party_name}</td>
                    <td className="px-6 py-4 text-gray-600">{value.short_code}</td>
                    <td className="px-6 py-4 text-gray-600">
                      <button>
                        <i className="fa-solid fa-trash font-medium text-blue-600 dark:text-blue-500 hover:text-red-600" onClick={() => handledelete(value._id)}></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  )
}

export default Party;
