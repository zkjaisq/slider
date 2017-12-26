
$('.images > img:nth-child(1)').addClass('current')
$('.images >img:nth-child(2)').addClass('enter')
$('.images >img:nth-child(3)').addClass('enter')
$('.images >img:nth-child(4)').addClass('enter')
$('.images >img:nth-child(5)').addClass('enter')
/*setTimeout(function(){
    $('.images > img:nth-child(1)').removeClass('current').addClass('leave').one('transitionend',function(e){
        $(e.currentTarget).removeClass('leave').addClass('enter')
     })
    $('.images > img:nth-child(2)').removeClass('enter').addClass('current')
    $('.images > img:nth-child(1)')
},1000)
setTimeout(function(){
    $('.images > img:nth-child(2)').removeClass('current').addClass('leave').one('transitionend',function(e){
        $(e.currentTarget).removeClass('leave').addClass('enter')
     })
    
    $('.images > img:nth-child(3)').removeClass('enter').addClass('current')
},2000)
setTimeout(function(){
    $('.images > img:nth-child(3)').removeClass('current').addClass('leave').one('transitionend',function(e){
        $(e.currentTarget).removeClass('leave').addClass('enter')
     })
    $('.images > img:nth-child(4)').removeClass('enter').addClass('current')
},3000)
setTimeout(function(){
    $('.images > img:nth-child(4)').removeClass('current').addClass('leave').one('transitionend',function(e){
        $(e.currentTarget).removeClass('leave').addClass('enter')
     })
    $('.images > img:nth-child(5)').removeClass('enter').addClass('current')
},4000)
setTimeout(function(){
    $('.images > img:nth-child(5)').removeClass('current').addClass('leave')
    $('.images > img:nth-child(1)').removeClass('enter').addClass('current')
},5000)*/

let n = 1
setInterval(function(){
    $(`.images > img:nth-child(${x(n)})`).removeClass('current').addClass('leave').one('transitionend',function(x){
        $(x.currentTarget).removeClass('leave').addClass('enter')
    })
    $(`.images>img:nth-child(${x(n+1)})`).removeClass('enter').addClass('current')
   n +=1
        },1000)
function x(n){
if(n>5){
    n=n%5
}if(n===0){
    n =5
}
return n 
}

