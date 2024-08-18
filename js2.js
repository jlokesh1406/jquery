
// 1.Set Up on Local jQuery

$(document).ready(function()
{
    let temp=$("#SETUP").text();
    $("#SETUP").text(`${temp} Hi`);
    console.log(temp); // Hey...
})

//2.Basic Syntax of jQuery
/*
$(selector).action()
    $ --> shorthand jQuery function
    selector --> String to get HTML element or selectors
    action() --> jQuery Method or function to perform sum task on the selected elements
*/

//3.selectors
//1.id selectors
let temp1 = $("#S1").text();
$("#S1").text(` ${temp1} ...`);
console.log(temp1); //Home1

//2.class selectors
let temp2 = $(".S2").text();
$(".S2").text(` ${temp2} ...`);
console.log(temp2); //Home2

//3.Element Selector
// let temp3 = $("p").text();
// $("p").text(`${temp3}...`)

//4.Attribute Selector
// $('[type]').css("border","2px solid yellow");

//5.value Selector
$('[id="ValueS"]').val("---username--");

//6.partial selector
$('a[href*="example"]').css("background-color","red");
$('a[href*="example"]').css("color","white");

$('a[href^="http://google"]').css("background-color","green");
$('a[href^="http://google"]').css("color","white");

//7.Descendant Selector
$('.Descendant_container p').css("color","red");
$('.Descendant_container p').css("font-size","30px");

//8.Child Selector
$('.Child_Selector_container > h3').css("color","red");

//9.DOM
//html()
$("#content1").html('<p>1. --New HTML content1--</p>');

//text()
$("#content2").text('2.--New HTML content2--');

//attr() - attribute
$("#content3").attr('src','../img/7 (5).jpg');
$("#content3").css("width","200px")
$("#content3").attr('alt','GT_65');

//val()
$("#content4").val("New Content");
$("#content4").css("color","red");

//append & prepend
$(".ap").prepend("<p>2</p>");
$(".ap").append("<p>3</p>");

//remove()
$("#remove_this_content").remove();

//addClass()
$("#addClass_7").addClass('highlight');

//removeClass()
$("#removeClass_8").removeClass('highlight');

//toggleClass
$("#toggleClass_9").toggleClass('highlight');
$("#toggleClass_10").toggleClass('highlight');

//parent()
$(".btn1").click(function()
{
    let par = $(this).parent();
    par.toggleClass("highlight");
})

//siblings()
$(".item").click(function()
{
    let Siblings = $(this).siblings();
    Siblings.toggleClass("highlight");

    let Special = $(this).siblings(".special");
    Special.css("background-color","Red");
})
$(".item").click(function()
{
    $(this).css("background-color","green");
})

//onclick
$(".mybtn").click( function()
{
    let name =  prompt("Enter Your Name");
    let temp = `Hey! ${name} Welcome Ted Talks Product`;
    alert(temp);
    $(".mybtn_result").text(`${temp}`);
});

//hover
$("#box1").hover( function(){$(this).css("background-color","red")} ,function(){$(this).css("background-color","green")})

//focus
$("#fb").focus(function()
{
    $(this).css("border","2px solid red")
})
$("#fb").blur(function()
{
    $(this).css("border","2px solid yellow")
})

//on()
// $(".on_parent").on("click",".on_child",function(){alert("hii child click")})

//off()
// $(".on_child").on('click',Show)
// function Show()
// {
//     alert("click");
//     $(".on_child").off("click",Show)
// }

