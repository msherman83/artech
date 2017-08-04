/*

Custom JavaScript

*/

$(function() {
    $('#alertMe').click(function(e) {
        e.preventDefault();

        $('#successAlert').slideDown();
    });
});
