let $allList = $('#foot li') 
console.log($allList)
$allList.eq(0).on('click',function(){
    $('#view').css({transform:'translateX(0)'})
    $allList.eq(0).addClass('active')
})
$allList.eq(1).on('click',function(){
    $('#view').css({transform:'translateX(920)'})
    $allList.eq(1).addClass('active')
})
$allList.eq(2).on('click',function(){
    $('#view').css({transform:'translateX(1840)'})
    $allList.eq(2).addClass('active')
})
$allList.eq(3).on('click',function(){
    $('#view').css({transform:'translateX(2700)'})
    $allList.eq(3).addClass('active')
})