let $allListns = $('#foot li') 
/*let $allImages =$('#images').children('img')
let $firstCopy =$allImages.eq(0).clone(true)
let $lastCopy =$allImages.eq($allImages.length - 1).clone(true)
$('#images').append($firstCopy)
$('#images').prepend($lastCopy)

$('#images').css({transform:'translateX(-920px)'})
*/





var n = 0;
var size = $allListns.length
$allListns.eq(n % size).trigger('click')


var timerId = setTimer()

function setTimer() {
  return setInterval(() => {
    n += 1
    $allListns.eq(n % size).trigger('click')
  }, 4000)
}
moveEvent()

function moveEvent(){
   $('#foot').on('click','li',function(x){
       let $allList = $('#foot li') 
       let $Li = $(x.currentTarget)
       let index = $Li.index()
       n=index
       console.log(index)
       $allList.removeClass('active')
        $allList.eq(index).addClass('active')
      
       $('#images').css({transform:`translateX(${ - index * 920 }px)`})
   })
}
/*llList.eq(0).on('click',function(){
    
        $('#images').css({transform:'translateX(0px)'});
        $allList.removeClass('active')
        $allList.eq(0).addClass('active')
        current=0

    
})
$allList.eq(1).on('click',function(){
    $('#images').css({transform:'translateX(-920px)'});
    $allList.removeClass('active')
    $allList.eq(1).addClass('active')
    current =1
})
$allList.eq(2).on('click',function(){
    $('#images').css({transform:'translateX(-1840px)'});
    $allList.removeClass('active')
    $allList.eq(2).addClass('active')
    current=2
})
$allList.eq(3).on('click',function(){
  
        $('#images').css({transform:'translateX(-2760px)'});
        $allList.removeClass('active')
        $allList.eq(3).addClass('active')
        current=3

    
})*/