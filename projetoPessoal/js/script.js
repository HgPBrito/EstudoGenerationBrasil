$(document).ready(function () {


    var Menu = {

        body: $('.menu'),
        button: $('.button'),
        tools: $('.tools')

    };

    Menu.button.click(function () {

        Menu.body.toggleClass('menu--open');
        Menu.tools.toggleClass('tools--visible');
        Menu.body.toggleClass('menu--closed');
        Menu.tools.toggleClass('tools--hidden');
    });


});