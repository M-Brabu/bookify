var closerbtn=document.getElementById("closerbtn")
var popup=document.getElementById("popup")
var overlayer=document.getElementById("overlayer")
var author=document.getElementById("author")
var title=document.getElementById("title")
var details=document.getElementById("details")
var des=document.getElementById("des")
var img=document.getElementById("imager")
function closer(){
    overlayer.style.display="none"
    popup.style.display="none"
}
function adder(){
   overlayer.style.display="block"
   popup.style.display="block"  
  
}
function reader(){
 var authorv=author.value
 var titlev=title.value
 var desv=des.value
 var imgv=img.files[0];
   var det=`<div style="padding:15px; margin:15px; background-color:black; border-radius:10px;"><h1>${titlev}</h1>
   <h3>${authorv}</h3><p>${desv}</p><button id="detbut" onclick='deleter(event)'>delete</button></div>`
   var ro=new FileReader()
   if(imgv){
   ro.onload=function(e){
   var det=`<div style="padding:15px; margin:15px; background-color:black; border-radius:10px;"><h1>${titlev}</h1>
   <h3>${authorv}</h3><p>${desv}</p><img style="width:100px;height:100px;"src='${e.target.result}'><br><button id="detbut" onclick='deleter(event)'>delete</button></div>`
   details.innerHTML=details.innerHTML+det
   }
   ro.readAsDataURL(imgv)
   }
   else{
      var det=`<div style="padding:15px; margin:15px; background-color:black; border-radius:10px;"><h1>${titlev}</h1>
   <h3>${authorv}</h3><p>${desv}</p><img style=""src=''>No image uploaded<br><button id="detbut" onclick='deleter(event)'>delete</button></div>`
   details.innerHTML=details.innerHTML+det
   }
}
function deleter(event){
      event.target.closest("div").remove()
}
