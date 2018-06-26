$(document).ready(function() {
  var soundBreak = $("#soundBreak")[0];
  var soundTimer=$("#soundTimer")[0];
  var soundReset=$("#soundReset")[0];
  var count = parseInt($("#num").html());
  var breakTime=parseInt($("#breakNum").html());
  //console.log(count);
  $("#reset").hide();
  //Session time
  $("#start").click(function(){
    soundReset.play();
    var counter=setInterval(timer,1000);
    count *=60;
    breakTime*=60;

    function timer(){
      //hiding variables
      $("#start,#minusClock,#plusClock,#minusBreak,#plusBreak,#breakNum,#title1,#title2").hide();
      $("#timeType").css({"font-size":"50px"});
      $("#timeType").css({"color":"red"});
      $("#timeType").html("Work Time:");
      $("#num").show();
     
      count-=1;
      if (count===0){
        soundTimer.play();
        clearInterval(counter);
        var startBreak=setInterval(breakTimer,1000);
        $("#num").hide(count);
      }
      if(count%60>=10){
        $("#num").css({"font-size":"65px"});
        $("#num").html(Math.floor(count/60)+":"+count%60);
      }
      else{
        $("#num").css({"font-size":"65px"});
        $("#num").html(Math.floor(count/60)+":"+"0"+count%60);
      }


      function breakTimer(){
        $("#timeType").html("Break Time:");
        $("#breakNum").show();
        breakTime-=1;
        if(breakTime===0){
          clearInterval(startBreak)
          soundBreak.play();
          $("#reset").show();
          $("#breakNum,#timeType").hide();
        }
        if(breakTime%60>=10){
          $("#breakNum").css({"font-size":"65px"});
          $("#breakNum").html(Math.floor(breakTime/60)+":"+breakTime%60);
        }
        else{
          $("#breakNum").css({"font-size":"65px"}); $("#breakNum").html(Math.floor(breakTime/60)+":"+"0"+breakTime%60);


        }

      }
    }  
  });
  $("#reset").click(function(){
    count=1;
    breakTime=1;
    soundReset.play();
    $("#num").html(count);
    $("#breakNum").html(breakTime);
    $("#start,#minusClock,#plusClock,#breakNum,#num,#title1,#title2,#minusBreak,#plusBreak").show();
    $("#reset,#timeType").hide();
  });
  $("#minusClock").click(function() {
    if (count > 1) {
      count -= 1;
      $("#num").html(count);
      //console.log(count);
    }
  });
  $("#plusClock").click(function() {
    count += 1;
    $("#num").html(count);
    // console.log(count);
  });
  //Break Time
  $("#minusBreak").click(function() {
    if (breakTime > 1) {
      breakTime -= 1;
      $("#breakNum").html(breakTime);
      //  console.log(count);
    }
  });
  $("#plusBreak").click(function() {
    breakTime += 1;
    $("#breakNum").html(breakTime);
    console.log(count);
  });
});