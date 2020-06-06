import React from 'react';
import { Link } from 'react-router-dom'

import './start-page.css'

const StartPage = ( ) =>{

    return <div className="start-page_block">
                <ul className="start-page_list">
                    <li>
                        <Link to="/people">
                            <div className="list-block_item">
                                <span className="list-block_name">GOGO</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/people">
                            <div className="list-block_item">
                                <span className="list-block_name">GOGO</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/people">
                            <div className="list-block_item">
                                <span className="list-block_name">GOGO</span>
                            </div>
                        </Link>
                    </li>
                </ul>
    </div>
}

export default StartPage