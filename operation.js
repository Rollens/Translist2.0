var app = new Vue({
    el: '#Header',
    data: {
        text: ["智慧規劃", "輕鬆搭乘"],
        OAO: "OBO"
    }
});
var S1 = new Vue({
    el: '#Section1',
    data: {
        text: ["面對大眾運輸越來越完備的台灣", "轉乘規劃總是旅人在行程中最頭痛的", "對此，眾多平台已經推出相關的「全套導航」", "讓人們像是包裹一樣隨著固定的路線運送", "Translist致力於讓旅人們", "不僅能得到相關的轉乘資訊", "更能依照自己的需求改變任何旅途中的班次", "最後再輸出成卡片清單", "智慧規劃、輕鬆搭乘", "Translist會帶給你新的規劃與搭乘的體驗"]
    }
});
var Homegb = ["url(source/img/christophe-maertens-463540.jpg)", "url(source/img/stefan-kunze-24548)", "url(source/img/c-chapman-384658)"]
var counter = 0;

function HomeBackground() {
    var g = document.getElementById("Header");
    console.log(g);
    g.style.backgroundImage = Homegb[counter];
    counter++;
    if (counter === 3)
        counter = 0;
    setTimeout(HomeBackground, 3000);
}
//HomeBackground();
var ser = new Vue({
    el: '#Section2',
    data: {
        city: ["選擇主要交通工具如高鐵、台鐵、公路客運", "並且安排其中的接駁轉乘等", "在依照需求自由調整時段", ],
        urban:["選擇公車或是公共自行車","快速找尋在城市中最有效率的移動方式"],
        hotel:["進階版服務","擴大連結交通工具與住宿","找尋最有效率的商務方案"]
    }
})
var ope = new Vue({
    el:'#Section3',
    data:{
        first:["選定所欲搭乘的主要交通工具","如高鐵台鐵等","城內交通則會有公共自行車、公車等選項",],
        second:["檢視行程規劃列表"],
        third:["更改小卡選項","如:時間、車種等","不同的交通工具會產生不同的選項"],
        fourth:["完成規劃準備出發囉"]
    }
});
$(document).ready(function () {
    $('.Stext').hide();
    $('.jhov').hover(function () {
        $(this).fadeTo("slow", 0.5);
    }, function () {
        $(this).fadeTo("fast", 1.0);
    });
    $('.Service1').click(function () {
        $('.Service2,.Service3').fadeOut("slow");
        $('.S1').fadeIn();
        $('.S1').click(function () {
            $('.Stext').fadeOut();
            $('.Service1,.Service2,.Service3').fadeIn("slow");
        });
    });
    $('.Service2').click(function(){
        $('.Service1,.Service3').fadeOut("slow");
        $('.S2').fadeIn();
        $('.S2').click(function () {
            $('.Stext').fadeOut();
            $('.Service1,.Service2,.Service3').fadeIn("slow");
        });
    });
        $('.Service3').click(function(){
        $('.Service1,.Service2').fadeOut("slow");
        $('.S3').fadeIn();
        $('.S3').click(function () {
            $('.Stext').fadeOut();
            $('.Service1,.Service2,.Service3').fadeIn("slow");
        });
    });
});
