import React from 'react';
import './row.css'

const Row = ({ leftRow,rightRow}) => {
    return(
        <div className="main-content_block">
        {leftRow}
        {rightRow}
        </div>
    )
}

export default Row;