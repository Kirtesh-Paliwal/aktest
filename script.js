$(function(){
    $(".mb").on("click", function(){
      if($(".menu").hasClass("active")){
        $(".menu").hasClass("active");
        $(this).find("a").html("<icon-icon name='menu-outline'></icon-icon>");
  
      }else{
        $(".menu").addClass("active");
        $(this).find("a").html("<icon-icon name='menu-outline'></icon-icon>");
  
  
      }
  
    });
     
    
  });