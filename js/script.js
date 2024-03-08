$(function(){
    $('.gnb>li').hover(function(){
        $(this).find('.lnb').stop().fadeToggle();
    });

    setInterval(slide, 3000);

    $('.tabnav>li').click(function(e){
        e.preventDefault();
        $('.tabnav>li').removeClass('active');
        const href=$(this).find('a').attr('href');
        $(this).addClass('active');
        $('.tab').removeClass('active');
        $(href).addClass('active');
    });
});

function slide(){
    $('.slidein').animate({
        'left':'-1200px'
    }, 1000, function(){
        $('.slidein img:eq(0)').clone().appendTo('.slidein');
        $('.slidein img:eq(0)').remove();
        $('.slidein').css('left', 0);
    })
}