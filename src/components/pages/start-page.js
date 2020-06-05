import React from 'react';
import { Link } from 'react-router-dom'

const StartPage = ( ) =>{



    return <div>
                <ul>
                    <li >
                        <Link to="/people"><div>GOGO</div></Link>
                    </li>
                    <li >
                        <Link to="/planets">Planets</Link>
                    </li>
                    <li >
                        <Link to="/starships">Starships</Link>
                    </li>
                </ul>
    </div>
}

export default StartPage