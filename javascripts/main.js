$(document).ready(function() {
  console.log('----open-----')

  //開啟menu
  $(".inner.right").mouseenter(function(){
  	console.log('icon')
  	$(this).find("ul").show("slow")
  }).mouseleave(function(){
  	$(this).find("ul").hide("slow")
  })

  //照片放大
  // $('.about-me img,.company img').mouseover(function(){

  // });
	$("img[alt=avrilhsu]").mouseover(function(){
		console.log('ee')
		$(this).css("-webkit-tranform","scale(0.8,1.8)")
	});

  console.log('----close-----')
});