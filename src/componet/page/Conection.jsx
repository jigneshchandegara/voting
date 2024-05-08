import React, { useEffect, useRef } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { POST_ELECTION_PENDING, POST_Party_PENDING, POST_connection_PENDING } from '../../use/action';


const Conection = () => {
  const [open, setOpen] = React.useState(false);
  let electionname = useRef();
  let partyname = useRef();

  let dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let election = useSelector((state) => state.electionReducer.election)
  console.log(election, "election final data");

  let party = useSelector((state) => state.userReducer.party);
  console.log(party, "party data");

 
  //poat data
  const Conectiondata = () => {
    setOpen(false);
    let connectdata = {
      party: electionname.current.value,
      election: partyname.current.value,
    }
    console.log(connectdata, "connect data");
    dispatch({ type: POST_connection_PENDING, payload: connectdata })
  }

  return (
    <div class="p-4 mt-16 sm:ml-64">
      <section>
        <>
          <Button variant="outlined" onClick={handleClickOpen}> Create Election and Party </Button>
          <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">
              {"Create Election and Party "}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <div className='grid gap-4 mb-4 grid-cols-2'>
                  {/* <form class="max-w-sm mx-auto"> */}
                  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selection Election Name</label>
                  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ref={electionname}>
                    {
                      election?.map((value, index) => {
                        return (
                          <option className='align-middle' key={index} value={value._id} >{value.election_name}</option>
                        )
                      })
                    }
                  </select>
                  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selection Party Name</label>
                  <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ref={partyname}>
                    {
                      party?.map((value, index) => {
                        return (
                          <option className='align-middle' key={index} value={value._id} >{value.party_name}</option>
                        )
                      })
                    }
                  </select>
                  {/* </form> */}

                </div>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Disagree</Button>
              <Button onClick={Conectiondata} autoFocus> Create </Button>
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
                  Election Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Party Name
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="col" class="px-6 py-3 ">
                  1
                </th>
                <td class="px-6 py-4 text-gray-600 ">
                  PM Election
                </td>
                <td class="px-6 py-4 text-gray-600 ">
                  BJP
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="col" class="px-6 py-3 ">
                  2
                </th>
                <td class="px-6 py-4 text-gray-600 ">
                  PM Election
                </td>
                <td class="px-6 py-4 text-gray-600 ">
                  APP
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="col" class="px-6 py-3 ">
                  3
                </th>
                <td class="px-6 py-4 text-gray-600 ">
                  PM Election
                </td>
                <td class="px-6 py-4 text-gray-600 ">
                  SP
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="col" class="px-6 py-3 ">
                  4
                </th>
                <td class="px-6 py-4 text-gray-600 ">
                  CM Election
                </td>
                <td class="px-6 py-4 text-gray-600 ">
                  BJP
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default Conection