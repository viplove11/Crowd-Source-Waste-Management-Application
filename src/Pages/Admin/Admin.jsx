import React, { useState } from 'react'
import AdminLogin from '../../components/Admin Login/AdminLogin';
import AdminData from '../../components/Admin Data/AdminData';

const Admin = () => {

    const [login, setLogin] = useState(false);


    return (
        <div className="admin-div">
        {login ? <AdminData/> : <AdminLogin login={ login } setLogin={ setLogin } />}
        </div>
  )
}

export default Admin