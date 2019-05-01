/* 

index.js
*/

            "use strict"
            var msg = "Hello JavaScript";
            console.log(msg);
            var resultsDiv = document.getElementById("results");
            resultsDiv.innerHTML = "<p>This is from javascript </p>";

            console.log("msg is " + typeof(msg));
            console.log("resultsDiv is "+ typeof(resultsDiv));

            var none;
            console.log("none is" + typeof(none));


            var aNumber =0 ;
            console.log("aNumber  is " + typeof(aNumber));

            var trueFalse = false;
            console.log("trueFalse is " + typeof(trueFalse));

            //nonexistent =" this  shouldn't work"

            if(none == undefined){
            	console.log("none is undefined");
            }

            if(aNumber == "10")
            {
            	console.log("10 is 10");

            }

            if(aNumber === "10")
            {
            	console.log("10 is 10");
            	
            }



function showMsg(msg,more){
if(more){	console.log("showMsg:" +msg + more);
}
else {
	console.log("showMsg:" +msg);
}
}

showMsg("some Information");
showMsg("some Information","and even more");

var showIt = function (msg){
	console.log(msg);
}

showIt("some messsage");

function showItThen(msg,callback){
	showIt(msg);
	callback();

}

showItThen("showItthen called",function (){
console.log("callback called");
});

var inGlobal= true;

function testMe(){
	console.log("testMe(): " + inGlobal);

	var someMsg = "some messsage";
	console.log("testMe(): "+ someMsg);

}

console.log("testMe(): "+ someMsg);

testMe();