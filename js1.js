// jquery is a javascript library that will prevent our fingers form breaking
// jQuery is a fast, lightweight, and feature-rich JavaScript library that simplifies things like HTML document traversal and manipulation, 
// event handling, and animation. It was created to make it easier to work with JavaScript and to handle cross-browser compatibility issues.
// With its concise syntax, jQuery allows developers to write less code to achieve more functionality, making it a popular choice for enhancing web pages and building interactive web applications.
// John Resig created jquery library

/*
for(let i=0;document.querySelectorAll("button").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function()
    {
       document.querySelector("h1").style.color="red"; 
    });
}

${"button"}.click(function()
{
    ${"h1"}.css("colour","red");
})

document.querySelector("h1") ---> ${"h1"};
*/

// website link : https://developers.google.com/speed/libraries/#jquery
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

// alert("hii");

// $(document).ready(function()
// {
//     $(".fs").css("color", "red");
// })

$(".fs").css("color", "white");

document.querySelector("qs1");
$("qs1");

document.querySelectorAll("button");
$("button");

// 3.manipulating style with jQuery

$("#msjq1").css("color","darkorange");
$("#msjq1").css("font-size","40px"); 
// Set color
$("#msjq1").css("color", "darkorange");
// Set padding-top
$("#msjq1").css("padding-top", "1px");
// Set margin-top
$("#msjq1").css("margin-left", "10px");
// Set padding
$("#msjq1").css("padding", "10px 20px");
// Set margin
$("#msjq1").css("margin", "1px 2px");
// Set display
$("#msjq1").css("display", "block"); // or "block", "inline", etc.


$("#msjq2").addClass("addcss_to_jq_fs addcss_to_jq_padding");
// $("#msjq2").removeClass("addcss_to_jq_padding");
console.log($("#msjq2").hasClass("addcss_to_jq_fs")); //true


// 4.Manipulating Text with jQuery
$("#mt1").text("Bye..");
// $("button").text("<em>Hey</em>");

//5.Manipulating Attributes with jQuery
console.log($("img").attr("src")); //demo.jjj
$("img").attr("src","../img/7 (2).jpg")
$("img").css("width","200px");

console.log($("a").attr("href")); //TED.com
$("a").attr("href","https://www.google.com");
console.log($("a").attr("class"));//a_a_a_a

//6.Adding Event Listeners
$("#ae1").click(function()
{
    $("#ae1").css("color","red")
});


$(".btn1").click(function()
{
    $("#ae2").css("color","red")
});


$("#ip_on_ae1").keypress(function(event)
{
    $("#ip_on_ae1_for_display").text(event.key);
    console.log(event.key);
});



$("#ip_on_ae1").keypress(function(event)
{
    $("#ip_on_ae1_for_display").text(event.key);
    console.log(event.key);
});

$("#mouseover_1").on("mouseover", function() {
    $(this).css("background-color", "red");
    $(this).css("color", "white");
});

$("#mouseover_1").on("mouseout", function() {
    $(this).css("background-color", "black");
    $(this).css("color", "white");
});


$("#mouseover_2").on("click", function() {
    $(this).css("background-color", "black");
    $(this).css("color", "white");
});

$("#mouseover_3").on("click", function() {
    $(this).toggleClass("black");
});

//7.Adding and Removing Elements with jQuery
$("#AR1").before("<button>Click1</button>")     // <button>Click1</button> <p id="AR1">-LOKESH-</p>  <button>Click2</button>
$("#AR1").after("<button>Click2</button>")     //     <p id="AR1">-LOKESH-</p>

$("#AR1").append("<button>Click3</button>")   //     <p id="AR1">-LOKESH- <button>Click3</button></p>
$("#AR1").prepend("<button>Click4</button>")  //     <p id="AR1"><button>Click4</button>-LOKESH-</p>
$("#AR1 button").css("color","REd");

// $("#AR1 button").remove();
// $("button").remove();

//8.Website Animations with jQuery
$("#Wa_btn1").on("click",function()
{
    $("#text1").hide();
});
$("#Wa_btn1").on("click",function()
{
    $("#text1").show();
});
$("#Wa_btn2").on("click",function()
{
    $("#text2").toggle();
});



$("#Wa_btn3").on("click",function()
{
    $("#text3").fadeOut();
});
$("#Wa_btn3").on("click",function()
{
    $("#text3").fadeIn();
});
$("#Wa_btn4").on("click",function()
{
    $("#text4").fadeToggle();
});


$("#Wa_btn5").on("click",function()
{
    $("#text5").slideUp();
});
$("#Wa_btn5").on("click",function()
{
    $("#text5").slideDown();
});

$("#Wa_btn6").on("click",function()
{
    $("#text6").slideToggle();
});

$("#Wa_btn7").on("click",function()
{
    $("#text7").animate({opacity:0.5});
});



