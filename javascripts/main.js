$(document).ready(function() {
  
  	//氣球亂跑
  	$(".canvas").mouseenter(function(){
		canvasMove();
  	})
	
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

    //照片點擊放大
    $(".photo img,.img-area img").mouseenter(function(){
    	var zoomInImg = $(this);
    	console.log(zoomInImg)
    	zoomInImg.addClass("img-zoomin");
    	setTimeout(function(){
    		zoomInImg.removeClass("img-zoomin");
    	},3000)
    })
});

//亂數產生氣球位置
function canvasMove (){
	var newLocationRight = Math.floor(Math.random() * (150 - 30 + 1)) + 30;
	var newLocationBottom = Math.floor(Math.random() * (350 - 100 + 1)) + 100;
	$( ".canvas" ).animate({
	    right: newLocationRight + "px",
	    bottom:  newLocationBottom + "px"
	  }, 1000);
}