/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:数据表格组件
 */
layui.link('./script/trackLibraryManagement/trackLibraryManagement.css');
layui.define(['layer', 'element', 'form', 'table', 'config_constant'], function (exports) {
	var layer = layui.layer;
	var element = layui.element;
	var form = layui.form;
	var table = layui.table;
	var config_constant = layui.config_constant;
	var obj = {
		trackLibraryManagement: function (componentName) {
			var getRoot = $("[id^='render-trackLibraryManagement']");
			getRoot.empty();
			$.each(getRoot, function (key, listId) {
				var nodeHtml = '';
				var getNodeHtml = $('#' + listId.id);
				var componentData = getNodeHtml.data('componentData');
				nodeHtml += '<div class="addinformation-container">';
				nodeHtml += '<div class="layui-row">'
				nodeHtml += '<div class="layui-col-xs8">';
				nodeHtml += '<div id="map" style="width: 100%; height: 600px;"></div>';
				nodeHtml += '</div>';
				nodeHtml += '<div class="layui-col-xs4">';
				nodeHtml += '<form class="layui-form" action="" style="margin-left: 10px;">';
				// $.ajax({
				// 	type: "post",
				// 	contentType: "application/json",
				// 	url: config_constant.URL_HEADER + '/task/b/update/start_time?id='+editerGetId,
				// 	// data: JSON.stringify({
				// 	//     id : editerGetId
				// 	// }),
				// 	success: function(data){
				// 		if(data.code==0){

				// 			layer.alert("成功");    
				// 		} else {
				// 			layer.alert("失败");
				// 		}
				// 	},
				// 	error: function(data){
				// 		layer.alert("错误");
				// 	}
				// })
				var arr1 = ['全部', '河北省', '山西省', '北京市', 'G4'];
				var arr2 = { '全部': ['全部', '5', '5', '5', '5'], '河北省': ['河北省', '4', '4', '4', '4'], '山西省': ['山西省', '3', '3', '3', '3'], '北京市': ['北京市', '2', '2', '2', '2'], 'G4': ['G4', '1', '1', '1', '1'] };
				var arr3 = { '全部': [116.29, 40.16], '河北省': [116.29, 40.16], '山西省': [116.29, 50.16], '北京市': [116.29, 70.16], 'G4': [16.29, 90.16] };
				nodeHtml += '<div class="layui-form-item">';
				nodeHtml += '<div>请选择需求名称</div>';
				nodeHtml += '<div class="layui-input-block" style="margin-left: 0;">';
				nodeHtml += '<select name="task" lay-filter="task">';
				$.each(arr1, function (index, value) {
					if (index == 0) {
						nodeHtml += '<option value="' + value + '" selected>' + value + '</option>'
					} else {
						nodeHtml += '<option value="' + value + '" >' + value + '</option>';
					}
				})
				// $.each(arr1, function (index, value) {
				// 	if(index==0){
				// 		nodeHtml += '<option value="'+  +'" selected>'+  +'</option>'
				// 	}else{
				// 		nodeHtml += '<option value="'+  +'" >'+  +'</option>';
				// 	}
				// })
				// $.each(arr1, function (index, value) {
				// 	if(index==0){
				// 		nodeHtml += '<option value="'+ value +'" selected>'+ value +'</option>'
				// 	}else{
				// 		nodeHtml += '<option value="'+ value +'" >'+ value +'</option>';
				// 	}
				// })
				nodeHtml += '</select>';
				nodeHtml += '</div>';
				nodeHtml += '</div>';


				nodeHtml += '<table class="layui-table taskTableList_table taskTableList_editor" lay-size="sm">';
				nodeHtml += '<thead>';
				nodeHtml += '<tr><th>需求名称</th><th>需求里程</th><th>已采集里程</th><th>未采集里程</th><th>已制作里程</th></tr>';
				nodeHtml += '</thead>';
				nodeHtml += '<tbody>';
				nodeHtml += '<tr>';
				$.each(arr2["全部"], function (index, value) {
					nodeHtml += '<td>' + value + '</td>';
				})
				nodeHtml += '</tr>';
				nodeHtml += '</tbody>';
				nodeHtml += '</table>';

				nodeHtml += '<div class="layui-form-item">';
				nodeHtml += '<div class="layui-row">';
				nodeHtml += '<div class="layui-col-md2">';
				nodeHtml += '<button class="layui-btn layui-btn-sm layui-btn-normal">框选</button>';
				nodeHtml += '</div>';
				nodeHtml += '<div class="layui-col-md2">';
				nodeHtml += '<button class="layui-btn layui-btn-sm layui-btn-normal clear">清空</button>';
				nodeHtml += '</div>';
				nodeHtml += '<div class="layui-col-md6">';
				nodeHtml += '<input type="text" name="title" placeholder="根据任务号模糊搜索" autocomplete="off" class="layui-input" style="height:30px">';
				
				nodeHtml += '</div>';
				nodeHtml += '<div class="layui-col-md2" style="text-align:right;">';
				nodeHtml += '<button class="layui-btn layui-btn-sm layui-btn-normal search">搜索</button>';
				nodeHtml += '</div>';
				nodeHtml += '<div class="layui-col-md12">';
				nodeHtml += '<ul class="trackLibraryManagement_ul">';
				var arr3 =["1001-1-029-180308","1001-1-029-180309","1001-1-029-180310","1001-1-029-180311","1001-1-029-180312"];

				$.each(arr3, function (index, value) {
					if(index==0){
						nodeHtml += '<li class="active">' + value + '</li>';
					}else{
						nodeHtml += '<li>' + value + '</li>';
					}
				});


				nodeHtml += '</ul>';

				nodeHtml += '</div>';
				nodeHtml += '</div>';
				nodeHtml += '</div>';

				// nodeHtml += '<div class="layui-form-item">';
				nodeHtml += '<div class="layui-row">';
				nodeHtml += '<div class="layui-col-md10">';
				nodeHtml += '轨迹展示：';
				nodeHtml += '</div>';
				nodeHtml += '<div class="layui-col-md2" style="text-align:right;">';
				nodeHtml += '<button class="layui-btn layui-btn-sm layui-btn-normal" lay-submit lay-filter="refresh">刷新</button>';
				nodeHtml += '</div>';
				nodeHtml += '</div>';
				// nodeHtml += '</div>';

				nodeHtml += '<div class="layui-form-item" style="margin-left: 0;">';
				nodeHtml += '<div class="layui-input-block" style="margin-left: 0;">';
				nodeHtml += '<input type="checkbox" id="all" name="allRoad" lay-skin="primary" title="全部轨迹（总任务路网+已采集+已制作+需补采）" checked="" lay-filter="all">';
				nodeHtml += '</div>';
				nodeHtml += '</div>';


				nodeHtml += '<div class="layui-form-item">';
				nodeHtml += '<div class="layui-row">';
				nodeHtml += '<div class="layui-col-md5">';
				nodeHtml += '<div class="layui-input-block trackLibraryManagement_checkbox">';
				nodeHtml += '<input type="checkbox" class="item" name="allTaskRoad" lay-skin="primary" title="总任务路网" checked="" lay-filter="item">';
				nodeHtml += '</div>';
				nodeHtml += '</div>';
				nodeHtml += '<div class="layui-col-md2">';
				nodeHtml += '<input type="text" class="layui-input custom"  name="allTaskRoadColor" placeholder="路径颜色" value="#000" />';
				// nodeHtml += '<input type="color" name="allTaskRoadColor" placeholder="路径颜色" autocomplete="off" class="layui-input trackLibraryManagement_height width">';
				nodeHtml += '</div>';
				nodeHtml += '<div class="layui-col-md3 layui-col-md-offset1">';
				nodeHtml += '<input type="number" name="allTaskRoadWidth" placeholder="路径宽度" autocomplete="off" class="layui-input trackLibraryManagement_height" value="1">';
				nodeHtml += '</div>';
				nodeHtml += '</div>';
				nodeHtml += '</div>';

				nodeHtml += '<div class="layui-form-item">';
				nodeHtml += '<div class="layui-row">';
				nodeHtml += '<div class="layui-col-md5">';
				nodeHtml += '<div class="layui-input-block trackLibraryManagement_checkbox">';
				nodeHtml += '<input type="checkbox" class="item" name="collectedRoad" lay-skin="primary" title="已采集路网" checked="" lay-filter="item">';
				nodeHtml += '</div>';
				nodeHtml += '</div>';
				nodeHtml += '<div class="layui-col-md2">';
				nodeHtml += '<input type="text" class="layui-input custom"  name="collectedRoadColor" placeholder="路径颜色" value="#000" />';
				// nodeHtml += '<input type="color" name="collectedRoadColor" placeholder="路径颜色" autocomplete="off" class="layui-input trackLibraryManagement_height width">';
				nodeHtml += '</div>';
				nodeHtml += '<div class="layui-col-md3 layui-col-md-offset1">';
				nodeHtml += '<input type="number" name="collectedRoadWidth" placeholder="路径宽度" autocomplete="off" class="layui-input trackLibraryManagement_height" value="1">';
				nodeHtml += '</div>';
				nodeHtml += '</div>';
				nodeHtml += '</div>';

				nodeHtml += '<div class="layui-form-item">';
				nodeHtml += '<div class="layui-row">';
				nodeHtml += '<div class="layui-col-md5">';
				nodeHtml += '<div class="layui-input-block trackLibraryManagement_checkbox">';
				nodeHtml += '<input type="checkbox" class="item" name="makedRoad" lay-skin="primary" title="已制作路网" checked="" lay-filter="item">';
				nodeHtml += '</div>';
				nodeHtml += '</div>';
				nodeHtml += '<div class="layui-col-md2">';
				nodeHtml += '<input type="text" class="layui-input custom"  name="makedRoadColor" placeholder="路径颜色" value="#000" />';
				// nodeHtml += '<input type="color" name="makedRoadColor" placeholder="路径颜色" autocomplete="off" class="layui-input trackLibraryManagement_height width">';
				nodeHtml += '</div>';
				nodeHtml += '<div class="layui-col-md3 layui-col-md-offset1">';
				nodeHtml += '<input type="number" name="makedRoadWidth" placeholder="路径宽度" autocomplete="off" class="layui-input trackLibraryManagement_height" value="1">';
				nodeHtml += '</div>';
				nodeHtml += '</div>';
				nodeHtml += '</div>';

				nodeHtml += '<div class="layui-form-item">';
				nodeHtml += '<div class="layui-row">';
				nodeHtml += '<div class="layui-col-md5">';
				nodeHtml += '<div class="layui-input-block trackLibraryManagement_checkbox">';
				nodeHtml += '<input type="checkbox" class="item" name="repairedRoad" lay-skin="primary" title="需补采轨迹" checked="" lay-filter="item">';
				nodeHtml += '</div>';
				nodeHtml += '</div>';
				nodeHtml += '<div class="layui-col-md2">';
				nodeHtml += '<input type="text" class="layui-input custom"  name="repairedRoadColor" placeholder="路径颜色" value="#000" />';
				// nodeHtml += '<input type="color" name="repairedRoadColor" placeholder="路径颜色" autocomplete="off" class="layui-input trackLibraryManagement_height width">';
				nodeHtml += '</div>';
				nodeHtml += '<div class="layui-col-md3 layui-col-md-offset1">';
				nodeHtml += '<input type="number" name="repairedRoadWidth" placeholder="路径宽度" autocomplete="off" class="layui-input trackLibraryManagement_height" value="1">';
				nodeHtml += '</div>';
				nodeHtml += '</div>';
				nodeHtml += '</div>';

				nodeHtml += '</form>';
				nodeHtml += '</div>';
				nodeHtml += '</div>';
				nodeHtml += '</div>';
				getRoot.append(nodeHtml);


				mapboxgl.accessToken = 'pk.eyJ1IjoiY2hlbmZlaTA3MjciLCJhIjoiY2pmdndyNW5wMDRrYzJxbzg0ZWlwOXQzMyJ9.uS4yS8n_T8JK8oNDur53Rg';
				var map = new mapboxgl.Map({
					container: 'map', // container id
					style: 'http://223.223.200.50:9200/styles/chinablue/style.json',
					center: [116.29, 40.16], // starting position [lng, lat]
					zoom: 9 // starting zoom
				});
				form.render();
				
				$(".custom").spectrum({
					color: "#000",
					// move: function(tinycolor) { console.log(tinycolor) },
					// show: function(tinycolor) { console.log(tinycolor) },
					change: function(color) {
						var col=color.toHexString();
						$($(this)[0]).attr("value", color.toHexString());
					},
					// beforeShow: function(tinycolor) { console.log(tinycolor) },
				});
				var draw = new MapboxDraw({
					displayControlsDefault: false,
					controls: {
						polygon: true,
						trash: true
					}
				});




				map.addControl(new mapboxgl.NavigationControl(), 'bottom-left');
				map.addControl(draw, 'top-right');

				map.on('draw.create', updateArea);
				map.on('draw.delete', updateArea);
				map.on('draw.update', updateArea);
				
				function updateArea(e) {
					var data = draw.getAll();
					var answer = document.getElementById('calculated-area');
					// if (data.features.length > 0) {
					// 	var area = turf.area(data);
					// 	// restrict to area to 2 decimal points
					// 	var rounded_area = Math.round(area*100)/100;
					// 	answer.innerHTML = '<p><strong>' + rounded_area + '</strong></p><p>square meters</p>';
					// } else {
					// 	answer.innerHTML = '';
					// 	if (e.type !== 'draw.delete') alert("Use the draw tools to draw a polygon!");
					// }
				}

				$(".trackLibraryManagement_ul li").on("click",function(){
					var $this = $(this);
					$this.addClass("active").removeClass("item");
					if($this.siblings(".active").length>0){
						$this.siblings(".active").addClass("item").removeClass("active");
					};
				});
				$(".search").on("click", function(){
					var taskNum = $(".trackLibraryManagement_ul li.active").html();
				});
				form.on('select(task)', function (data) {
					map.setCenter([-74, 38]);
					var trHtml = '';
					var ulHtml = '';
					$.each(arr2[data.value], function (index, value) {
						trHtml += '<td>' + value + '</td>';
					});
					
					$.each(arr3, function (index, value) {
						if(index==0){
							ulHtml += '<li class="active">' + value + '</li>';
						}else{
							ulHtml += '<li>' + value + '</li>';
						}
					});
					$(".layui-table tbody tr").html(trHtml);
					$(".trackLibraryManagement_ul").html(ulHtml);

				});
				//全选
				form.on('checkbox(all)', function (data) {
					var a = data.elem.checked;
					if (a == true) {
						$(".item").prop("checked", true);
						form.render('checkbox');
					} else {
						$(".item").prop("checked", false);
						form.render('checkbox');
					}

				});
				//取消全选
				form.on('checkbox(item)', function (data) {
					var item = $(".item");
					for (var i = 0; i < item.length; i++) {
						if (item[i].checked == false) {
							$("#all").prop("checked", false);
							form.render('checkbox');
						}else{
							var sib = $(data.elem).parents('form').find('input[type="checkbox"]:checked').length;
							var total = $(data.elem).parents('form').find('input[type="checkbox"]').length-1;
							if(sib == total){
								$("#all").prop("checked", true);
								form.render('checkbox');
							}
						}
					}
				});
				// form.on('click(refresh)', function(data){
				// 	console.log(data)
				// })
				form.on('submit(refresh)', function (data) {
					var makedRoadColor=$("input[name='makedRoadColor']").attr("value");
					var collectedRoadColor=$("input[name='collectedRoadColor']").attr("value");
					var allTaskRoadColor=$("input[name='allTaskRoadColor']").attr("value");
					var repairedRoadColor=$("input[name='repairedRoadColor']").attr("value");
			
					// if(data.field.allTaskRoad){
					// 	map.setPaintProperty('testGeoJson', 'line-color', data.field.makedRoadColor);
					// 	map.setPaintProperty('testGeoJson', 'line-width', Number(data.field.makedRoadWidth));
					// }
					// if(data.field.collectedRoad){
					// 	map.setPaintProperty('testGeoJson2', 'line-color', data.field.collectedRoadColor);
					// 	map.setPaintProperty('testGeoJson2', 'line-width', Number(data.field.collectedRoadWidth));
					// }
					// if(data.field.makedRoad){
					// 	map.setPaintProperty('testGeoJson3', 'line-color', data.field.makedRoadColor);
					// 	map.setPaintProperty('testGeoJson3', 'line-width', Number(data.field.makedRoadWidth));
					// }
					// if(data.field.repairedRoad){
					// 	map.setPaintProperty('testGeoJson4', 'line-color', data.field.repairedRoadColor);
					// 	map.setPaintProperty('testGeoJson4', 'line-width', Number(data.field.repairedRoadWidth));
					// }
					if(data.field.allTaskRoad){
						map.setPaintProperty('testGeoJson', 'line-color', allTaskRoadColor);
						map.setPaintProperty('testGeoJson', 'line-width', Number(data.field.allTaskRoadWidth));
					}
					if(data.field.collectedRoad){
						map.setPaintProperty('testGeoJson2', 'line-color', collectedRoadColor);
						map.setPaintProperty('testGeoJson2', 'line-width', Number(data.field.collectedRoadWidth));
					}
					if(data.field.makedRoad){
						map.setPaintProperty('testGeoJson3', 'line-color', makedRoadColor);
						map.setPaintProperty('testGeoJson3', 'line-width', Number(data.field.makedRoadWidth));
					}
					if(data.field.repairedRoad){
						map.setPaintProperty('testGeoJson4', 'line-color', repairedRoadColor);
						map.setPaintProperty('testGeoJson4', 'line-width', Number(data.field.repairedRoadWidth));
					}
					return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
				});
	
				map.on('load', function () {





					// Draw.add({});
					/**
					 * 添加一个数据源
					 * @param id    图层id号 
					 * @param color 图层线条color
					 * @param width 图层线条width
					 */
					// map.addSource('pointSource', {
					// 	type: 'geojson',
					// 	data: {
					// 		type: 'FeatureCollection',
					// 		features: [
					// 			{
					// 				type: 'Feature',
					// 				properties: {},
					// 				geometry: {
					// 					type: 'Point',
					// 					coordinates: [0, 0]
					// 				}
					// 			}
					// 		]
					// 	}
					// });
					/**
					 * 新建一个图层资源
					 * @param id    图层id号 
					 * @param color 图层线条color
					 * @param src   图层数据源
					 * @param width 图层线条width
					 */
					function createHisMarkerData(id,src,color,width){
						map.addLayer({
							'id': id,
							'type': 'line',
							'source': {
								'type': 'geojson',
								'data': src
							},
							"layout": {
								"line-join": "round",  /* 线条相交的形状 */
								"line-cap": "round"    /* 线条末端形状 */
							},
							"paint": {
								"line-color": color,  /* 线条颜色 */
								"line-width": width       /* 线条宽度 */
							}
						});
						
					}
					createHisMarkerData("testGeoJson",'/HDWeb/json/test.json',"#fff",2);
					createHisMarkerData("testGeoJson2",'/HDWeb/json/test2.json',"yellow",8);
					createHisMarkerData("testGeoJson3",'/HDWeb/json/test3.json',"#f00",2);
					createHisMarkerData("testGeoJson4",'/HDWeb/json/test4.json',"green",4);
					// $.getJSON("json/test.json", function (data) {
					// })




				});
			});

		},

	}

	exports('trackLibraryManagement', obj);
});