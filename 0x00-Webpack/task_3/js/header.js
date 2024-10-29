import $ from 'jquery';
import '../css/header.css';

console.log('Init header');

$(document).ready(function() {
    $('body').prepend('<div id="header"></div>');
    $('#header').append('<img id="logo">');
    $('#header').append('<h1>Holberton Dashboard</h1>');
});