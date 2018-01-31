var app = new Vue({
    el:'#Header',
    data:{
        text:["智慧規劃","輕鬆搭乘"],
        OAO:"OBO"
    }
});
var S1 = new Vue({
    el:'#Section1',
    data:{
        text:["面對大眾運輸越來越完備的台灣","轉乘規劃總是旅人在行程中最頭痛的","對此，眾多平台已經推出相關的「全套導航」","讓人們像是包裹一樣隨著固定的路線運送","Translist致力於讓旅人們","不僅能得到相關的轉乘資訊","更能依照自己的需求改變任何旅途中的班次","最後再輸出成卡片清單","智慧規劃、輕鬆搭乘","Translist會帶給你新的規劃與搭乘的體驗"]
    }
});
var Homegb = ["url(source/img/christophe-maertens-463540.jpg)","url(source/img/stefan-kunze-24548)","url(source/img/c-chapman-384658)"]
var counter = 0 ; 
function HomeBackground()
{
    var g = document.getElementById("Header");
    console.log(g);
    g.style.backgroundImage=Homegb[counter];
    counter++;
    if(counter === 3)
        counter = 0;
    setTimeout(HomeBackground,3000);
}
//HomeBackground();
