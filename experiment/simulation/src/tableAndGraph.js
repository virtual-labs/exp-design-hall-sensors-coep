function tableAndGraph(){
	$("#tableDesign").remove();
	$("#referenceTable").remove();
	Table();
	Graph();
}

function Table(){	
	$("#centerText1").html("MEASUREMENT OF CURRENT");
	currentTable=' <table class="table  table-bordered table-hover">'
				 +'   <thead>'
				 +'     <tr class="tableHeader">'
				 +'       <th colspan="4"><center>MATERIAL TYPE  - '+currentMasterJson.demo[0].material+'</center></th>'
//				 +'       <th colspan="2">Measurement of Thinkness</th>'
				
				 +'     </tr>'
				 +'     <tr class="tableHeader">'
				 +'       <th>Current (ampere)</th>'
				 +'       <th>Thickness (mm)</th>'
				 +'       <th>fluxDensity</th>'
				 +'       <th>Voltage Output(V)</th>'
				 +'     </tr>'
				 +'   </thead>'
				 +'    <tbody>'
				 for (var i = 0; i < currentMasterJson.demo.length; i++) {
					 currentTable+=' <tr>'
				       +' <td style="color:red;">'+currentMasterJson.demo[i].current+'</td>'
				       +' <td>'+currentMasterJson.demo[i].thickness+'</td>'
				       +' <td>'+currentMasterJson.demo[i].fluxDensity+'</td>'
				       +' <td style="color:red;">'+currentMasterJson.demo[i].VoltageOutput+'</td>'
				       +' </tr>'
				 }  
	currentTable+='   </tbody>'
				+' </table>'
	
				$("#main-div-conf").html(currentTable);
	
	
	$("#centerText2").html("MEASUREMENT OF THICKNESS");
	
	currentTable=' <table class="table table-bordered table-hover">'
		 +'   <thead>'
		 +'     <tr class="tableHeader">'
		 +'       <th colspan="4"><center>MATERIAL TYPE -  '+thicknessMasterJson.demo[0].material+'</center></th>'
		 +'     </tr>'
		 +'     <tr class="tableHeader">'
		 +'       <th>Thickness (mm)</th>'
		 +'       <th>Current (ampere)</th>'
		 +'       <th>fluxDensity</th>'
		 +'       <th>Voltage Output(V)</th>'
		 
		 +'     </tr>'
		 +'   </thead>'
		 +'    <tbody>'
		 for (var i = 0; i < thicknessMasterJson.demo.length; i++) {
			 currentTable+=' <tr>'
				 +' <td style="color:red;">'+thicknessMasterJson.demo[i].thickness+'</td>'
		       +' <td>'+thicknessMasterJson.demo[i].current+'</td>'
		      
		       +'<td>'+thicknessMasterJson.demo[i].fluxDensity+'</td>'
		       +' <td style="color:red;">'+thicknessMasterJson.demo[i].VoltageOutput+'</td>'
		       +' </tr>'
		 }
currentTable+='   </tbody>'
		+' </table>'

		$("#canvas-div").html(currentTable);
}

function Graph(){
	$(".highcharts-legend-item highcharts-scatter-series highcharts-color-0 highcharts-series-0").css("display","none");
	$(".highcharts-legend-item highcharts-line-series highcharts-color-1 highcharts-series-1").css("display","none");
    var xdata=[];
	var ydata=[];
	var graphData1=[];
	for (var i = 0; i < currentMasterJson.demo.length; i++)
		 {
			xdata[i] = parseFloat(currentMasterJson.demo[i].current);
			ydata[i] = parseFloat(currentMasterJson.demo[i].VoltageOutput);
			
		}
	Xmax=Math.max.apply(Math,xdata); 
	Ymax=Math.max.apply(Math,ydata); 
	Xmin=Math.min.apply(Math,xdata); 
	Ymin=Math.min.apply(Math,ydata);
	for (var j = 0; j < currentMasterJson.demo.length; j++) {
			tempArr = [];
			tempArr[0] = xdata[j];
			tempArr[1] = ydata[j];
			graphData1.push(tempArr);

	}

		Highcharts.chart('Graph1', {
			title: {
				text: ' Current v/s Voltage Output  '
			},
			subtitle: {
				text: ''
			},
			 tooltip: {
		            formatter: function() {
		                return 'Current : '+ this.x+'</b><br/>Voltage : '+ this.y+'</b><br/>';
		                   
		            }
		        },
			xAxis: {
				min:Xmin,
				max: Xmax,
				title: {
					text: 'Current'
				}
			},
			yAxis: {
				min: Ymin,
				max: Ymax,
				title: {
					text: 'Voltage'
				}
			},
			series: [
				{
					type: 'scatter',
//					name: 'Standard value',
					data: [[Xmin,Ymin], [Xmax, Ymax]],
					marker: {
						enabled: false
					},
					states: {
						hover: {
							lineWidth: 0
						}
					},
					enableMouseTracking: false
				},

				{
					type: 'scatter',
					name: 'Observation value',

					data: graphData1,
					marker: {
						radius: 4
					}
				}]

		});
		var xdata=[];
		var ydata=[];
		var graphData1=[];
		for (var i = 0; i < thicknessMasterJson.demo.length; i++)
			 {
				xdata[i] = parseFloat(thicknessMasterJson.demo[i].thickness);
				ydata[i] = parseFloat(thicknessMasterJson.demo[i].VoltageOutput);
				
			}
		Xmax=Math.max.apply(Math,xdata); 
		Ymax=Math.max.apply(Math,ydata); 
		Xmin=Math.min.apply(Math,xdata); 
		Ymin=Math.min.apply(Math,ydata);
		for (var j = 0; j < thicknessMasterJson.demo.length; j++) {
				tempArr = [];
				tempArr[0] = xdata[j];
				tempArr[1] = ydata[j];
				graphData1.push(tempArr);

		}

			Highcharts.chart('Graph2', {
				title: {
					text: ' Thickness v/s Voltage Output  '
				},
				subtitle: {
					text: ''
				},
				 tooltip: {
			            formatter: function() {
			                return 'Thickness : '+ this.x+'</b><br/>Voltage : '+ this.y+'</b><br/>';
			                   
			            }
			        },
				xAxis: {
					min:Xmin ,
					max: Xmax,
					title: {
						text: 'Thickness'
					}
				},
				yAxis: {
					min: Ymin,
					max: Ymax,
					title: {
						text: 'Voltage'
					}
				},
				series: [
					{
						type: 'scatter',
//						name: 'Standard value',
						data: [[Xmin,Ymin], [Xmax, Ymax]],
						marker: {
							enabled: false
						},
						states: {
							hover: {
								lineWidth: 0
							}
						},
						enableMouseTracking: false
					},

					{
						type: 'scatter',
						name: 'Observation value',

						data: graphData1,
						marker: {
							radius: 4
						}
					}]

			});
			
			
//			console.log(masterJson);
//		
//		console.log(masterJson);

}

//}