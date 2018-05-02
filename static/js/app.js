$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        }
        ;
    }

    var accordion = new Accordion($('#accordion'), false);
});
$(function () {
    $(".menu").click(function () {
        $(".menu-list").css('transform','translate(-15.71rem)')
        $('.cover').show()


    })
    $(".cover").click(function () {
        $(".menu-list").css('transform','translate(0)')
        $(this).hide()

    })
})


$(function(){
    var showImgList = [
        './static/images/swiper-1.png',
        './static/images/swiper-2.png',
        './static/images/swiper-3.png',
        './static/images/swiper-4.png',
        './static/images/swiper-5.png',
    ];
    let index = 0;
    let liList = $('.cont-item');
    setInterval(function(){
        if(index >= liList.length - 1){
            liList.eq(index).animate({left: '-20%', opacity: 0},600,function() {
              liList.eq(0).animate({left: 0, opacity: 1}, 600);
            });
            index = 0;
        }else{
            liList.eq(index).animate({left: '-20%', opacity: 0},600,function() {
              liList.eq(index + 1).animate({left: 0, opacity: 1}, 600);
              index ++;
            });
        }
        $(".swiper-show img").attr('src',showImgList[index])

    },4000)
});
