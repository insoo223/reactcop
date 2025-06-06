import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [users, setUsers] = useState([]);
    const MGURI = 'https://2d84-118-39-108-176.ngrok-free.app';
    useEffect ( () => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get(`${MGURI}/api/users`, { headers: { "ngrok-skip-browser-warning": "true" } });

                //const res = await axios.get ('http://localhost:5000/api/users');
                //const res = await axios.get ('http://172.30.1.95:5000/api/users');
                //const res = await axios.get ('http://192.168.0.64:5000/api/users');
                setUsers(res.data);
            } catch (err) {
                console.log ('Error fetching users: ', err);
            }
        };

        fetchUsers();
    }, []);

  return (
    <div> 
        <h1>User List</h1>
        <ul>
            { users.map (user => (
                <li key={user._id}>
                    {user.name}, {user.email}
                </li>
            ))}
        </ul>
    </div>
  );
}

export default App;
