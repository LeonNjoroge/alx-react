import {getFullYear, getFooterCopy, getLatestNotification} from './utils.js';


//test getFullYear
test('checks if correct year is returned', () =>{
    expect(getFullYear()).toBe(2024);
});

//test getFooterCopy
test('checks if correct string is returned depending on input', () =>{
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

//test getLatestNotification
test('checks if correct string is returned for notification', ()=>{
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});