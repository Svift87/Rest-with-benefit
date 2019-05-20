window.addEventListener('DOMContentLoaded', function () {
    let one = $('.main_nav nav ul li:nth-child(2) a'),
        mainBtna = $('.main_btna'),
        mainBtn = $('.main_btn'),
        modal = $('.modal'),
        close = $('.close');
        
    one.on('click', function() {        
        $('.overlay').fadeIn(1000);
        modal.animate(
            {
                height: "show"
            },
        1000);
    })
    mainBtna.on('click', function() {
        $('.overlay').fadeIn(1000);
        modal.animate(
            {
                height: "show"
            },
        1000);
    })
    mainBtn.on('click', function() {
        $('.overlay').fadeIn(1000);
        modal.animate(
            {
                height: "show"
            },
        1000);
    })

    close.on('click', function() {
        $('.overlay').fadeOut(1000);
        modal.animate(
            {
                height: "hide"
            },
        1000);
    })
})