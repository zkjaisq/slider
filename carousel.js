var buttons = $('#button > span')
console.log(buttons)
for (let i = 0; i < buttons.length; i++) {
    $(buttons[i]).on('click', function (x) {
        var index = $(x.target).index()
        var long = index * -600
        $(imges).css({
            transform: 'translateX(' + long + 'px)',
        })
        n = index
        buttons.eq(n % 3).addClass('red')
            .siblings('.red').removeClass('red')
    })
}
//实现了点击轮播的效果，其中buttons[i]是一个DOM对象，只有把它转换成一个jQuery对象才能使用jQuery的API，或者是使用DOM的API也可以的。
var n = 0;
//.eq意思是找出对应的DOM对象，并封装成一个jQuery对象。
buttons.eq(n % 3).trigger('click').addClass('red')
    .siblings('.red').removeClass('red')


var timerId = setInterval(() => {
    n += 1
    buttons.eq(n % 3).trigger('click').addClass('red')
        .siblings('.red').removeClass('red')
}, 1000)


$('.screen').on('mouseenter', function () {
    window.clearInterval(timerId)
})
$('.screen').on('mouseleave', function () {
    timerId = setInterval(() => {
        n += 1
        buttons.eq(n % 3).trigger('click').addClass('red')
            .siblings('.red').removeClass('red')
    }, 1000)
})