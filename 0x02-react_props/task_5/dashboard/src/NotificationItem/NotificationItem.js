import React from "react";
import './NotificationItem.css';
import PropTypes from "prop-types";

function NotificationItem({type, html, value}){
    const className = type === 'urgent' ? 'urgent' : 'default';
    return(
        <li className={className} data-notification-type={type}>
        {html ? <span dangerouslySetInnerHTML={ html} /> : value}
    </li>
    );
}


NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
};

NotificationItem.defaultProps = {
    type: 'default',
    value: '',
    html: null,
};

export default NotificationItem;

