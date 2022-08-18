
let mybutton=document.getElementById('goo up');



window.onscroll=function(){
'use strict';
if (window.pageYOffset>=900){
    mybutton.style.display='block';
}else{
    mybutton.style.display='none';

}


} 
mybutton.onclick= function(){

  'use strict';
  
  window.scrollTo(0,0);
}