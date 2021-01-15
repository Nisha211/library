import React from 'react';
import {Link} from 'react-router-dom';

function Navi()
{
    return(
        <div>
           
            <ul className="nav-links">
                <Link to='/login' className="btn btn-success">Login
                </Link>
            </ul>
        </div>
    );
}
export default Navi;