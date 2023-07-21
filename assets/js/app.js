const cl =console.log;

$('.tmslider').owlCarousel({
    loop :true,
    nav : true,
    navText :['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
    responsive : {
        0 : {
            items : 1,
            dots : false
        },
        600 : {
            items : 3
        },
        1100 : {
            items :4,
            margin : 20
        }
    }
})