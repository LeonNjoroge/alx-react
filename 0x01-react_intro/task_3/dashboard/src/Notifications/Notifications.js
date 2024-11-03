import React from 'react';
import './Notifications.css';
import closeicon from './close-icon.png';
import { getLatestNotification } from '../utils/utils';


const Notifications = () =>{

    const handleButtonClick = () =>{
        console.log('Close button has been clicked')
    }


    return(
        <div className="Notifications">
            <div style={{display:'flex', justifyContent:'space-between', padding:'5px'}}>
                <p>Here is the list of notifications</p>
                <button style={{background:'none',border:'none'}} aria-label='close' onClick={handleButtonClick}>
                    <img src={closeicon} alt='Close' style={{ width: '16px', height: '16px' }} />
                </button>
            </div>
            <div>
                <ul style={{marginTop:'0px', marginBottom: '2px'}}>
                    <li data-priority='default'>New course available</li>
                    <li data-priority='urgent'>New resume available</li>
                    <li data-priority='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
                </ul>
            </div>

        </div>
    );
}


export default Notifications;