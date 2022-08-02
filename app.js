$(document).ready(function () {
    $('.popUp__button').on('click', function () {
        $('#box').toggleClass('show');
    })

    $('.submission').on('click', function () {
        $('#box').removeClass('show');
    });

    $('.closeButton').on('click', function () {
        $('#box').removeClass('show');
    });
});