import React from "react";
import Notifications from './Notifications';
import { shallow} from 'enzyme';


describe('Notification Tests',()=>{
    it('test that Notifications renders without crashing', ()=>{
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toBe(true);
    });
    it('verify that Notifications renders three list items', ()=>{
        const wrapper = shallow(<Notifications />);
        const NotificationItems = wrapper.find('NotificationItem');
        expect(NotificationItems.length).toBe(3);
    });
    it('verify that the first NotificationItem element renders the right html', ()=>{
        const wrapper = shallow(<Notifications />);
        const firstNotificationItem = wrapper.find('NotificationItem').at(0).dive().html();
        expect(firstNotificationItem).toContain('<li class=\"default\" data-notification-type=\"default\">New course available</li>');
    });
    it('verify that Notifications renders the text "Here is the list of notifications"', ()=>{
        const wrapper = shallow(<Notifications />);
        const text = wrapper.find('.Notifications p').text();
        expect(text).toBe('Here is the list of notifications');
    });
});