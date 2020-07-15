import React from 'react';


import './login-header.css'

const LoginHeader = ({ isLoggedIn }) =>{



        if(isLoggedIn){
            return <h2>hey</h2>
        }
    return(
                  <h3>by</h3>
            // <ul className="login-header_list">
            // <li className="login-header_item">
            //         {/* <Link to="/login/">Login</Link> */}sss
            // </li>
            // <li className="login-header_item">
            //         item?
            // </li>
            // </ul>
)



}

export default LoginHeader



