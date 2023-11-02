$(document).ready(function(){

  //각 주요 섹션의 top값을 가져온다.
  
  const aboutTop = $("#about").offset().top;

  const portTop = $("#portfolio").offset().top;

  const port2Top = $("#port2").offset().top;

  const port3Top = $("#port3").offset().top;

  const eventTop = $("#event").offset().top;

  const contactTop = $("#contact").offset().top;

  let scrollTop = 0;

  const winHeight = $(window).height();

  $(window).scroll(function(){

    scrollTop = $(window).scrollTop()
    
    if(scrollTop >= winHeight - 100){
      $("#top nav").addClass("act");
    }
    else {
      $("#top nav").removeClass("act");
      $("#menu a").eq(0).addClass("act").siblings().removeAttr('class');
    }

    if (scrollTop >= aboutTop - 50) {
      $("#menu a").eq(1).addClass("act").siblings().removeAttr('class');  
    }

    if (scrollTop >= portTop - 200) {
      $("#port1").addClass("active");
      $("#menu a").eq(2).addClass("act").siblings().removeAttr('class');
    }
    else {
      $("#port1").removeClass("active");
    }


    if (scrollTop >= port2Top - 200) {
      $("#port2 div").addClass("active");
    }
    else {
      $("#port2 div").removeClass("active");
    }

    if (scrollTop >= port3Top -200) {
      $("#port3 div").addClass("active");
    }
    else {
      $("#port3 div").removeClass("active");
    }

    if (scrollTop >= eventTop - 100) {
      $("#menu a").eq(3).addClass("act").siblings().removeAttr('class');
    }

    if (scrollTop >= contactTop) {
      $("#menu a").eq(4).addClass("act").siblings().removeAttr('class');
    }

  });

  //타자 효과 
  const $typing = "안녕하세요. \n김미지의 포트폴리오입니다.";
  // \n 은 줄을 바꾼다는 윈도우 명령어 이다. 
  const tyLen = $typing.length;

  let i = 0;
  let txt = "";
  
  function type () {
    if ( i < tyLen ) {
      txt += $typing[i]; //index 0에는 "안"
      //제이쿼리로는 줄바꿈이 안된다. 
      $("#typing").text(txt);
      //스크립트로 줄바꿈을 한다.
      document.querySelector("#typing").innerText = txt;
      i++;
      setTimeout(type, 100);
  // setTimeout(함수명, 일정시간){}은 일회성으로 한 번만 호출한다.
    }
  }

  type();

  //상단 메뉴 활성화 유지하는 프로그래밍 
  $("#menu a").click(function(){
    $(this).addClass("act").siblings().removeClass("act");
  })


  //메뉴에서 [포트폴리오] 클릭
  $("#menu a:eq(2)").click(function(){
    // setTimeout(show,500);
    function show () {
      $("#port1").addClass("active");
    }
  })

  
  $("#event button").click(function(){
    //클릭한 이미지의 주소 정보를 가져온다.
    const imgSrc_1 = $(this).children("img").attr("src");
    const imgSrc_2 = imgSrc_1.replace(".jpg","_big.jpg");
    // alert(imgSrc_2);
    const imgAlt = $(this).children("img").attr("alt");
    // alert(imgAlt);

    //큰 팝업 이미지에 해당 정보를 넣는다.
    $("#popup img").attr({"src":imgSrc_2, "alt":imgAlt});
    $("#popup h3").text(imgAlt);
    $("body").css("overflow-y", "hidden");
    $("#popup").fadeIn(800);
  })

  $("#popup").click(function(){
    $(this).fadeOut();
    $("body").css("overflow-y", "auto");
  })
  
  //0~800px 넓이에서 프로그래밍 시작

  if($(window).width() <= 800) {

    $("#top p").text("KIMMIJI Portfolio")

    $("#top button").click(function(){
      if ($(this).text() == "menu") {
        $(this).text("close");
        $("#menu").animate({left:0});
      }
      else {
        $("#top button").text("menu");
        $("#menu").animate({left:"-100vw"},100);
      }
   });

    
   $("#menu a").click(function(){
      $("#menu").animate({left:"-100vw"},100);
      $("#top button").text("menu");
   });

    $(window).scroll(function(){

      scrollTop = $(window).scrollTop()
      
      if(scrollTop >= winHeight){
        $("#top nav").addClass("act");
      }

    });

  }
  //0~800px 넓이 프로그래밍 끝
  
});
