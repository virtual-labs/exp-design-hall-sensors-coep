currentMasterJson={};
thicknessMasterJson={};
data = {};
dataJson = {};
currentArrayJson=[];
thicknessArrayJson=[];
var materialValue="";
var appCount=0;
var current="";
var materialSelection="";
var applicationSelection1="";
var applicationName="";
var fluxDensity;
var thickness=0;
var wrongCounter=0;
var arrCurrent=[];
var arrThickness=[];
//mainpage function

 function mainPage (){

	$("#canvas-div").html('');
	$("#canvas-div").html('<img src="images/halleffect.jpg" class="img-fluid" >');
	$("#centerText1").html("CONFIGURATION");
	 $('#applicationSelection').prop('hidden',false);
		$('#applicationType').prop('hidden',false);
	$("body").css("padding","0px 0px 0px 0px");
	
	var htm=''
	+'<div class="row">'
	   +'<div class="col-sm-6" id="labelMaterial" >'
	   +'<label class="labelstyle">Select material </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-6" id="materialSelection1" >'

	   +'<select  class="form-control selectConf"  id="materialSelection" style="height:auto;" disabled >'
	   +'<option value="-1">--- Select material --- </option>'
	   +'<option value="0" id="As" >As</option>'
	   +'<option value="1" id="Bi">Bi</option>'
	   +'<option value="2" id="C">C</option>'
	   +'<option value="3" id="Cu">Cu</option>'
	   +'<option value="4" id="Fe">Fe</option>'
	   +'<option value="5" id="Ge">Ge</option>'
	   +'<option value="6"  id="Si">Si</option>'
	   +'<option value="7" id="Sn">Sn</option>'
	   +'<option value="8" id="Te">Te</option>'
	   +'</select>'
	   +'</div>'
	   +'</div>'
	    +'<br>'
	
	
	
	
	+'<div class="row" id="fluxDensity">'
	+'</div>'
	    +'<br>'  
	   +'<div class="row " >'
	  
	   +'<div class="col-sm-6">'
	
	   +'<label class="labelstyle">Current(Ampere)</label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf"  id="current" style="height:auto;" disabled >'
	   +'<option value="-1" >--- Select Current --- </option>'
	   +'<option value="1" id="option1" >1.0  </option>'
	   +'<option value="1.5" id="option2"> 1.5</option>'
	   +'<option value="2"   id="option3">2.0 </option>'
	   +'<option value="2.5" id="option4" >2.5  </option>'
	   +'<option value="3"   id="option5">3.0</option>'
	   +'<option value="3.5" id="option6">3.5 </option>'
	   +'</select>'
	   +'</div>'
	  
	   +'</div>'
	  +'<br>'
	
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label for="meter">Thickness of the hall element(mm) </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf"  id="thickness" style="height:auto;"  disabled>'
	   +'<option value="-1" >--- Select Thickness --- </option>'
	   +'<option value="1" id="optiont1" >1.0  </option>'
	   +'<option value="1.5" id="optiont2">1.5</option>'
	   +'<option value="2.0" id="optiont3">2.0 </option>'
	   +'<option value="2.5" id="optiont4">2.5  </option>'
	   +'<option value="3.0" id="optiont5">3.0</option>'
	   +'<option value="3.5" id="optiont6">3.5 </option>'
	   +'</select>'
	   +'</div>'
	   +'</div>'
	  +'<br>'
	  
	  +'<div class="row">'
	  +'<div class="col-sm-6">'
	  +'</div>'
	   +'<div class="col-sm-6">'
	   +'<span id="error" style="color:red;font-weight:500;"></span>'
	   +'</div>'
	   +'</div>'
	   +'<br>'
	   +'<div class="row"  >'
	   +'<div class="col-sm-12" id="mimicbtnquesAns">'
	 +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" data-toggle="modal" data-target="#myModal1"  id="checkConfg" ><b>SIMULATION</b></button>'
	  +'</div>'
 +'</div>'
 + ' <!-- Modal -->'
			+ '<div class="modal fade" id="myModal1" role="dialog">'
			+ ' <div class="modal-dialog modal-md">'
			+ '    <div class="modal-content">'
			+ '     <div class="modal-header">'
			
			+ '       <h4 class="modal-title" id="msgName1">Message box</h4>'
			+ '       <button type="button" class="close" data-dismiss="modal"          style="color:#fff;">&times;</button>'
			+ '     </div>'
			+ '     <div class="modal-body" id="modelBody1">'
			+ '       <p id="modelMsg1">This is a small modal.</p>'
			+ '     </div>'
			+ '     <div class="modal-footer">'
			+ '       <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'
			+ '     </div>'
			+ '   </div>'
			+ ' </div>'
			+ '</div>'
			//model Close
	  
	   + '<div class="row"  id="CalculateActualFlow" hidden>'
		   +'<div class=" col-sm-5">'
	       +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Calculate hall sensor output (&micro;V) : </label>'
	       +'</div>'
           +'<div class="col-sm-4">'
	       +'<input type="text" id="ans" value="" style=margin:15px 10px;width:100%;"  class=" form-control" />'
	       +'</div>'
	       +'<div class="col-sm-3">'
	       +'<br><button type="submit" class="btn btn-danger" id="btnAnsCheck" style="width:100%;margin-top: -6px;" data-toggle="modal" data-target="#myModal" >Submit</button>'
	       +'</div>'
	       +'</div>'
	      
	       + ' <!-- Modal -->'
			+ '<div class="modal fade" id="myModal" role="dialog">'
			+ ' <div class="modal-dialog modal-md">'
			+ '    <div class="modal-content">'
			+ '     <div class="modal-header">'
			
			+ '       <h4 class="modal-title" id="msgName">Message box</h4>'
			+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
			+ '     </div>'
			+ '     <div class="modal-body" id="modelBody">'
			+ '       <p id="modelMsg">This is a small modal.</p>'
			+ '     </div>'
			+ '     <div class="modal-footer">'
			+ '       <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'
			+ '     </div>'
			+ '   </div>'
			+ ' </div>'
			+ '</div>'
			//model Close
	
  $("#main-div-conf").html(htm);
	
	
			$( document ).ready(function() {
				if(appCount!=0)
				{
					
					$("#materialSelection").prop('disabled',true);
					 $('#fluxDensity').prop('disabled',true);
					
				}
				$("#checkConfg").prop('disabled',true);
			});
			
			$('#thickness').change(function(){
				
				if($('#thickness').val()=="-1"){
						$("#error").html("Wrong configuration.");
						 $("#checkConfg").prop('disabled',true);	
					}
					else{
				
				$("#checkConfg").prop('disabled',false);
					}
				
			});
			
			$('#current').change(function(){
				if($('#current').val()=="-1"){
					$("#error").html("Wrong configuration.");
						 $("#checkConfg").prop('disabled',true);	
					}
					else{
				
				$("#checkConfg").prop('disabled',false);
					}
				
			});
		$('#applicationSelection1').change(function(){
			applicationSelection=$('#applicationSelection1').val();
			
			if(applicationSelection=="1"){
				
					$("#current").prop('disabled',false);
					$("#thickness").prop('disabled',true);
					$('#applicationSelection1').prop('disabled',true);
					$('#materialSelection').prop('disabled',false);
			}
			else if(applicationSelection=="2"){
					$("#current").prop('disabled',true);
					$("#thickness").prop('disabled',false);
					$('#applicationSelection1').prop('disabled',true);
					$('#materialSelection').prop('disabled',false);
			}
			else if(applicationSelection==0){
				$("#error").html("Select application type");
				   $("#materialSelection,#current,#fluxDensity1,#thickness").prop('disabled',true);
				  
				   
			   }
			
			
			
			
		});
		 $('#materialSelection').change(function(){
			 
			 materialValue=$("#materialSelection").children(":selected").attr("value");
			 
			 
			 if(materialValue=="-1")
				 {
				 $("#modelMsg").html("<b class='boldTextRed'>Select material type</b> ");
				 }
			 else{
				 $('#thickness').prop('disabled',false);
				 $('#current').prop('disabled',false);
				 
				 materialValue=parseInt( $('#materialSelection').val());
//				 $('#fluxDensity').prop('hidden',false);
				 htm='<div class="col-sm-6">'
					 +'<label class="labelstyle">Flux density (weber/m<sup>2</sup>) </label>'
					 +'</div>'
					 +'<div class="col-sm-6" >'
					 +'<select  class="form-control selectConf"   style="height:auto;" id="fluxDensity1" >'
					
					  for(i=0;i<masterJsonArr[materialValue].range.length;i++){
						  if(i==0){
							  htm+='<option value="-1">Select flux density </option>'
						  }
						  htm+='<option value="'+masterJsonArr[materialValue].range[i]+'" >'+masterJsonArr[materialValue].range[i]+'  </option>'
					  } 
				     htm+='</select>'
				     +'</div>'
				     $('#fluxDensity').html(htm);
				 
			 }
			 
			 });
	  var  totalAttempt; 
	   $("#checkConfg").click(function(){
		   totalAttempt=0; 
		           current=$("#current").val();
				   thickness=$("#thickness").val();
				   fluxDensity=$("#fluxDensity1").val();
				   materialIdName=$("#materialSelection").children(":selected").attr("id");
				   materialSelection= $("#materialSelection").val();
				   // console.log("current "+current);
					//console.log("thickness "+thickness);
					//console.log("fluxDensity "+fluxDensity);
					//console.log("materialSelection "+materialSelection);
					
					if(current=="-1"||thickness=="-1"||fluxDensity=="-1"||materialSelection=="-1"){
						 $("#checkConfg").prop('disabled',true);
						$("#error").html("Wrong configuration. ");
						
					}
					else{
				   
				   $("#checkConfg").prop('disabled',true);	
				   $("#applicationSelection1").prop('disabled',true);
				 
				   
					
				   if(applicationSelection==1)
					   {
						   applicationName="CURRENT";
						   $("#materialSelection,#current,#fluxDensity1,#thickness,#optionCurrent").prop('disabled',true);
						   
						   current1=$("#current").children(":selected").attr("id");
						   $("#current option[id="+current1+"]").css("background-color","#dacecf");
						   
						   $("#current option[id="+current1+"]").attr("disabled",true);
						   resultFunction1();
						   
					   }
				   else if(applicationSelection==2)
				   {
					   applicationName="THICKNESS";
					  $("#materialSelection,#current,#fluxDensity1,#thickness,#optionThinkness").prop('disabled',true);
					   
					   
					   current1=$("#thickness").children(":selected").attr("id");
//					   console.log("current 1 thickness"+current1);
					   
						$("#thickness option[id="+current1+"]").attr("disabled",true);
						$("#thickness option[id="+current1+"]").css("background-color","#dacecf");
						resultFunction2();
				   }
				   else if(applicationSelection==0){
					   $("#error").html("Select application type ");
					   $("#materialSelection,#current,#fluxDensity1,#thickness").prop('disabled',true);
					  
					   
				   }
				  
			 $("#error").html("");
		   mimic();
		  
		   $("#flowAns").val('');
			$("body").css("padding","0px 0px 0px 0px");
			
					}
					resultMasterJsonCurrent={};
					resultMasterJsonThickness={};
					function resultFunction1()
					{
						 tempJson={};
							tempJson.applicationName="CURRENT";
							tempJson.thickness=thickness;
							tempJson.fluxDensity=fluxDensity;
							tempJson.materialIdName=materialIdName;
							resultMasterJson.currentStage=tempJson;
						//	console.log(resultMasterJson);
					}
					function resultFunction2()
					{
						 tempJson={};
							tempJson.applicationName="THICKNESS";
							tempJson.current=current;
							tempJson.materialIdName=materialIdName;
							tempJson.fluxDensity=fluxDensity;
							resultMasterJson.thicknessStage=tempJson;
						//	console.log(resultMasterJson);
					}
	   });
	   
	   
	     var id=0;
		 var kh;
		 var t;
			
		  $("#btnAnsCheck").click(function() {
			  $("#modelMsg").html("");
			  kh=0;
			  t=0;
				$("body").css("padding","0px 0px 0px 0px");
			   var flowAns = $("#ans").val();
	
				if(materialSelection==0)
				{
					kh=4.52*Math.pow(10,-9);
				}
				else if(materialSelection==1)
				{
					kh=-1*Math.pow(10,-6);
				}
				else if(materialSelection==2)
				{
					kh=-11.73*Math.pow(10,-9);
				}
				else if(materialSelection==3)
				{
					kh=-52*Math.pow(10,-12);
				}
				else if(materialSelection==4)
				{
					kh=1.1*Math.pow(10,-9);
				}
				
				else if(materialSelection==5)
				{
					kh=-8*Math.pow(10,-3);
				}
				else if(materialSelection==6)
				{
					kh=4.1*Math.pow(10,-6);
				}
				else if(materialSelection==7)
				{
					kh=-2*Math.pow(10,-12);
				}
				else if(materialSelection==8)
				{
					kh=53*Math.pow(10,-6);
				}
				//Thinkness
				t=thickness*Math.pow(10,-3);
				
//				console.log("thinckness  "+t);
				temp12=kh*fluxDensity*current/t;
				
				temp123=temp12*Math.pow(10,6);
				finalAns1=temp123.toFixed(4);
			//	console.log("finalAns  "+finalAns1);
				finalAns=parseFloat(finalAns1);
				
			//	console.log("finalAns   "+ finalAns);
				$("#modelMsg").html("");
				if(flowAns=="" || isAlphabetical(flowAns)){
					$("#modelBody").css("color", "red");
					$("#modelMsg").html("Enter numeric value.");
					
				}
				else
					{
					if(flowAns=="" || isAlphabetical(flowAns)){
						$("#modelBody").css("color", "red");
						$("#modelMsg").html("Enter numeric value.");
						
					}
					if (id <= 3) {
						if (flowAns == finalAns) {
							 $("#msgName").html("MESSAGE BOX ");
								$("#modelBody").css("color", "#795548");
								$("#modelBody").css("font-weight", "600");
								 $("#modelBody").html("TAKE ANOTHER READING FOR "+applicationName+".");
							
//							 $("#modelBody").css("color", "#000");
//							$("#modelMsg").html("Change the "+applicationName);
							
							$("#CalculateActualFlow").prop("hidden",true);
							$("#checkConfg").prop('disabled',true);
							if(applicationSelection==1)
							{
							addtocurrentMasterJson();
							tableCreate(currentMasterJson);
							id=0;
							}
							else if(applicationSelection==2)
							{
								addtothicknessMasterJson();
								tableCreate(thicknessMasterJson);
								id=0;
							}
							
						} else if (flowAns != finalAns) {
							
							
							totalAttempt++;
						 $("#msgName").html("MESSAGE BOX ");
							 $("#modelBody").css("color", "red");
							$("#modelBody").html("<b>Entered value is incorrect, Let us try again. </b>");
							
						
						}


					} else if (id == 4) {
						  $("#msgName").html("FORMULA ");
						 totalAttempt++;
						 modelBody='<div class="col-sm-12 formula" > V<sub>H</sub> = K<sub>H</sub>BI/t</div>'
							 +'<span>Where ,</span><br>' 
						 +'<span>V<sub>H</sub> -  hall voltage generated</span><br>'
						 +'<span>I - current (ampere)</span><br>'
						 +'<span>B -  Flux density (weber / m<sup>2</sup>)</span><br>'
						 +'<span>t - thickness of the hall element (mm)</span><br>'
						 +'<span>K<sub>H</sub>-  hall coefficient ( V-m/A-Wbm<sup>-2</sup>)</span><br>'
						 
						 $("#modelBody").html(modelBody);
						$("#modelBody").css("color", "black");
						$("#modelBody").css("font-weight", "600");
						
//						$("#modelMsg").html(" ");
						
					} else {
						flowAns = $("#ans").val();
//						flow = flowAns.toFixed(2);
						if (flowAns == finalAns) {
							
							
							$("#modelBody").css("color", "#795548");
							$("#modelBody").css("font-weight", "600");
							$("#modelBody").html("TAKE ANOTHER READING FOR "+applicationName+".");
							$("#CalculateActualFlow").prop("hidden",true);
							$("#checkConfg").prop('disabled',true);
							if(applicationSelection==1)
							{
							addtocurrentMasterJson();
							tableCreate(currentMasterJson);
							id=0;
							}
							else if(applicationSelection==2)
							{
								addtothicknessMasterJson();
								tableCreate(thicknessMasterJson);
								id=0;
							}
							
						} else {
							totalAttempt++;
							 $("#msgName").html("MESSAGE BOX ");
							$("#modelBody").css("color", "blue");
							 $("#modelBody").html("<b>Correct answer is " + finalAns+"</b>");
							
							

						}
					}
					id++;
					}
			
					function addtocurrentMasterJson()
					{
							
						tempJson={};	
						tempJson.material=materialIdName;
						tempJson.applicationSelection = applicationSelection;
						tempJson.current = current;
						
						tempJson.thickness = thickness;
						tempJson.fluxDensity = fluxDensity;
						tempJson.VoltageOutput = finalAns;
						currentArrayJson.push(tempJson);
						currentMasterJson.demo = currentArrayJson;
						
						
						var tempJson={};
						tempJson.value=current;
						tempJson.totalAttempt=parseInt(1+totalAttempt);
						arrCurrent.push(tempJson);
						resultMasterJson.roundCurrent=arrCurrent;
					//	console.log(resultMasterJson);
						
					}
					function addtothicknessMasterJson()
					{
							
						tempJson={};	
						tempJson.material=materialIdName;
						tempJson.applicationSelection = applicationSelection;
						tempJson.current = current;
						
						tempJson.thickness = thickness;
						tempJson.fluxDensity = fluxDensity;
						tempJson.VoltageOutput = finalAns;
						thicknessArrayJson.push(tempJson);
						thicknessMasterJson.demo = thicknessArrayJson;
						
						var tempJson={};
						tempJson.value=thickness;
						tempJson.totalAttempt=parseInt(1+totalAttempt);
						
						arrThickness.push(tempJson);
						resultMasterJson.roundThickness=arrThickness;
						//console.log(resultMasterJson);
//						tableCreate(masterJson);
						
					}
				});
		 
	 
	  
}	
		
		
	   
