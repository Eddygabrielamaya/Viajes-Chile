
$ (document).scroll( function(e){
const y = $("html").scrollTop();
if(y > 800) $("nav").addClass("nav-black")
else $("nav").removeClass("nav-black") 
})