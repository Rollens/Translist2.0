var app = new Vue({
    el:'#Header',
    data:{
        text:["智慧規劃","輕鬆搭乘"],
        OAO:"OBO"
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