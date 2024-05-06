import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Login from './componet/page/Login';
// import Register from './componet/page/Register';
import Dashboard from './componet/page/Dashboard';
import Party from './componet/page/Party';
import Election from './componet/page/Election';
import Conection from './componet/page/Conection';
import User from './componet/page/User';
import Sidebar from './componet/sidebar/Sidebar';


function App() {

    const location = useLocation();

    const isLoginPage = location.pathname === "/";

    return (
        <>
            {/* <Login /> */}
            {/* <Register/> */}
            {/* <Sidebar/> */}
            {!isLoginPage && <Sidebar />}

            {!isLoginPage &&
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/party" element={<Party />} />
                    <Route path="/election" element={<Election />} />
                    <Route path="/conection" element={<Conection />} />
                    <Route path="/user" element={<User />} />
                </Routes>
            }

            {isLoginPage && (
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
            )}
        </>

    );
}

export default App;
