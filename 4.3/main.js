//declar variable by id
const ele =document.getElementById("del");
const body =document.getElementById("body");
//delete the elememnt
//ele.remove();
//crete element insid htmlfile 
// 1- create body variable create elmen variable 
// -2-create element varabal title
// -3-conect body with elemennt
const title=document.createElement("h2")
//to add heder2  down the body: 
body.append(title);
//to add heder2 up the body ;
//body.prepend(title);
//add class to heder i create title class name prince :
title.classList.add("prince");
//add conntent to class  title:
title.innerText="اتعلم يا رايق";
//add id to heder2 named my id:
title.setAttribute("id","myid");


