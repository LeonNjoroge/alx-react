import React from 'react';
import './Notifications.css';
import closeicon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from '../NotificationItem/NotificationItem';
import PropTypes from 'prop-types';


const Notifications = ({displayDrawer}) =>{

    const handleButtonClick = () =>{
        console.log('Close button has been clicked')
    }


    return(
        <>
        <div className='menuItem'>Your Notifications</div>
        <div className="Notifications">
            <div style={{display:'flex', justifyContent:'space-between', padding:'5px'}}>
                <p>Here is the list of notifications</p>
                <button style={{background:'none',border:'none'}} aria-label='close' onClick={handleButtonClick}>
                    <img src={closeicon} alt='Close' style={{ width: '16px', height: '16px' }} />
                </button>
            </div>
            <div>
                <ul style={{marginTop:'0px', marginBottom: '2px'}}>
                    <NotificationItem type='default' value='New course available'/>
                    <NotificationItem type='urgent' value='New resume available'/>
                    <NotificationItem type='urgent' html= {getLatestNotification()}/>
                    
                    
                </ul>
            </div>

        </div>
        </>
    );
}

NotificationItem.propTypes = {
    displayDrawer : PropTypes.bool
}
NotificationItem.defaultProps = {
    displayDrawer: false
}

export default Notifications;