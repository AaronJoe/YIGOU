$(()=>{
  // 轮播图
  var index = 0,timer = null;
  var imgs = $("#nav-ban>.lbt>.imglist").children().length;
  // 自动轮播定时器
  function autoplay(){
      timer = setInterval(function(){
      index++;
      if(index>=imgs){
        index=0;
      }
      rolling(index);
    },3000); 
  }
  // 轮播方法
  function rolling(index){
    $("#nav-ban>.lbt>.imglist li").eq(index).fadeIn(1600).siblings().fadeOut(1600);
    setTimeout(function(){
      $("#nav-ban>.lbt>ol li").eq(index).addClass("active").siblings().removeClass("active");
    },1000)
  }
  // 执行自动轮播定时器
  autoplay();  
  // 左箭头
  $("#nav-ban>.lbt>.jt>li>.arr-left").click(function(){
    clearInterval(timer);
    index--;
    if(index<0){
      index=imgs-1;
    }    
    $("#nav-ban>.lbt>.imglist li").eq(index).fadeIn().siblings().fadeOut();
    setTimeout(function(){
      $("#nav-ban>.lbt>ol li").eq(index).addClass("active").siblings().removeClass("active");
    },100)    
  });
  // 右箭头
  $("#nav-ban>.lbt>.jt>li>.arr-right").click(function(){
    clearInterval(timer);
    index++;
    if(index>=imgs){
      index=0;
    }    
    $("#nav-ban>.lbt>.imglist li").eq(index).fadeIn().siblings().fadeOut();
    setTimeout(function(){
      $("#nav-ban>.lbt>ol li").eq(index).addClass("active").siblings().removeClass("active");
    },100)    
  });    

  $("#nav-ban>.lbt>.jt>li>.arr-left,#nav-ban>.lbt>.jt>li>.arr-right").hover(function(){
    clearInterval(timer);
  },function(){
    autoplay();
  });

  $("#nav-ban>.lbt>ol>li").hover(function(){
    clearInterval(timer);
    var n = $("#nav-ban>.lbt>ol>li").index(this);
    $(this).addClass("active").siblings().removeClass("active");
    $("#nav-ban>.lbt>.imglist li").eq(n).fadeIn().siblings().fadeOut();
  },function(){
    autoplay();
  });

  $("#nav-ban>.lbt>.imglist,#nav-ban>.lbt>.jt,#nav-ban>.lbt>ol").hover(function(){
    $("#nav-ban>.lbt>.jt li").css({opacity:1});
  },function(){
    $("#nav-ban>.lbt>.jt li").css({opacity:0});
  });

  // 导航
  $("#nav-ban>.nav>.nav-bg>.nav-list").hover(function(){
    $("#nav-ban>.lbt>.list").show();
  },function(){
    $("#nav-ban>.lbt>.list").hide();
  });

  $("#nav-ban>.lbt>.list").hover(function(){
    $("#nav-ban>.lbt>.list").show();
  },function(){
    $("#nav-ban>.lbt>.list").hide();
  });

  // 导航
  $("#nav-ban>.lbt>.list").delegate("dl","mouseenter",function(){
    var num = $("#nav-ban>.lbt>.list>dl").index(this);
    $("#nav-ban>.lbt>.list>dl").eq(num).show();
  });

  $("#nav-ban>.lbt>.list").delegate("dl","mouseleave",function(){
    var num = $("#nav-ban>.lbt>.list>dl").index(this);
    $("#nav-ban>.lbt>.list>dl").eq(num).hide();
  })  

  $("#nav-ban>.nav>.nav-bg>.nav-list>ul").delegate("li","mouseenter",function(){
    var num = $("#nav-ban>.nav>.nav-bg>.nav-list>ul>li").index(this);
    $("#nav-ban>.lbt>.list>dl").eq(num).show();
  });
  
  $("#nav-ban>.nav>.nav-bg>.nav-list>ul").delegate("li","mouseleave",function(){
    var num = $("#nav-ban>.nav>.nav-bg>.nav-list>ul>li").index(this);
    $("#nav-ban>.lbt>.list>dl").eq(num).hide();
  });   

  // 应季商品
  $("#yjsp>.kj-nav>ul>li").hover(function(){
    $(this).addClass("active").siblings().removeClass("active");
    var num = $("#yjsp>.kj-nav>ul>li").index(this);
    $("#yjsp>.kj-list>.kj-sp").eq(num).show().siblings().hide();
  });

  // 母婴之家
  $("#myzj>.kj-nav>ul>li").hover(function(){
    $(this).addClass("active").siblings().removeClass("active");
    var num = $("#myzj>.kj-nav>ul>li").index(this);
    $("#myzj>.kj-list>.kj-sp").eq(num).show().siblings().hide();
  });  

  // 厨房用品
  $("#cfyp>.kj-nav>ul>li").hover(function(){
    $(this).addClass("active").siblings().removeClass("active");
    var num = $("#cfyp>.kj-nav>ul>li").index(this);
    $("#cfyp>.kj-list>.kj-sp").eq(num).show().siblings().hide();
  });   

  // 生活必备
  $("#shbb>.kj-nav>ul>li").hover(function(){
    $(this).addClass("active").siblings().removeClass("active");
    var num = $("#shbb>.kj-nav>ul>li").index(this);
    $("#shbb>.kj-list>.kj-sp").eq(num).show().siblings().hide();
  }); 

  // 个性筛选
  $("#gxsx>.kj-nav>ul>li").hover(function(){
    $(this).addClass("active").siblings().removeClass("active");
    var num = $("#gxsx>.kj-nav>ul>li").index(this);
    $("#gxsx>.kj-list>.kj-sp").eq(num).show().siblings().hide();
  });

  // 推荐商品
  var i = 0;
  var clone = $("#tjsp>.tj-lbt>.tj-list>div").first().clone();
  $("#tjsp>.tj-lbt>.tj-list").append(clone);
  var size = $("#tjsp>.tj-lbt>.tj-list>div").size();
  var t = setInterval(moveL,3000);
  $("#tjsp>.kj-nav>.tjsp-jt>i").hover(function(){
    clearInterval(t);
  },function(){
    t = setInterval(moveL,3000);
  });

  $("#tjsp>.kj-nav>.tjsp-jt>.ar-right").click(function(){
    moveL();
  });
  // 向左动
  function moveL(){
    i++;
    if(i==size){
      $("#tjsp>.tj-lbt>.tj-list").css({left:0});
      i=1;
    }
    $("#tjsp>.tj-lbt>.tj-list").stop().animate({left:-i*1200},500);
  }

  $("#tjsp>.kj-nav>.tjsp-jt>.ar-left").click(function(){
    moveR();
  });  
  // 向右动
  function moveR(){
    i--;
    if(i==-1){
      $("#tjsp>.tj-lbt>.tj-list").css({left:-(size-1)*1200});
      i=size-2;
    }
    $("#tjsp>.tj-lbt>.tj-list").stop().animate({left:-i*1200},500);
  }

  // 电梯
  var $floors = $(".kj");
  $(window).scroll(function(){
    var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
    if(scrollTop>=670){
      $("#lift").show();
      $floors.each(function(i){
        var $f = $(this);
        var offsetTop=$f.offset().top;
        if(offsetTop<scrollTop+innerHeight/7){
          $("#lift>ul>li").eq(i).addClass("addcss").siblings().removeClass("addcss");
        }
      });      
    }else{
      $("#lift").hide();
    }
  });

  $lifts = $("#lift");
  $lifts.on("click","li",function(){
    var $li = $(this);
    var i = $li.index();
    var $f=$($floors[i]);
    var top=$f.offset().top;
    $("html,body").stop(true).animate({
      scrollTop:top
    },500);
  });

});