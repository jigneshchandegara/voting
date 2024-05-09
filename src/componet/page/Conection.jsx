import React, { useEffect, useRef } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_connection_PENDING, GET_ELECTION_PENDING, GET_Party_PENDING, GET_connection_PENDING, POST_ELECTION_PENDING, POST_Party_PENDING, POST_connection_PENDING } from '../../use/action';
import { base_url, get_connection_list, get_election_list, get_party_list } from '../../AllURL';


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

  // connection election and 
  useEffect(() => {
    const electiondata = base_url + get_election_list;
    const partydata = base_url + get_party_list;
    dispatch({ type: GET_ELECTION_PENDING, payload: electiondata });
    dispatch({ type: GET_Party_PENDING, payload: partydata });
  }, [])

  let election = useSelector((state) => state.electionReducer.election)
  console.log(election, "election final data");

  let party = useSelector((state) => state.partyReducer.party);
  console.log(party, "party data");


  //poat data
  const Conectiondata = () => {
    setOpen(false);
    let connectdata = {
      election: electionname.current.value,
      party: partyname.current.value,
    }
    console.log(connectdata, "connect data");
    dispatch({ type: POST_connection_PENDING, payload: connectdata })
  }

  //get data
  let connection = useSelector((state) => state.connectionReducer.connection);
  console.log(connection, "connection final data");

  //delete data
  const connectiondelete = (id) => {
    console.log(id, "id ");
    dispatch({ type: DELETE_connection_PENDING , payload : id})
  }

  useEffect(() => {
    let url = base_url + get_connection_list;
    dispatch({ type: GET_connection_PENDING, url })
  }, [])

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
                <th scope="col" class="px-6 py-3">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {
                connection?.map((value, index) => {
                  return (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="col" class="px-6 py-3 ">
                          {index + 1}
                      </th>
                      <td class="px-6 py-4 text-gray-600 ">
                          {value.election?.election_name}
                      </td>
                      <td class="px-6 py-4 text-gray-600 ">
                          {value.party?.party_name}
                      </td>
                      <td class="px-6 py-4 text-gray-600 ">
                        <i className="fa-solid fa-trash font-medium text-blue-600 dark:text-blue-500 hover:text-red-600" onClick={() => connectiondelete(value._id)}></i>
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

export default Conection