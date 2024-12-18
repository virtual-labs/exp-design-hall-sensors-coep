
function tableCreate(masterJson)		
{
			if(applicationName=="CURRENT"){
				 $('#current').prop('disabled',false);
			}
			else if(applicationName=="THICKNESS")
				{
				 $("#thickness").prop('disabled',false);
				}
//			console.log(masterJson);
			var tableMainDiv=""
					
					+ '<div class="well well-lg"  style="    overflow: scroll;">'
					+'<center class="blink"> TAKE ALL '+applicationName+' READINGS </center>'
					+'<center><b>Material Type : '+masterJson.demo[0].material+'</b></center>'
				    +'<table class="table  table-bordered table-hover" >'
					+ ' <thead>'

					+ '  <tr>'
					+ '  <th scope="col"><center>Current(ampere)</center></th>'
					+ '   <th scope="col"><center >Thickness(mm) </center></th>'
					+ '  <th scope="col"><center>flux density(weber/m<sup>2</sup>)</center></th>'
					+ '  <th scope="col"><center>Voltage output(&micro;V)</center></th>'
					
					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
				for (var i = 0; i < masterJson.demo.length; i++) {
					tableMainDiv += '<tr>'
								+'   <td><center style="color:red;">' + masterJson.demo[i].current + '</center></td>'
								+' <td><center style="color:red;">' + masterJson.demo[i].thickness + '</center></td>'
								+ ' <td><center>' + masterJson.demo[i].fluxDensity + '</center></td>'
						        + '<td><center>' + masterJson.demo[i].VoltageOutput + '</center></td>'
						        + ' </tr>'
				}
				tableMainDiv += ' </tbody>'
					 + '  </table>'
					 + ' </div>'
					
					 if(i==6)
						 {
//						 console.log('appCount'+appCount);
						 if(appCount==0){
							 $("#modelBody").html("SELECT ANOTHER APPLICATION");
							 tableMainDiv +='<button type="button" class="btn btn-danger" id="continue" style="width:100%;margin-top: -6px;"  >SELECT ANOTHER APPLICATION</button>'	
													 
						 }
						 else
							 {
								 $("#current").prop("disabled",true);
							$("#thickness").prop("disabled",true);	
							 $("#modelBody").html("GO TO NEXT LEVEL. ");
							 $(".blink").prop('hidden',true);
							 tableMainDiv +='<button type="button" class="btn btn-danger" id="graph" style="width:100%;margin-top: -6px;"  >SHOW TABLE AND GRAPH</button>'	 
						
//							 $("#modelBody").html('<img src="images/cong.gif" class="img-fluid" > ');
							 $("#checkConfg").prop('disabled',true);

							 } 
						 
				      }
				
				$("#tableDesign").html(tableMainDiv);
				$("#CalculateActualFlow").prop("hidden",true);
				$("#checkConfg").prop('disabled',true);
				$("#graph").click(function() {
					
					$("#main-div1").prop("hidden",true);
					tableAndGraph();
//					console.log("rdfgffh");
				});
				$("#continue").click(function() {

					appCount++;
					if(appCount==1)
					{mainPage();
						if(applicationSelection==1){
							$("#current").prop('disabled',true);
							$("#thickness").prop('disabled',true);
						}
						else if(applicationSelection==2){
							$("#current").prop('disabled',true);
							$("#thickness").prop('disabled',true);
							}
						
						$("#applicationSelection1").prop('disabled',false);
						$("#tableDesign").html("");
//						$("#main-div-conf").html("");
						$("#canvas-div").html("<img src='images/halleffect.jpg' class='img-fluid' >");
					}
					
			});
}