const submitBtn = document.getElementById('click_btn');
submitBtn.style.backgroundColor = "red"
// const element1 = ;
// submitBtn.insertAfter(element1, submitBtn)
console.log(submitBtn.parentNode)

$('#click_btn')
// $('.className').
// $(element1).appendTo($('#click_btn'));
// $(element1).insertAfter($('#click_btn'));
$('<p style="color:blue; font-size: 25px;">This is my message for you</p>').insertBefore($('#click_btn'));
$('<br><a href="https://facebook.com">FaceBook</a>').insertAfter(submitBtn)
// $('#click_btn').insertAfter(element1)