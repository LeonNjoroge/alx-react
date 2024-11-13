import React from "react";
import Notifications from './Notifications';
import { shallow} from 'enzyme';


describe('Notification Tests',()=>{
    it('test that Notifications renders without crashing', ()=>{
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toBe(true);
    });
    it('verify that Notifications renders three list items', ()=>{
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        const NotificationItems = wrapper.find('NotificationItem');
        expect(NotificationItems.length).toBe(3);
    });
    it('verify that the first NotificationItem element renders the right html', ()=>{
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        const firstNotificationItem = wrapper.find('NotificationItem').at(0).dive().html();
        expect(firstNotificationItem).toContain('<li class=\"default\" data-notification-type=\"default\">New course available</li>');
    });
    it('verify that Notifications renders the text "Here is the list of notifications"', ()=>{
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        const text = wrapper.find('.Notifications p').text();
        expect(text).toBe('Here is the list of notifications');
    });
    it('check that the menu item is being displayed when "displayDrawer" is "false"', ()=>{
        const wrapper = shallow(<Notifications displayDrawer={false}/>);
        const menuItem = wrapper.find('.menuItem');
        expect(menuItem.exists()).toBe(true);
    });
    it('check that the "div.Notifications" is not being displayed when "displayDrawer" is "false"', ()=>{
        const wrapper = shallow(<Notifications displayDrawer={false}/>);
        const Notification = wrapper.find('div.Notifications');
        expect(Notification.exists()).toBe(false);
    });
    it('check that the menu item is being displayed when "displayDrawer" is "true"', ()=>{
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        const menuItem = wrapper.find('.menuItem');
        expect(menuItem.exists()).toBe(true);
    });
    it('check that the "div.Notifications" is not being displayed when "displayDrawer" is "true"', ()=>{
        const wrapper = shallow(<Notifications displayDrawer={false}/>);
        const Notification = wrapper.find('div.Notifications');
        expect(Notification.exists()).toBe(false);
    });
});