let $allList = $('#foot li') 
let $allImages =$('#images').children('img')
let $firstCopy =$allImages.eq(0).clone(true)
let $lastCopy =$allImages.eq($allImages.length - 1).clone(true)
$('#images').append($firstCopy)
$('#images').prepend($lastCopy)

$('#images').css({transform:'translateX(-920px)'})

let current =0
$allList.eq(0).on('click',function(){
    if(current===3){
        $allList.removeClass('active')
        $allList.eq(3).addClass('active')
        $('#images').css({transform:'translateX(-4600px)'})
        .one('transitionend',function(){
            $('#images').hide().offset()
            $('#images').css({transform:'translateX(-920px)'})
            $('#images').show()
        })

    }else{
        $('#images').css({transform:'translateX(-920px)'});
        $allList.removeClass('active')
        $allList.eq(0).addClass('active')
        current=0
    }
    
})
$allList.eq(1).on('click',function(){
    $('#images').css({transform:'translateX(-1840px)'});
    $allList.removeClass('active')
    $allList.eq(1).addClass('active')
    current =1
})
$allList.eq(2).on('click',function(){
    $('#images').css({transform:'translateX(-2760px)'});
    $allList.removeClass('active')
    $allList.eq(2).addClass('active')
    current=2
})
$allList.eq(3).on('click',function(){
    if(current==0){
        $allList.removeClass('active')
        $allList.eq(3).addClass('active')
        $('#images').css({transform:'translateX(0px)'})
        .one('transitionend',function(){
            $('#images').hide().offset()
            $('#images').css({transform:'translateX(-3680px)'})
            $('#images').show()
        })
    }else{
        $('#images').css({transform:'translateX(-3680px)'});
        $allList.removeClass('active')
        $allList.eq(3).addClass('active')
        current=3
    }
    
})