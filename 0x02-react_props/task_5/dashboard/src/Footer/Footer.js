import './Footer.css';
import React from 'react';
import {getFullYear, getFooterCopy} from '../utils/utils.js';

function Footer (){
    let isIndex = true;
    return(
        <div>
             {/* Footer section */}
            <div className='App-footer'>
                <p>Copyright {getFullYear()} - {getFooterCopy(isIndex)}</p>
            
            </div>
        </div>
    );
}

export default Footer;