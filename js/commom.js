

function setTab(name,cursel,n){
	for(i=1;i<=n;i++){
		var menu=$("#"+name+i);
		var con =$("#con_"+name+"_"+i);
		if(i==cursel){
			menu.attr("class","hover");
			con.show();
		}else{	 
			menu.attr("class","");
			con.hide();
		}
	}
}

function setCookie(name,value)
{
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

//读取cookies
function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
 
    if(arr=document.cookie.match(reg))
 
        return unescape(arr[2]);
    else
        return null;
}

//删除cookies
function delCookie(name)
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}





/* 随机数 */
function get_rndnum(n) {
	var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	var res = "";
	for(var i = 0; i < n ; i ++) {
		var id = Math.ceil(Math.random()*35);
		res += chars[id];
	}
	return res;
}




//Array.forEach implementation for IE support..
//https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/forEach
if (!Array.prototype.forEach) {
	Array.prototype.forEach = function(callback, thisArg) {
		var T, k;
		if (this == null) {
			throw new TypeError(" this is null or not defined");
		}
		var O = Object(this);
		var len = O.length >>> 0; // Hack to convert O.length to a UInt32
		if ({}.toString.call(callback) != "[object Function]") {
			throw new TypeError(callback + " is not a function");
		}
		if (thisArg) {
			T = thisArg;
		}
		k = 0;
		while (k < len) {
			var kValue;
			if (k in O) {
				kValue = O[k];
				callback.call(T, kValue, k, O);
			}
			k++;
		}
	};
}

function equals(str1, str2)    
{    
    if(str1 == str2)    
    {    
        return true;    
    }    
    return false;    
} 


function matchHeight(obj,point,addHeight){
	obj=$(obj);
	height=obj.width()*point;
	obj.height(height);
	if(addHeight>0){
		height=height+addHeight;
		obj.parent("li").height(height);
	}
}


function validatemobile(mobile) 
{ 
   if(mobile.length==0) 
   { 
	  return false; 
   }     
   if(mobile.length!=11) 
   { 
	   return false; 
   } 
	
   var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1}))|(18[0-9]{1}))+\d{8})$/; 
   if(!myreg.test(mobile)) 
   { 
	   return false; 
   } 
   
   return true;
} 

