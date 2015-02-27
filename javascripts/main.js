$(document).ready(function() {
  
  //開啟menu
  $(".inner.right").mouseenter(function(){
  	$(this).find("ul").show("slow")
  }).mouseleave(function(){
  	$(this).find("ul").hide("slow")
  });

  //點擊menu移動
  $(".inner.right li").click(function(){
  	var goTo = $(this).attr("id");
  	$('html, body').animate({
       scrollTop: $("." + goTo).offset().top
  	}, 500);   
  })

  //繪製氣球
  var canvas = $('canvas')[0];

    canvas.width = 100;
    canvas.height = 200;
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.strokeStyle = "#73C7F5";
        ctx.fillStyle = "rgba(115,199,245,.5)";
        
    	ctx.beginPath();
        ctx.moveTo(75,25);
	    ctx.quadraticCurveTo(60,10,40,30);
	    ctx.quadraticCurveTo(25,50,40,80);
	    ctx.quadraticCurveTo(60,120,75,80);
	    ctx.quadraticCurveTo(90,50,75,25);
	    ctx.fill();
	    ctx.moveTo(60,100);
	    ctx.quadraticCurveTo(40,120,60,140);
	    ctx.quadraticCurveTo(80,160,40,200);
      	ctx.stroke();

    }
    $("canvas").click(function(){
		$('html, body').animate({
	     scrollTop: (0)
		}, 500);  

    })


});