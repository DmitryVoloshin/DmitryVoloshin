import React from 'react';
import { Link } from 'react-router-dom'

import './start-page.css'

const StartPage = ( ) =>{

    return <div className="start-page_block">
                <ul className="start-page_list">
                    <li>
                        <Link to="/people">
                            <div className="list-block_item character-item">
                                <span className="list-block_name">CHARACTER</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/starships">
                            <div className="list-block_item starship-item">
                                <span className="list-block_name">STARSHIP</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/planets">
                            <div className="list-block_item planet-item">
                                <span className="list-block_name">PLANET</span>
                            </div>
                        </Link>
                    </li>
                </ul>
    </div>
}

export default StartPage