var shi=document.querySelector(".shi");
var fen=document.querySelector(".fen");
var miao=document.querySelector(".miao");
function djs(s,f,m){
    var day=new Date();
    var end=new Date();
    end.setHours(s);
    end.setMinutes(f);
    end.setSeconds(m);
    var daytiem=day.getTime();
    var endtiem=end.getTime();
    var time=endtiem-daytiem;
    var shis=Math.floor(time/(1000*60*60));//除以1000毫秒*60秒*60分
    var fens=Math.floor(time/(1000*60))%60;//除以1000毫秒*60秒，然后取余60，,剩下的就是分钟，
    var miaos=Math.round(time/1000)%60;
    shi.innerHTML=shis<10?"0"+shis:shis;
    fen.innerHTML=fens<10?"0"+fens:fens;
    miao.innerHTML=miaos<10?"0"+miaos:miaos;
}
djs(23,30,0)
setInterval(function(){
    djs(24,0,0)
},1000)