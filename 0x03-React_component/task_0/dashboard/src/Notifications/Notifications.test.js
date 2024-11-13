/*

import React from "react";
import Notifications from './Notifications';
import { shallow} from 'enzyme';


describe('Notification Tests',()=>{
    it('test that Notifications renders without crashing', ()=>{
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toBe(true);
    });
    it('verify that Notifications renders three list items', ()=>{
        const wrapper = shallow(<Notifications displayDrawer={true} />);
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



*/

import React from "react";
import Notifications from './Notifications';
import { shallow } from 'enzyme';

describe('Notification Tests', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders correctly with an empty listNotifications', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
        // Check that there are no NotificationItems
        expect(wrapper.find('NotificationItem').length).toBe(0);
        // Check that "No new notification for now" is displayed
        expect(wrapper.find('.Notifications p').text()).toBe('No new notification for now');
    });

    it('renders correctly when listNotifications is not passed', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        // Check that there are no NotificationItems
        expect(wrapper.find('NotificationItem').length).toBe(0);
        // Check that "No new notification for now" is displayed
        expect(wrapper.find('.Notifications p').text()).toBe('No new notification for now');
    });

    it('renders the correct number of NotificationItem elements when listNotifications has items', () => {
        const testNotifications = [
            { id: 1, type: 'default', value: 'New course available' },
            { id: 2, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong>' } },
            { id: 3, type: 'urgent', value: 'New resume available' },
        ];
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={testNotifications} />);
        // Check that the number of NotificationItem elements matches the number of notifications
        expect(wrapper.find('NotificationItem').length).toBe(testNotifications.length);
    });

    it('does not display "Here is the list of notifications" when listNotifications is empty', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
        // Check that the "No new notification for now" message is shown
        expect(wrapper.find('.Notifications p').text()).toBe('No new notification for now');
        // Check that "Here is the list of notifications" is not displayed
        expect(wrapper.findWhere(node => node.text() === 'Here is the list of notifications').exists()).toBe(false);
    });

    it('renders "Here is the list of notifications" when listNotifications has items', () => {
        const testNotifications = [
            { id: 1, type: 'default', value: 'New course available' },
            { id: 2, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong>' } },
        ];
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={testNotifications} />);
        // Check that the message "Here is the list of notifications" is displayed
        expect(wrapper.find('.Notifications p').text()).toBe('Here is the list of notifications');
    });

    it('menu item is displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        const menuItem = wrapper.find('.menuItem');
        // Check that the menu item is displayed
        expect(menuItem.exists()).toBe(true);
    });

    it('Notifications div is not displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        const notificationDiv = wrapper.find('div.Notifications');
        // Check that the Notifications div is not displayed
        expect(notificationDiv.exists()).toBe(false);
    });

    it('menu item is displayed when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        const menuItem = wrapper.find('.menuItem');
        // Check that the menu item is displayed
        expect(menuItem.exists()).toBe(true);
    });

    it('Notifications div is displayed when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        const notificationDiv = wrapper.find('div.Notifications');
        // Check that the Notifications div is displayed
        expect(notificationDiv.exists()).toBe(true);
    });
});