const worldMap = echarts.init(document.getElementById("container3"));
const worldMapOpt = {
	tooltip: {
	    trigger: 'item',
	    formatter: function (params) {
	        return params.name + ' : ' + params.value[2];
	    }
	},
	
	legend: {
	    orient: 'vertical',
	    y: 'bottom',
	    x:'right',
	    data:[],
	    textStyle: {
	        color: '#fff'
	    }
	},
	visualMap: {
	    min: 0,
	    max: 30,
	    calculable: true,
	    inRange: {
	        color: ['#b755ba', '#eae552', '#d91002']
	    },
	    textStyle: {
	        color: '#fff'
	    }
	},
	geo: {
		map: 'world',
		roam: true, //开启鼠标缩放和漫游
		zoom: 1.5, //地图缩放级别
		selectedMode: false, //选中模式：single | multiple
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		
		layoutCenter: ['50%', '50%'], //设置后left/right/top/bottom等属性无效
		layoutSize: '100%',
		label: {
			emphasis: {
				show: false
			}
		},
		itemStyle: {
			normal: {
				areaColor: '#101f32',
				borderWidth: 1.1,
				borderColor: '#43d0d6'
			},
			emphasis: {
				areaColor: '#069'
			}
		},
		// data:[]
	},
	series: {
		type: 'scatter',
		coordinateSystem: 'geo',
		symbolSize: function (val) {
		           return val[2] ;
		       },
		label: {
		    normal: {
		        show: false
		    },
		    emphasis: {
		        show: false
		    }
		},
		itemStyle: {
		    emphasis: {
		        borderColor: '#fff',
		        borderWidth: 1
		    }
		},
		data: []
	}
};
$.get('data/jwdu time.json').done(function(result) {
	worldMap.setOption({
		series: [{
			// 根据名字对应到相应的系列

			data: result,
			legend: {
			    data:result,
			},
		}]
	});
});
worldMap.setOption(worldMapOpt);

