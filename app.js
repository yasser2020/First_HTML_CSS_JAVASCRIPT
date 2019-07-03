//alert("Hello from app.js");
var pics = [
	"imgs/kitty_bed.jpg",
	"imgs/kitty_basket.jpg", 
	"imgs/kitty_laptop.jpg",
	"imgs/kitty_door.jpg",
	"imgs/kitty_sink.jpg",
	"imgs/kitty_wall.jpg"
];
var btn=document.querySelector("button");
var img=document.querySelector("img");
var count=0;
btn.addEventListener("click",function(){
  var len=pics.length;
    if(count<len)
        {
            img.src=pics[count++];
            
        }
    else
        count=0;
    
    
});