//模拟数据
var data = [
    [
        {'src':'img/pbl/5.jpg','title':'采用顶级的羊皮材料，更时尚，更有格调！搭配秋冬服饰更有独特的韵味！'},
        {'src':'img/pbl/6.jpg','title':'慢跑鞋无疑是整个2014年的时尚宠儿。除却功能性以及对足部的保护之外，选择一双款型时尚，配色亮眼的慢跑鞋绝对是您对自己时尚之道最好的诠释。乔丹时尚功能休闲慢跑鞋以出色的性能，时尚的造型'},
        {'src':'img/pbl/7.jpg','title':'圣迩尼—让你怦然心动，2014最新潮流性感个性款式，穿出不一样的时尚！'},
        {'src':'img/pbl/8.jpg','title':'潮男时尚T台秀'},
        {'src':'img/pbl/9.jpg','title':'潮流荧光色系'},
        {'src':'img/pbl/10.jpg','title':'新款男士商务几何图案修身夹克'},
        {'src':'img/pbl/11.jpg','title':'精梳棉面料，柔软舒适透气。'},
        {'src':'img/pbl/12.jpg','title':'舒适轻薄款，穿着轻薄，无负担感。修身版型，起到了很好的修身的效果，更加塑型。'},
    ],
    [
        {'src':'img/pbl/13.jpg','title':'丝质柔滑面料 干净舒适。衣襟拼色，时尚有型，金属质地纽扣，完美细节品质。'},
        {'src':'img/pbl/14.jpg','title':'运用时兴的对比拼色元素，中袖设计与弹力袖口的组合既显瘦又端庄，散发都市丽人的知性气质。'},
        {'src':'img/pbl/15.jpg','title':'干练利落的尖领融合复古的做旧蓝色，于撞色对比间营造视觉冲击力，展现鲜明的时尚态度。'},
        {'src':'img/pbl/16.jpg','title':'鲜嫩的鹅黄色圆领配以拉链前襟十分吸引眼球，亲肤丝棉材质舒适贴合肌肤，恰到好处的休闲造型极富亲和力。'},
        {'src':'img/pbl/17.jpg','title':'淡雅桃与经典黑色的撞色拼接，展现大气利落气质。'},
        {'src':'img/pbl/18.jpg','title':'清新利落的白色衬衫小翻领设计，平添一份邻家女孩般清爽干净的气质。'},
        {'src':'img/pbl/19.jpg','title':'简约圆领，凸显优雅大方气质。裙身采用有浮雕质感的花型，更添女性柔美浪漫的古典气质。'},
        {'src':'img/pbl/20.jpg','title':'胸前以沙漏式的剪裁以及颇具设计感的隐形开叉设计，轻松衬出姣美丰满的胸型。'},
    ],
    [
        {'src':'img/pbl/21.jpg','title':'甜美的白色波点，加上薄荷绿的清新映衬，简约中透漏女神气质。上班约会都是不错的选择。'},
        {'src':'img/pbl/22.jpg','title':'宽松的H版型连衣裙，腰部可自由调节，轻松藏起身体小赘肉。'},
        {'src':'img/pbl/23.jpg','title':'新款骷髅印花宽松无袖圆领连衣裙，穿出潮流范儿。'},
        {'src':'img/pbl/24.jpg','title':'天丝牛仔连衣裙，比雪纺更柔软透气，比棉更具光泽。'},
        {'src':'img/pbl/25.jpg','title':'独特的露背设计，展现女性妩媚性感的背部线条。'},
        {'src':'img/pbl/26.jpg','title':'职业男人着装导师，让不修边幅SAY GOODBYE。'},
        {'src':'img/pbl/27.jpg','title':'上身宽松有型，下身包臀设计，简洁大方的设计，流露出性感修身的好身材，得体大方。'},
        {'src':'img/pbl/28.jpg','title':'主珠为天然红玛瑙佛珠，加以天然蓝绿松顶珠为配珠，绿松石象征着“信赖和信任”，也给远征的人带来吉祥和好运，被誉为成功幸运之石。'},
    ],
    [
        {'src':'img/pbl/29.jpg','title':'采用吸湿速干面料，穿着舒适，圆领设计，简洁大方；图案独有新疆风貌垂钓活动，彰显Discovery Expedition品牌非凡探索的户外精神。'},
        {'src':'img/pbl/30.jpg','title':'使用仿棉感速干面料，加入吸湿速干整理，含有碳素有除臭抗菌的功能。适合徒步、穿越、露营、日常等环境穿着。'},
        {'src':'img/pbl/31.jpg','title':'行走在野外，再不怕清晨露珠或是突如其来的毛毛雨打湿衣服，时刻保持舒爽。'},
        {'src':'img/pbl/32.jpg','title':'平整的领口，匀密的双车线，在这个短袖衬衫解禁的夏天显得精致而精神。'},
        {'src':'img/pbl/33.jpg','title':'撞色拼接，弹力面料，弹力包边下摆，后背均带有3M反光，增加骑行过程的安全性。'},
        {'src':'img/pbl/34.jpg','title':'面料凉爽顺滑，整体设计特别女人味。'},
        {'src':'img/pbl/35.jpg','title':'你可以穿着它去散步，去骑车，去户外，去郊游，晒着太阳而无需担心晒伤。'},
        {'src':'img/pbl/36.jpg','title':'拼色款式设计，透气轻薄的超轻面料，带给您完美舒适的质感，腋下面料冲孔设计，方便排汗与换气，更有利于户外活动穿着。'},
    ],
    [
        {'src':'img/pbl/37.jpg','title':'王者之气尽显无疑，体现男人魅力。'},
        {'src':'img/pbl/38.jpg','title':'胸针采用的优质合金，经过精湛的电镀和抛光处理，呈现出华丽的光泽，手感顺滑不易生锈。长时间使用依旧持久弥新。'},
        {'src':'img/pbl/39.jpg','title':'造型精美，作为点缀出席各种场合。'},
        {'src':'img/pbl/40.jpg','title':'被用于出席颁奖典礼和参与派对的装扮眼镜。'},
        {'src':'img/pbl/41.jpg','title':'性感的大红在春夏季大放异彩，不再那么闪耀而浓重，转而以一种淡淡的姿态唤醒人们的感官视觉。'},
        {'src':'img/pbl/42.jpg','title':'潮流百搭，遮阳、修脸神奇，适合各种场合佩带。'},
        {'src':'img/pbl/43.jpg','title':'最具代表色彩的眼镜，一如既往的为年轻人增光。商务、休闲、驾车、运动，每一个户外场合都是最佳的搭配宠儿'},
        {'src':'img/pbl/44.jpg','title':'用黑色蕾丝做腰带，有很好的收腰效果，合体修身，简洁中透露随性感。'},
    ],
    [
        {'src':'img/pbl/45.jpg','title':'豪放派展现内涵的首选。'},
        {'src':'img/pbl/46.jpg','title':'而立之年，终因一串友人相赠的佛珠心平气和，离苦得乐。'},
        {'src':'img/pbl/47.jpg','title':'中微喇收紧腰腹线条的同时，宽阔的小腿裤腿遮掩腿型，重塑小腿线条。'},
        {'src':'img/pbl/48.jpg','title':'COACH 蔻驰 女士PVC经典LOGO卡其蓝色手提肩背包'},
        {'src':'img/pbl/49.jpg','title':'2014新品俏皮清新马卡龙拼色色系轻薄大容量长款钱包'},
        {'src':'img/pbl/50.jpg','title':'COACH 女款皮革十字花纹柿红色手提肩背斜挎包'},
        {'src':'img/pbl/51.jpg','title':'每个包包都有其独特的风采，捧在手心里，随意搭配，精致可爱。'},
        {'src':'img/pbl/52.jpg','title':'镜面合成革易于清洁打理，金属后跟时尚潮流，款型简约，适于职场或宴会穿着。'},
    ],
    [
        {'src':'img/pbl/53.jpg','title':'女士精品'},
        {'src':'img/pbl/54.jpg','title':'雀仔飞鸟灵感仿佛来自于法国田园风情的家居用品。艳红、薄荷绿以及暖粉的色彩应用在蓝调针织裙上，热烈之外更具浪漫气息。'},
        {'src':'img/pbl/55.jpg','title':'经典圆领设计，简单大方，宽松袖口，舒适大方。花鸟织锦缎拼接，复古典雅。细腻质地，手感弹滑，光泽柔和均匀，温和亲肤。'},
        {'src':'img/pbl/56.jpg','title':'宽松休闲给人带来自在穿着体验，彰显大方知性的文艺韵味。'},
        {'src':'img/pbl/57.jpg','title':'柔软顺滑，吸湿透气，一如第二层肌肤般，极为适合贴身穿着。'},
        {'src':'img/pbl/58.jpg','title':'至美简约，没有任何多余的装饰，凸显干练气质。'},
        {'src':'img/pbl/59.jpg','title':'永久典型的黑白条纹控，穿出潮男小清新。'},
        {'src':'img/pbl/60.jpg','title':'运动元素是不可替代的“范儿”，摆脱束缚，带着欢快的心情，在街头、户外随心游走。'},
    ],
    [
        {'src':'img/pbl/61.jpg','title':'清甜马卡龙色系，是春夏不可或缺的主打元素。色调鲜活，条纹肌理自然，极具品质感。轻而易举地掠获少女芳心。'},
        {'src':'img/pbl/62.jpg','title':'阿玛尼休闲夏日时尚阿玛尼型男短袖 大经典logo腰带 阳光百搭牛仔裤 过一个轻松阳光夏日'},
        {'src':'img/pbl/63.jpg','title':'拼色连衣裙绝对是今夏的流行款'},
        {'src':'img/pbl/64.jpg','title':'时尚名媛黑色静谧显瘦'},
        {'src':'img/pbl/65.jpg','title':'甜美 休闲 名媛 OL 休闲 经典'},
        {'src':'img/pbl/66.jpg','title':'中微喇收紧腰腹线条的同时，宽阔的小腿裤腿遮掩腿型，重塑小腿线条。'},
        {'src':'img/pbl/67.jpg','title':'职业男人着装导师，让不修边幅SAY GOODBYE。'},
        {'src':'img/pbl/68.jpg','title':'不同色彩的拼接，彰显潮流风尚，无形中增添了几分青春活力。'},
    ]
];
//左导航显示
$('#aa li').mouseover(function(){
    this.style.background='#cccc';
    $(this).children('.menu-panel').show();
})
//左导航消失
$('#aa li').mouseout(function(){
    this.style.background='';
    $(this).children('.menu-panel').hide();
})
//高级搜索显示
$('.search').mouseenter(function(){
    // alert('o')
    // $(this).css('height','280px');
    $(this).animate({height:"280px"});
    $(this).children('.search-all').animate({opacity:'1',height:'140px'})

})
//高级搜索隐藏
$('.search').mouseleave(function(){
    $(this).animate({height:"120px"});
    $(this).children('.search-all').animate({opacity:'0',height:'0px'})
})




//高级搜索点击显示
$('.search-all>a').click(function(){
    $(this).children('.btm').css('display','block');
    // $(this).children('.btm').css({height:'140px',border:'5px solid #cccc',background:'#cccc'})
})

//高级搜索点击隐藏



//轮播
var aaa=$('.silde');
var ul=$('.silde li');
var lis=$('.silde-page li')
var num=0;
function aaaa(){
    
    // console.log(aaa)   
   aaa.css('left',-num*666+'px');
    lis.attr('class','');
    lis.eq(num).attr('class','on');
    // console.log(ul.length)
    
    //  console.log('num')
    num++;
        if(num>ul.length-1){
            num=0;
        }

}
var time=setInterval(aaaa,1000)

$('.silde-page li').mouseover(function(){
    clearInterval(time)
    // console.log(num);
    num = $(this).index();
    aaa.css('left',-num*666+'px');
    lis.attr('class','');
    $(this).attr('class','on');
})
$('.silde-page li').mouseleave(function(){
    time=setInterval(aaaa,1000)
})


//广告替换
onscroll=function(){
    var b=$(window).scrollTop();
    // console.log($(window).scrollTop())
    if(b>300){
        $('.ad>img').css('display','none');
        $('.rightMenu').css('bottom','0px')
    }
    else {
        $('.ad>img').css('display','block');
        $('.rightMenu').css('bottom','-150px')
    }
}
//返回顶部
$('.backTop').click(function(){
    $(window).scrollTop(0);
})
//显示与消失li
$('.rightMenuBtn').mouseenter(function(){
    $('.edu-main').show()
})

$('.rightMenuBtn').mouseleave(function(){
    $('.edu-main').hide()
})
//加载

function begin(){
    var top1=document.documentElement.scrollTop;
    var top2=document.documentElement.offsetHeight;
    var top3=document.documentElement.scrollHeight;
    if(top3-top2-top1<300){
        return true;
    }else{
        return false;
    }
}
var num1=0;
document.onscroll=function(){
    if(num1==data.length){
        return;
    }
    if(begin()){
        for(var i=0;i<data[num1].length;i++){
            $('.liu').eq(i%4).append($('<div class="box"><div class="info"><div class="pic"><img src="'+data[num1][i].src+'"></div><div class="tittle">'+data[num1][i].title+'</div></div></div>'));
        }num1++;console.log(num1,data.length)
    return num1;
    }
    
}











//瀑布流
// var index_a=0;//下标
// var scrollb=true;
// $(window).scroll(function(){//窗口是否滚动
// if(!scrollb) return;
// if(getcheck()){//数据是否加载
//     scrollb=false;
//     setTimeout(function(){
//         for(i in date[inedx_a]){
//             var newHtml=$('<div class="box"><div class="info"><div class="pic"><img src="'+date[index_a][i].src+'"></div><div class="tittle">'+date[index_a][i].tittle+'</div></div></div>');
//             $('#showpic').append(newHtml);
//         }
//         setTimeout(function(){
//         PBL('showpic','box');
//         index_a++;
//         scrollb=true;
//         if(index_a==date.length){
//             scrollb=false;
//         }
//     },200)
//     },10)
// }
// })

//         function getcheck(){
//             var documentH=document.documentElement.clientHeight;
//             var documentH=document.documentElement.scrollTop || document.body.scrollTop;
//             return documentH+screenTop>=getLastH()?true:false;
//         }
//         function getLastH(){
//             var wrap=document.getElementById('showpic');
//             var boxs=getClass(wrap,'box');
//             console.log(boxs)
//             return boxs[boxs.lengtn-1].offsetTop+boxs[boxs.lengtn-1].offsetHeight-100;
//         }
//         function getClass(wrap,className){
//             var obj=wrap.getElementsByTagName('*');
//             var arr=[];
//             for(var i=0;i<obj.length;i++){
//                 if(obj[i].className==className){
//                     arr.push(obj[i]);
//                 }
//             }
//             return arr;
//         }
//         function PBL(wrap,box){
//             var wrap=document.getElementById(wrap);
//             var boxs=getClass(wrap,box);
//             var boxw=boxs[0].offsetWidth;
//             var colsNum=4;
//             wrap.style.width=boxw*colsNum+'px';

//             var everyH=[];
//             for(var i=0;i<boxs.length;i++){
//                 if(i<colsNum){
//                     everyH[i]=boxs[i].offsetHeight;
//                 }
//                 else{
//                     var minH=Math.min.apply(null,everyH);
//                     var minindex=getIndex(minH,everyH);
//                     getStyle(boxs[i],minH,boxs[minindex].offsetleft,i);
//                     everyH[minindex] +=boxs[i].offsetHeight;
//                 }
//             }
//             var maxH=Math.max.apply(null,everyH);
//             wrap.style.height=maxH+'px';
//         }
