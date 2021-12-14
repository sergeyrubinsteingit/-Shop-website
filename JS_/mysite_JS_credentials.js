
var wH = window.innerHeight;
var usIp;
function getUserIP_(){
var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		usIp = this.responseText;
		}//eoif
	};//eof
	xhttp.open("GET", "http://api.ipify.org?format=json", true);
	xhttp.send();
}//eof
function setForumElements_(){
	console.log(usIp);
////////////////////////////////////////////////////
var entrD = document.createElement("div");
	entrD.setAttribute("class", "entrDv");
	
		document.getElementById("entrDv").appendChild(entrD);
		
var msgFld = document.getElementById("msgDiv_");
	
		if(msgFld !== null && msgFld.innerHTML === ""){
		alert("Please revise the comment field: it should be filled to post a comment."); return false;
		}
		else
		{
		entrD.innerHTML = "<div id=\"usTxtWrp\"><div id=\"usTxt\"> " + usIp.toString() 
		+ " wrote:  </div></div><div id=\"msgSpn\" style=\"padding-left:10px;\">TEST-" 
		+ document.getElementById("msgDiv_").innerText + "</div>";
		setScroll_();
		msgFld.innerHTML = "";
		}
}//eof
function initialSettings_(){
	document.getElementById("entrWrp").style.height = parseInt(wH * 0.6) + "px";
	document.getElementById("msgDiv_").contentEditable = false;
}//eof
function startThisCluster_(){
initialSettings_();
getUserIP_();
}//eof
function setScroll_(){
var entrWrCn = document.getElementById("entrWrp");
	entrWrCn.scrollTop = entrWrCn.scrollHeight;
}//eof	




var credent_flag = false;

function askCredentials_(req_type_){
// The function checks user's name and password; allows to user to write on Forum page.
console.log('askCredentials_');
var getJson, usNm, usPass, x, y;

getJson = JSON.parse(dataSrc);

var usNm = document.getElementById("entrUsn").value;
var usPass = document.getElementById("entrPass").value;
	if (req_type_ == 0) { document.getElementById("signD").style.display = "none"; credent_flag = true; return;}
	else if(req_type_ == 1){
	document.getElementById("signD").style.display = "table";
	}
	else if(req_type_ == 3){document.getElementById("signD").style.display = "none"; return credent_flag;}
	else if(req_type_ == 2){
		// alert("Check Join button")
		document.getElementById("signD").style.display = "none";
			for(var i = 0; i < getJson.length; i++) {
			var gtObj = getJson[i];
			var lstUsn = getJson[getJson.length-1].username_;
			var lstPass = getJson[getJson.length-1].password_;
			
				if(gtObj.username_ == usNm && gtObj.password_ == usPass){
				document.getElementById("msgDiv_").contentEditable = true;
				// document.getElementById("signD").style.display = "none"; 
				credent_flag = true; 
				return credent_flag;
				}//eoif
			}//eofor
				if(lstUsn != usNm && lstPass != usPass){
				alert("Invalid username and password"); credent_flag = false;
				return credent_flag;}//eoif
	}//eoif
}//eof

