$(document).ready(function() {
    $('#submit-btn').click(function() {
        $('#contact-form').attr('action',
                       'mailto:daniel.p.masters@gmail.com?subject=' +
                       $('#name').val() + '&body=' + $('#message').val());
        $('#contact-form').submit();
    });
});