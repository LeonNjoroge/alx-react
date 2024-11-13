import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import closeicon from '../assets/close-icon.png';
import NotificationItem from '../NotificationItem/NotificationItem';
import { NotificationItemShape } from './NotificationItemShape';



const Notifications = ({displayDrawer, listNotifications}) =>{

    const handleButtonClick = () =>{
        console.log('Close button has been clicked')
    }


    return(
        <div className='notificationsWrapper'>
        
        <div className='menuItem'>Your Notifications</div>


        {displayDrawer ? (
  <div className="Notifications">
    <div>
      <ul style={{ marginTop: '0px', marginBottom: '2px' }}>
        {listNotifications.length === 0 ? (
          <p>No new notification for now</p>
        ) : (
          <>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '5px',
              }}
            >
              <p>Here is the list of notifications</p>
              <button
                style={{ background: 'none', border: 'none' }}
                aria-label="close"
                onClick={handleButtonClick}
              >
                <img
                  src={closeicon}
                  alt="Close"
                  style={{ width: '14px', height: '14px' }}
                />
              </button>
            </div>
            {listNotifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                type={notification.type}
                value={notification.value}
                html={notification.html}
              />
            ))}
          </>
        )}
      </ul>
    </div>
  </div>
) : (
  <div></div>
)}
        </div>
        
    );
}

Notifications.propTypes = {
    displayDrawer : PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
}
Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    
}

export default Notifications;