import $ from 'jquery';
import _ from 'lodash';
import '../css/body.css';

$(document).ready(function() {
    $('body').append('<button>Click here to get started</button>');
    $('body').append('<p id="count"></p>');

    function updateCounter() {
        let count = 0;

        $('button').on('click', function() {
            count++;
            $('#count').text(`${count} clicks on the button`);
        });
    }

    updateCounter();
});