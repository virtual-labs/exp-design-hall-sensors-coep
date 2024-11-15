function Procedure(){
	$("body").css("padding","0px");
	var htm=''
	
	+'<h4 style="color:#000;font-weight: 700;">Application type : Measurement of current</h4><br>'

+' Step 1 : Configure hall sensor parameters material, flux density, current and thickness.<br>' 

+' Step 2 : Click on "simulation" button.<br>'

+' Step 3 : Click on green button to start mimic.<br>'

+' Step 4 : Calculate hall sensor output for change in current.<br>'

+' Step 5 : Enter the answer in textbox and click on "Submit" button.<br>'

+' Step 6 : Repeat the above steps for five readings.<br>'

+' Step 7 : Observe above sensor output for diffrent material.<br><br>'

+'<h4 style="color:#000;font-weight: 700;">Application type : Measurement of thickness</h4><br>'

+' Step 8 : Select another application type for thickness.<br>'

+' Step 9 : Repeat Steps 1 to Step 5 for change in thickness.<br>'

+' Step 10 : To get observation table and graph click on "Show Result" button.<br>'
$("#procedure12").html(htm); 
}
