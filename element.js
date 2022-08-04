var fn=createlable("label","for","first","Firstname")
var br1=linebreak("br")
var infn=createinput("input","type","first","id","first")
var br2=linebreak("br")
var ln=createlable("label","for","last","Lastname")
var br3=linebreak("br")
var inln=createinput("input","type","last","id","last")
var br4=linebreak("br")
var email=createlable("label","for","email","Email")
var br5=linebreak("br")
var inpmail=createinput("input","type","email","id","email")
var br6=linebreak("br")
var phno=createlable("label","for","number","Phonenumber")
var br7=linebreak("br")
var inphno=createinput("input","type","number","id","number")
var br8=linebreak("br")
document.body.append(fn,br1,infn,br2,ln,br3,inln,br4,email,br5,inpmail,br6,phno,br7,inphno,br8)


function createlable(tagname,atrrname,atrrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(atrrname,atrrvalue);
    ele.innerHTML=content;
    return ele
}
function createinput(tagname1,atrrname2,atrrvalue2,atrrname1,atrrvalue1){
    var ele1=document.createElement(tagname1);
    ele1.setAttribute(atrrname2,atrrvalue2);
    ele1.setAttribute(atrrname1,atrrvalue1);
   return ele1
}
function linebreak(breker){
    var ele2=document.createElement(breker);
    return ele2
}
function button(){
    let result=document.querySelectorAll(input)
    console.log(result);
}