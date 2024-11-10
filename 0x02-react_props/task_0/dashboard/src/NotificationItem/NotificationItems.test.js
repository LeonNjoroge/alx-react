import React from "react";
import NotificationItem from "./NotificationItem";
import {shallow} from 'enzyme';

describe('NotificationItem component test', ()=>{
    it('NotificationItem Renders without crashing', ()=>{
        const wrapper = shallow(< NotificationItem />);
        expect(wrapper.exists()).toBe(true);
    });
    it('Verify that by passing dummy "type" and "value" props', ()=>{
        const wrapper = shallow(<NotificationItem type='default' value='test' />);
        expect(wrapper.text()).toBe('test');
    });
    it('Verify that by passing a dummy "html" prop, it renders the correct html', ()=>{
        const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }}/>);
        expect(wrapper.html()).toContain('<u>test</u>');
    });
});