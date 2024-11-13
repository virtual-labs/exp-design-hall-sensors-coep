function result(){
	$("#saveAsJpg").prop("hidden",false);
	$("#result").prop("hidden",true);
	htm=''
		+'<div class="row">'
		+'<div class="col-sm-2">'
		+'</div>'
		+'<div class="col-sm-8 nameTitle" style="background-color:#304250">'
		+'<span>'
		+'<h3><center style="font-weight: bold;">HALL SENSOR</center></h3>'

		+'</span>'
		+'</div>'
		+'<div class="col-sm-2">'
		+'</div>'
		+'</div>'
		
		+'<div class="row">'
		+'<div class="col-sm-3">'
		+'</div>'
		+'<div class="col-sm-6 " style="">'
		+'<span>'
		+'<h6><center style="font-weight: bold;border-style: dashed;" class="blink">Simulation completed successfully</center></h6>'
//		+'<br><h6><center style="font-weight: bold;">Simulation completed .</center></h6>'
		+'</span>'
		+'</div>'
		+'<div class="col-sm-1">'
		+'</div>'
		+'<div class="col-sm-2">'
		+'   <p><b> Date: <span id="currentDate"></span></b></p>'
		+'     <p><b> Time: <span id="currentTime"></span></b></p>'
	   
		+'</div>'
		+'</div>'
		
		+'<div class="row">'
		+'<div class="col-sm-1">'
		+'</div>'
		+'<div class="col-sm-10">'
		+'</div>'
		+'<div class="col-sm-1">'
		+'</div>'
		+'</div>'
		+'<div class="row">'
		+'<div class="col-sm-4">'
		+'		 <table class="table table-bordered" style=" vertical-align: middle;">'
		+'    <thead class="thead" style="background-color: #445f66;color: #fff;">'
		+'      <tr>'
		+'        <th>COMPETENCY (HALL SENSOR)</th>'
		+'        <th>STATUS</th>'


		+'      </tr>'
		+'    </thead>'
		+'    <tbody>'
		+'      <tr>'
		+'        <td ><span class="stageLabel">Basic Knowledge</span></td>'
		+'        <td id="basicKnowledge">'
		
		+'       </td>'
		+'      </tr>'
		+'      <tr>'
		+'        <td><span class="stageLabel">Configuration</span></td>'
		+'        <td>'
		+'         <div class="alert alert-success attainedText">'
	    +'         <center><strong>Attained</strong> </center>'
	     +'       </div>'
		+'       </td>'
		+'      </tr>'
		+'      <tr>'
		+'        <td><span class="stageLabel">Mimic</span></td>'
		+'        <td>'
		+'         <div class="alert alert-success attainedText">'
	    +'         <center><strong>Attained</strong> </center>'
	     +'       </div>'
		+'       </td>'
		+'      </tr>'
		+'      <tr>'
		+'        <td><span class="stageLabel">Calculation </span></td>'
		+'        <td id="calcuationAtt">'
		
		+'       </td>'
		+'      </tr>'
		+'      <tr>'
		+'        <td><span class="stageLabel">Observation</span></td>'
		+'        <td>'
		+'         <div class="alert alert-success attainedText">'
	    +'         <center><strong>Attained</strong> </center>'
	     +'       </div>'
		+'       </td>'
		+'      </tr>'
		+'    </tbody>'
		+'  </table>'
		+'</div>'
		+'<div class="col-sm-4" id="graphDiv" style="overflow: hidden;border-style: groove">'
		
		+'</div>'
        +'<div class="col-sm-4">'
        +' <div class="panel panel-default">'
        +' <div class="panel-heading"><center><b style="color:#fff;">BASIC KNOWLEDGE</b></center></div>'
        +' <div class="panel-body">'
        +'<div class="row">'
        +'<div class="col-sm-4">'
//        +'<center><img src="images/vertical_line1.png"></img></center>'
        +' <div class="panel panel-default">'
        +' <div class="panel-heading"><center class="subTitle">Total Question</center></div>'
        +'<div class="panel-body">'
        +' <div class="alert alert-warning " >'
        +' <center><strong>5</strong> </center>'
        +'</div>'
        +'</div>'
        +' </div>'
        +'</div>'
        +'<div class="col-sm-4">'
//        +'<center><img src="images/vertical_line1.png"></img></center>'
        +' <div class="panel panel-default">'
        +'  <div class="panel-heading"><center class="subTitle">Correct Answer</center></div>'
        +'  <div class="panel-body">'
        +' <div class="alert alert-success" >'
        +' <center><strong>'+resultMasterJson.question.correctQuestion+'</strong> </center>'
        +'</div>'
       +'</div>'
        +' </div>'
        +'</div>'
        +'<div class="col-sm-4">'
//        +'<center><img src="images/vertical_line1.png"></img></center>'
        +' <div class="panel panel-default">'
        +' <div class="panel-heading "><center class="subTitle">Wrong Answer</center></div>'
        +'  <div class="panel-body">'
        +' <div class="alert alert-danger">'
        +' <center><strong>'+(5-resultMasterJson.question.correctQuestion)+'</strong> </center>'
        +'</div>'
       +'</div>'
        +' </div>'
        +'</div>'
        +'</div>'
        +'</div>'
        +' </div>'
        +' </div>'
		+'</div>'
		+'</div>'
		+'<br>'
		+'<div class="row">'
		+'<div class="col-sm-6" style="border-style: dashed;border-color: lightgray;">'
		+'<h4><center class="appTitle"  ><b>APPLICATION TYPE -</b> <b style=" font-weight: 500; color: #e0ce97;">CURRENT</b></center></h4>'
		+'<div class="row">'
		+'<div class="col-sm-4">'
		+'<h6><center class="appTitle" style="background-color:#4b4242;font-weight: bold;">Material Type - <b style=" font-weight: bold; color: #e0ce97;">'+resultMasterJson.currentStage.materialIdName+'</b></center></h6>'
		+'</div>'
		+'<div class="col-sm-4">'
		+'<h6><center class="appTitle" style="background-color:#4b4242;font-weight: bold;">Flux density - <b style=" font-weight: bold; color: #e0ce97;">'+resultMasterJson.currentStage.fluxDensity+'</b></center></h6>'
		+'</div>'
		+'<div class="col-sm-4">'
		+'<h6><center class="appTitle" style="background-color:#4b4242;font-weight: bold;">Thickness - <b style=" font-weight: bold; color: #e0ce97;">'+resultMasterJson.currentStage.thickness+'</b></center></h6>'
		+'</div>'
		+'</div>'
		+'<div class="row">'
		+'<div class="col-sm-1">'
		+'</div>'
		+'<div class="col-sm-5">'
		
		+'<div class="panel panel-default">'
		+'<div class="panel-heading">'
		 +'<center><b style="color:#fff;">Current : <b style=" font-weight: 500; color: #e0ce97;"> '+resultMasterJson.roundCurrent[0].value+'</b></center>'
		+'</div>'
		+' <div class="panel-body">'
		
		+'<div class="row">'
		+'<div class="col-sm-1">'
		+'</div>'
		+'<div class="col-sm-5">'
		
		+'<div class="panel panel-default" style="margin-top:0px;">'
		+'<div class="panel-heading"><center class="subTitle">Actual Attempt</center></div>'
		+' <div class="panel-body">'
		   +' <div class="alert alert-success">'
	        +' <center><strong>1</strong> </center>'
	        +'</div>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'<div class="col-sm-5">'
		
		+'<div class="panel panel-default" style="margin-top:0px;">'
		+' <div class="panel-heading"><center class="subTitle">Total Attempt</center></div>'
		+' <div class="panel-body">'
		   +' <div class="alert alert-warning">'
	        +' <center><strong>'+resultMasterJson.roundCurrent[0].totalAttempt+'</strong> </center>'
	        +'</div>'
		+'</div>'
		+' </div>'
		
		
		+'</div>'
		+'<div class="col-sm-1">'
		+'</div>'
		+'</div>'
		+'</div>'
		
		+' </div>'
		+'</div>'
		+'<div class="col-sm-5">'
		
		+'<div class="panel panel-default">'
		+'<div class="panel-heading">'
		 +'<center><b style="color:#fff;">Current : <b style=" font-weight: 500; color: #e0ce97;">'+resultMasterJson.roundCurrent[1].value+'</b></center>'
		+'</div>'
		+' <div class="panel-body">'
		
		
		
		+'<div class="row">'
		+'<div class="col-sm-1">'
		+'</div>'
		+'<div class="col-sm-5">'
		+'<div class="panel panel-default" style="margin-top:0px;">'
		+'<div class="panel-heading"><center class="subTitle">Actual Attempt</center></div>'
		+' <div class="panel-body">'
		   +' <div class="alert alert-success">'
	        +' <center><strong>1</strong> </center>'
	        +'</div>'
		+'</div>'
		+'</div>'
		
		
		
		+'</div>'
		+'<div class="col-sm-5">'
		
		+'<div class="panel panel-default" style="margin-top:0px;">'
		+' <div class="panel-heading"><center class="subTitle">Total Attempt</center></div>'
		+' <div class="panel-body">'
		   +' <div class="alert alert-warning">'
	        +' <center><strong>'+resultMasterJson.roundCurrent[1].totalAttempt+'</strong> </center>'
	        +'</div>'
		+'</div>'
		+' </div>'
		+'</div>'
		+'<div class="col-sm-1">'
		+'</div>'
		+'</div>'
		+'</div>'
		+' </div>'
		+'</div>'
		+'<div class="col-sm-1">'
		+'</div>'
		//First Row Thickness
		+'<div class="row">'
		+'<div class="col-sm-1">'
		+'</div>'
		+'<div class="col-sm-5">'
		+'<div class="panel panel-default">'
		+'<div class="panel-heading">'
	    +'<center><b style="color:#fff;">Current : <b style=" font-weight: 500; color: #e0ce97;">'+resultMasterJson.roundCurrent[2].value+'</b></center>'
		+'</div>'
		+' <div class="panel-body">'
		+'<div class="row">'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-default" style="margin-top: 0px;">'
        +'  <div class="panel-heading"><center class="subTitle">Actual Attempt</center></div>'
        +'  <div class="panel-body">'
        +' <div class="alert alert-success" >'
        +' <center><strong>1</strong> </center>'
        +'</div>'
       +'</div>'
        +' </div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-default" style="margin-top: 0px;">'
        +'  <div class="panel-heading"><center class="subTitle" >Total Attempt</center></div>'
        +'  <div class="panel-body">'
        +' <div class="alert alert-warning" >'
        +' <center><strong>'+resultMasterJson.roundCurrent[2].totalAttempt+'</strong> </center>'
        +'</div>'
       +'</div>'
        +' </div>'
		+'</div>'
		+'</div>'
		+'</div>'
		+' </div>'
		+'</div>'
		+'<div class="col-sm-5">'
		+'<div class="panel panel-default">'
		+'<div class="panel-heading">'
		 +'<center><b style="color:#fff;">Current : <b style=" font-weight: 500; color: #e0ce97;">'+resultMasterJson.roundCurrent[3].value+'</b></center>'
		+'</div>'
		+' <div class="panel-body">'
		+'<div class="row">'
		+'<div class="col-sm-1">'
		+'</div>'
		+'<div class="col-sm-5">'
		+' <div class="panel panel-default" style="margin-top: 0px;">'
        +'  <div class="panel-heading"><center class="subTitle" >Actual Attempt</center></div>'
        +'  <div class="panel-body">'
        +' <div class="alert alert-success" >'
        +' <center><strong>1</strong> </center>'
        +'</div>'
       +'</div>'
        +' </div>'
		+'</div>'
		+'<div class="col-sm-5">'
		+' <div class="panel panel-default" style="margin-top: 0px;">'
        +'  <div class="panel-heading"><center class="subTitle" >Total Attempt</center></div>'
        +'  <div class="panel-body">'
        +' <div class="alert alert-warning" >'
        +' <center><strong>'+resultMasterJson.roundCurrent[3].totalAttempt+'</strong> </center>'
        +'</div>'
       +'</div>'
        +' </div>'
		+'</div>'
		+'<div class="col-sm-1">'
		
		+'</div>'
		+'</div>'
		+'</div>'
		+' </div>'
		+'</div>'
		+'<div class="col-sm-1">'
		+'</div>'
		+'</div>'
		// Third row of current
		//First Row Thickness
		+'<div class="row">'
		+'<div class="col-sm-1">'
		+'</div>'
		+'<div class="col-sm-5">'
		+'<div class="panel panel-default">'
		+'<div class="panel-heading">'
	    +'<center><b style="color:#fff;">Current : <b style=" font-weight: 500; color: #e0ce97;"> '+resultMasterJson.roundCurrent[4].value+'</b></center>'
		+'</div>'
		+' <div class="panel-body">'
		+'<div class="row">'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-default" style="margin-top: 0px;">'
        +'  <div class="panel-heading"><center class="subTitle">Actual Attempt</center></div>'
        +'  <div class="panel-body">'
        +' <div class="alert alert-success" >'
        +' <center><strong>1</strong> </center>'
        +'</div>'
       +'</div>'
        +' </div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-default" style="margin-top: 0px;">'
        +'  <div class="panel-heading"><center class="subTitle" >Total Attempt</center></div>'
        +'  <div class="panel-body">'
        +' <div class="alert alert-warning" >'
        +' <center><strong>'+resultMasterJson.roundCurrent[4].totalAttempt+'</strong> </center>'
        +'</div>'
       +'</div>'
        +' </div>'
		+'</div>'
		+'</div>'
		+'</div>'
		+' </div>'
		+'</div>'
		+'<div class="col-sm-5">'
		+'<div class="panel panel-default">'
		+'<div class="panel-heading">'
		 +'<center><b style="color:#fff;">Current : <b style=" font-weight: 500; color: #e0ce97;"> '+resultMasterJson.roundCurrent[5].value+'</b></center>'
		+'</div>'
		+' <div class="panel-body">'
		+'<div class="row">'
		+'<div class="col-sm-1">'
		+'</div>'
		+'<div class="col-sm-5">'
		+' <div class="panel panel-default" style="margin-top: 0px;">'
        +'  <div class="panel-heading"><center class="subTitle" >Actual Attempt</center></div>'
        +'  <div class="panel-body">'
        +' <div class="alert alert-success" >'
        +' <center><strong>1</strong> </center>'
        +'</div>'
       +'</div>'
        +' </div>'
		+'</div>'
		+'<div class="col-sm-5">'
		+' <div class="panel panel-default" style="margin-top: 0px;">'
        +'  <div class="panel-heading"><center class="subTitle" >Total Attempt</center></div>'
        +'  <div class="panel-body">'
        +' <div class="alert alert-warning" >'
        +' <center><strong>'+resultMasterJson.roundCurrent[5].totalAttempt+'</strong> </center>'
        +'</div>'
       +'</div>'
        +' </div>'
		+'</div>'
		+'<div class="col-sm-1">'
		
		+'</div>'
		+'</div>'
		+'</div>'
		+' </div>'
		+'</div>'
		+'<div class="col-sm-1">'
		+'</div>'
		+'</div>'
		//End third row of current
		
		+'</div>'
		+'</div>'
//		+'<div class="col-sm-2">'
//		+'</div>'
		
		//Thickness Panel
		
		+'<div class="col-sm-6" style="border-style: dashed;border-color: lightgray;">'
		+'<h4><center class="appTitle" style="font-weight: bolder;" >APPLICATION TYPE - <b style=" font-weight: 500; color: #e0ce97;">THICKNESS</b></center></h4>'
		+'<div class="row">'
		+'<div class="col-sm-4">'
		+'<h6><center class="appTitle" style="background-color:#4b4242;font-weight: bolder;">Material Type - <b style=" font-weight: bold; color: #e0ce97;">'+resultMasterJson.thicknessStage.materialIdName+'</b></center></h6>'
		+'</div>'
		+'<div class="col-sm-4">'
		+'<h6><center class="appTitle" style="background-color:#4b4242;font-weight: bolder;">Flux density - <b style=" font-weight: bold; color: #e0ce97;">'+resultMasterJson.thicknessStage.fluxDensity+'</b></center></h6>'
		+'</div>'
		+'<div class="col-sm-4">'
		+'<h6><center class="appTitle" style="background-color:#4b4242;font-weight: bolder;">Current - <b style=" font-weight: bold; color: #e0ce97;">'+resultMasterJson.thicknessStage.current+'</b></center></h6>'
		+'</div>'
		+'</div>'
		//First Row Thickness
		+'<div class="row">'
		+'<div class="col-sm-1">'
		+'</div>'
		+'<div class="col-sm-5">'
		+'<div class="panel panel-default">'
		+'<div class="panel-heading">'
	    +'<center><b style="color:#fff;">Thickness :<b style=" font-weight: 500; color: #e0ce97;">'+resultMasterJson.roundThickness[0].value+'</b></center>'
		+'</div>'
		+' <div class="panel-body">'
		+'<div class="row">'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-default" style="margin-top: 0px;">'
        +'  <div class="panel-heading"><center class="subTitle">Actual Attempt</center></div>'
        +'  <div class="panel-body">'
        +' <div class="alert alert-success" >'
        +' <center><strong>1</strong> </center>'
        +'</div>'
       +'</div>'
        +' </div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-default" style="margin-top: 0px;">'
        +'  <div class="panel-heading"><center class="subTitle" >Total Attempt</center></div>'
        +'  <div class="panel-body">'
        +' <div class="alert alert-warning" >'
        +' <center><strong>'+resultMasterJson.roundThickness[0].totalAttempt+'</strong> </center>'
        +'</div>'
       +'</div>'
        +' </div>'
		+'</div>'
		+'</div>'
		+'</div>'
		+' </div>'
		+'</div>'
		+'<div class="col-sm-5">'
		+'<div class="panel panel-default">'
		+'<div class="panel-heading">'
		 +'<center><b style="color:#fff;">Thickness :<b style=" font-weight: 500; color: #e0ce97;"> '+resultMasterJson.roundThickness[1].value+'</b></center>'
		+'</div>'
		+' <div class="panel-body">'
		+'<div class="row">'
		+'<div class="col-sm-1">'
		+'</div>'
		+'<div class="col-sm-5">'
		+' <div class="panel panel-default" style="margin-top: 0px;">'
        +'  <div class="panel-heading"><center class="subTitle" >Actual Attempt</center></div>'
        +'  <div class="panel-body">'
        +' <div class="alert alert-success" >'
        +' <center><strong>1</strong> </center>'
        +'</div>'
       +'</div>'
        +' </div>'
		+'</div>'
		+'<div class="col-sm-5">'
		+' <div class="panel panel-default" style="margin-top: 0px;">'
        +'  <div class="panel-heading"><center class="subTitle" >Total Attempt</center></div>'
        +'  <div class="panel-body">'
        +' <div class="alert alert-warning" >'
        +' <center><strong>'+resultMasterJson.roundThickness[1].totalAttempt+'</strong> </center>'
        +'</div>'
       +'</div>'
        +' </div>'
		+'</div>'
		+'<div class="col-sm-1">'
		
		+'</div>'
		+'</div>'
		+'</div>'
		+' </div>'
		+'</div>'
		+'<div class="col-sm-1">'
		+'</div>'
		+'</div>'
		
		//second Row Thickness
		+'<div class="row">'
		+'<div class="col-sm-1">'
		+'</div>'
		+'<div class="col-sm-5">'
		+'<div class="panel panel-default">'
		+'<div class="panel-heading">'
	    +'<center><b style="color:#fff;">Thickness :<b style=" font-weight: 500; color: #e0ce97;">  '+resultMasterJson.roundThickness[2].value+'</b></center>'
		+'</div>'
		+' <div class="panel-body">'
		+'<div class="row">'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-default" style="margin-top: 0px;">'
        +'  <div class="panel-heading"><center class="subTitle">Actual Attempt</center></div>'
        +'  <div class="panel-body">'
        +' <div class="alert alert-success" >'
        +' <center><strong>1</strong> </center>'
        +'</div>'
       +'</div>'
        +' </div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-default" style="margin-top: 0px;">'
        +'  <div class="panel-heading"><center class="subTitle" >Total Attempt</center></div>'
        +'  <div class="panel-body">'
        +' <div class="alert alert-warning" >'
        +' <center><strong>'+resultMasterJson.roundThickness[2].totalAttempt+'</strong> </center>'
        +'</div>'
       +'</div>'
        +' </div>'
		+'</div>'
		+'</div>'
		+'</div>'
		+' </div>'
		+'</div>'
		+'<div class="col-sm-5">'
		+'<div class="panel panel-default">'
		+'<div class="panel-heading">'
		 +'<center><b style="color:#fff;">Thickness :<b style=" font-weight: 500; color: #e0ce97;"> '+resultMasterJson.roundThickness[3].value+'</b></center>'
		+'</div>'
		+' <div class="panel-body">'
		+'<div class="row">'
		+'<div class="col-sm-1">'
		+'</div>'
		+'<div class="col-sm-5">'
		+' <div class="panel panel-default" style="margin-top: 0px;">'
        +'  <div class="panel-heading"><center class="subTitle" >Actual Attempt</center></div>'
        +'  <div class="panel-body">'
        +' <div class="alert alert-success" >'
        +' <center><strong>1</strong> </center>'
        +'</div>'
       +'</div>'
        +' </div>'
		+'</div>'
		+'<div class="col-sm-5">'
		+' <div class="panel panel-default" style="margin-top: 0px;">'
        +'  <div class="panel-heading"><center class="subTitle" >Total Attempt</center></div>'
        +'  <div class="panel-body">'
        +' <div class="alert alert-warning" >'
        +' <center><strong>'+resultMasterJson.roundThickness[3].totalAttempt+'</strong> </center>'
        +'</div>'
       +'</div>'
        +' </div>'
		+'</div>'
		+'<div class="col-sm-1">'
		
		+'</div>'
		+'</div>'
		+'</div>'
		+' </div>'
		+'</div>'
		+'<div class="col-sm-1">'
		+'</div>'
		+'</div>'
		//Third Row Thickness
		+'<div class="row">'
		+'<div class="col-sm-1">'
		+'</div>'
		+'<div class="col-sm-5">'
		+'<div class="panel panel-default">'
		+'<div class="panel-heading">'
	    +'<center><b style="color:#fff;">Thickness :<b style=" font-weight: 500; color: #e0ce97;"> '+resultMasterJson.roundThickness[4].value+'</b></center>'
		+'</div>'
		+' <div class="panel-body">'
		+'<div class="row">'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-default" style="margin-top: 0px;">'
        +'  <div class="panel-heading"><center class="subTitle">Actual Attempt</center></div>'
        +'  <div class="panel-body">'
        +' <div class="alert alert-success" >'
        +' <center><strong>1</strong> </center>'
        +'</div>'
       +'</div>'
        +' </div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-default" style="margin-top: 0px;">'
        +'  <div class="panel-heading"><center class="subTitle" >Total Attempt</center></div>'
        +'  <div class="panel-body">'
        +' <div class="alert alert-warning" >'
        +' <center><strong>'+resultMasterJson.roundThickness[4].totalAttempt+'</strong> </center>'
        +'</div>'
       +'</div>'
        +' </div>'
		+'</div>'
		+'</div>'
		+'</div>'
		+' </div>'
		+'</div>'
		+'<div class="col-sm-5">'
		+'<div class="panel panel-default">'
		+'<div class="panel-heading">'
		 +'<center><b style="color:#fff;">Thickness :<b style=" font-weight: 500; color: #e0ce97;">  '+resultMasterJson.roundThickness[5].value+'</b></center>'
		+'</div>'
		+' <div class="panel-body">'
		+'<div class="row">'
		+'<div class="col-sm-1">'
		+'</div>'
		+'<div class="col-sm-5">'
		+' <div class="panel panel-default" style="margin-top: 0px;">'
        +'  <div class="panel-heading"><center class="subTitle" >Actual Attempt</center></div>'
        +'  <div class="panel-body">'
        +' <div class="alert alert-success" >'
        +' <center><strong>1</strong> </center>'
        +'</div>'
       +'</div>'
        +' </div>'
		+'</div>'
		+'<div class="col-sm-5">'
		+' <div class="panel panel-default" style="margin-top: 0px;">'
        +'  <div class="panel-heading"><center class="subTitle" >Total Attempt</center></div>'
        +'  <div class="panel-body">'
        +' <div class="alert alert-warning" >'
        +' <center><strong>'+resultMasterJson.roundThickness[5].totalAttempt+'</strong> </center>'
        +'</div>'
       +'</div>'
        +' </div>'
		+'</div>'
		+'<div class="col-sm-1">'
		
		+'</div>'
		+'</div>'
		+'</div>'
		+' </div>'
		+'</div>'
		+'<div class="col-sm-1">'
		+'</div>'
		+'</div>'
		//End Third Row
		
		
		+'</div>'
		+'</div>'
		+'<br>'
		+'<br>'
		$("#main-div1,#main-div").html("");
	var savejpg='<div class="row">'
		      +'<div class="col-sm-9">'
		
	          +'</div>'
	          +'<div class="col-sm-1">'
	         + '<button type="button" class="btn btn-danger"  id="savejpg" style="margin-top:10px;"  >Save as .jpg</button>'
	          +'</div>'
	          +'<div class="col-sm-2">'
	  		
	          +'</div>'
		        +'</div>'
	$("#main-div").html(savejpg);
	
		$("#main-divResult").html(htm);
		
		$('#savejpg').on('click', function() {
			$('#savejpg').prop("hidden",true);
		    html2canvas(document.querySelector("#main-divResult")).then(canvas => {
		        // Append the screenshot canvas to the body
		        document.body.appendChild(canvas);
		        $("canvas").css("display","none");
		        // Optionally save the screenshot as an image
		        var link = document.createElement('a');
		        link.download = 'screenshot.png';
		        link.href = canvas.toDataURL();
		        link.click();
		    });
		});
		
		
		console.log(resultMasterJson.question.correctQuestion);
		CorrectAnswer=parseInt(resultMasterJson.question.correctQuestion);
		var tempBasicKnowledge=parseInt((CorrectAnswer/5)*100);
		console.log("temp "+tempBasicKnowledge);
		
		
		
		if(tempBasicKnowledge>=60){
			 var str=''
				 +' <div class="alert alert-success attainedText">'
			    +'  <center><strong>Attained</strong> </center>'
			     +'  </div>'
			     $("#basicKnowledge").html(str);
			     
		}
		else
			{
			 var str=''
				 +' <div class="alert alert-danger attainedText">'
			    +'  <center><strong>Not Attained</strong> </center>'
			     +'  </div>'
			     $("#basicKnowledge").html(str);
			}
		var TotalCountThickness=0;
		for(i=0;i<resultMasterJson.roundThickness.length;i++){
			TotalCountThickness+=parseInt(resultMasterJson.roundThickness[i].totalAttempt);
		}
		var TotalCountCurrent=0;
		for(i=0;i<resultMasterJson.roundCurrent.length;i++){
			TotalCountCurrent+=parseInt(resultMasterJson.roundCurrent[i].totalAttempt);
		}
		var total12=parseInt(TotalCountCurrent+TotalCountThickness);
		console.log(" TotalCountThickness "+TotalCountThickness);
		console.log(" TotalCountCurrent "+TotalCountCurrent);
		
		console.log(" Total "+total12);
		var tempCalPer=parseFloat((12/(total12)*100));
		console.log(" tempCalPer "+tempCalPer);
		
		
		if(tempCalPer>=60){
			 var str=''
				 +' <div class="alert alert-success attainedText">'
			    +'  <center><strong>Attained</strong> </center>'
			     +'  </div>'
			     $("#calcuationAtt").html(str);
			     
		}
		else
			{
			 var str=''
				 +' <div class="alert alert-danger attainedText">'
			    +'  <center><strong>Not Attained</strong> </center>'
			     +'  </div>'
			     $("#calcuationAtt").html(str);
			}
	Highcharts.setOptions({
	    colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
	        return {
	            radialGradient: {
	                cx: 0.5,
	                cy: 0.3,
	                r: 0.7
	            },
	            stops: [
	                [0, color],
	                [1, Highcharts.color(color).brighten(-0.3).get('rgb')] // darken
	            ]
	        };
	    })
	});

	// Build the chart
	Highcharts.chart('graphDiv', {
	    chart: {
	        plotBackgroundColor: null,
	        plotBorderWidth: null,
	        plotShadow: false,
	        type: 'pie'
	    },
	    title: {
	        text: 'Pie Chart',
	        align: 'left'
	    },
	    tooltip: {
	        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	    },
	    accessibility: {
	        point: {
	            valueSuffix: '%'
	        }
	    },
	    plotOptions: {
	        pie: {
	            allowPointSelect: true,
	            cursor: 'pointer',
	            dataLabels: {
	                enabled: true,
	                format: '<span style="font-size: 1.2em"><b>{point.name}</b>' +
	                    '</span><br>' +
	                    '<span style="opacity: 0.6">{point.percentage:.1f} ' +
	                    '%</span>',
	                connectorColor: 'rgba(128,128,128,0.5)'
	            }
	        }
	    },
	    series: [{
	        name: 'Share',
	        data: [
	            { name: 'Basic Knowledge', y: tempBasicKnowledge },
	            { name: 'Configuration', y: 100 },
	            { name: 'Mimic', y: 100 },
	            { name: 'Calculation', y: tempCalPer },
	            { name: 'Observation', y: 100 }
	        ]
	    }]
	});
	
     $(document).ready(function() {
    	 var currentDateTime = new Date();

         // Manually format the date as DD MM YYYY
         var day = String(currentDateTime.getDate()).padStart(2, '0');
         var month = String(currentDateTime.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
         var year = currentDateTime.getFullYear();

         var formattedDate = day + '/' + month + '/' + year;

         var time = currentDateTime.toLocaleTimeString();  // Get the current time

         // Display the formatted date and time in the respective elements
         $("#currentDate").text(formattedDate);
         $("#currentTime").text(time);
         console.log("date "+date);
         console.log("time "+time);
     });
	 $('#saveAsJpg').on('click', function() {
			$('#saveAsJpg').prop("hidden",true);
		    html2canvas(document.querySelector("#main-divResult")).then(canvas => {
		        // Append the screenshot canvas to the body
		        document.body.appendChild(canvas);
		        $("canvas").css("display","none");
		        // Optionally save the screenshot as an image
		        var link = document.createElement('a');
		        link.download = 'screenshot.png';
		        link.href = canvas.toDataURL();
		        link.click();
		    });
		});
 
}