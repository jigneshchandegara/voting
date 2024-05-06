import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const User = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div class="p-4 mt-16 sm:ml-64">
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
                <div className='grid gap-4 mb-4 grid-cols-2'>
                  <div className='col-span-2 mb-2'>
                    <label class="block  text-sm font-medium text-gray-900 dark:text-white">Card No</label>
                    <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Voter Card NO" required />
                  </div>
                  <div className='col-span-2 mb-2'>
                    <label class="block text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter Voter Name' required />
                  </div>
                  <div className='col-span-2 mb-2'>
                    <label class="block  text-sm font-medium text-gray-900 dark:text-white">Father Name</label>
                    <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Father Name" required />
                  </div>
                  <div className='col-span-2 mb-2'>
                    <label class="block  text-sm font-medium text-gray-900 dark:text-white">Sex</label>
                    <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Sex" required />
                  </div>
                  <div className='col-span-2 mb-2'>
                    <label class="block  text-sm font-medium text-gray-900 dark:text-white">Birth Data</label>
                    <input type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  </div>
                  <div className='col-span-2 mb-2'>
                    <label class="block  text-sm font-medium text-gray-900 dark:text-white">AssemblyNoandName</label>
                    <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter AssemblyNoandName" required />
                  </div>
                  <div className='col-span-2 mb-2'>
                    <label class="block  text-sm font-medium text-gray-900 dark:text-white">PartNoandName</label>
                    <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter PartNoandName" required />
                  </div>
                  <div className='col-span-2 mb-2'>
                    <label class="block  text-sm font-medium text-gray-900 dark:text-white">Address</label>
                    <textarea id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Address"></textarea>
                  </div>
                  <div className='col-span-2 mb-2'>
                    <label class="block  text-sm font-medium text-gray-900 dark:text-white">Password </label>
                    <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter PartNoandName" required />
                  </div>
                </div>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Disagree</Button>
              <Button onClick={handleClose} autoFocus> Create </Button>
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
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="col" class="px-6 py-3 ">
                  1
                </th>
                <td class="px-6 py-4 text-gray-600 ">
                  466978
                </td>
                <td class="px-6 py-4 text-gray-600 ">
                  jignesh
                </td>
                <td class="px-6 py-4 text-gray-600 ">
                  govindbhai
                </td>
                <td class="px-6 py-4 text-gray-600 ">
                  male
                </td>
                <td class="px-6 py-4 text-gray-600 ">
                  04/03/11
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="col" class="px-6 py-3 ">
                  2
                </th>
                <td class="px-6 py-4 text-gray-600 ">
                  466978
                </td>
                <td class="px-6 py-4 text-gray-600 ">
                  jignesh
                </td>
                <td class="px-6 py-4 text-gray-600 ">
                  govindbhai
                </td>
                <td class="px-6 py-4 text-gray-600 ">
                  male
                </td>
                <td class="px-6 py-4 text-gray-600 ">
                  04/03/11
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default User