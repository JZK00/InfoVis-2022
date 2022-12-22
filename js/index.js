// 立即执行函数，防止变量污染 (function() {})();
// 柱状图模块1
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 2.指定配置项和数据
  var option = {
    color: ['#2f89cf'],
    // 提示框组件
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    // 修改图表位置大小
    grid: {
      left: '0%',
      top: '10px',
      right: '0%',
      bottom: '4%',
      containLabel: true
    },
    // x轴相关配置
    xAxis: [{
      type: 'category',
      data: ["美国", "欧盟", "波兰", "英国", "德国", "加拿大", "其他国家"],
      axisTick: {
        alignWithLabel: true
      },
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.8)",
        fontSize: 10
      },
      // x轴样式不显示
      axisLine: {
        show: false
      }
    }],
    // y轴相关配置
    yAxis: [{
      type: 'value',
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.6)",
        fontSize: 12
      },
      // y轴样式修改
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.6)",
          width: 2
        }
      },
      // y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.1)"
        }
      }
    }],
    // 系列列表配置
    series: [{
      name: '经济支援',
      type: 'bar',
      barWidth: '35%',
      // ajax传动态数据
      data: [557, 480, 76, 74, 67, 32, 164],
      itemStyle: {
        // 修改柱子圆角
        barBorderRadius: 5
      }
    }]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 柱状图模块2
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));

  // 声明颜色数组
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  // 2.指定配置项和数据
  var option = {
    grid: {
      top: "10%",
      left: '22%',
      bottom: '10%',
      // containLabel: true
    },
    xAxis: {
      // 不显示x轴相关信息
      show: false
    },
    yAxis: [{
      type: 'category',
      // y轴数据反转，与数组的顺序一致
      inverse: true,
      // 不显示y轴线和刻度
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      // 将刻度标签文字设置为白色
      axisLabel: {
        color: "#fff"
      },
      data: ["石油", "煤炭", "天然气", "其他", "同比增长"]
    }, {
      // y轴数据反转，与数组的顺序一致
      inverse: true,
      show: true,
      // 不显示y轴线和刻度
      axisLine: {
        show: true
      },
      axisTick: {
        show: false
      },
      // 将刻度标签文字设置为白色
      axisLabel: {
        color: "#fff"
      },
      data: [500, 350, 100, 50, 2021]
    }],
    series: [{
        // 第一组柱子（条状）
        name: '条',
        type: 'bar',
        // 柱子之间的距离
        barCategoryGap: 50,
        // 柱子的宽度
        barWidth: 10,
        // 层级 相当于z-index
        yAxisIndex: 0,
        // 柱子更改样式
        itemStyle: {
          barBorderRadius: 20,
          // 此时的color可以修改柱子的颜色
          color: function (params) {
            // params 传进来的是柱子的对象
            // dataIndex 是当前柱子的索引号
            // console.log(params);
            return myColor[params.dataIndex];
          }
        },
        data: [50, 35, 10, 5, 49],
        // 显示柱子内的百分比文字
        label: {
          show: true,
          position: "inside",
          // {c} 会自动解析为数据（data内的数据）
          formatter: "{c}%"
        }
      },
      {
        // 第二组柱子（框状 border）
        name: '框',
        type: 'bar',
        // 柱子之间的距离
        barCategoryGap: 50,
        // 柱子的宽度
        barWidth: 14,
        // 层级 相当于z-index
        yAxisIndex: 1,
        // 柱子修改样式
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 2,
          barBorderRadius: 15,
        },
        data: [100, 100, 100, 100, 100]
      }
    ]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 折线图模块1
(function () {
  // 年份对应数据
  var yearData = [{
      year: "2008", // 年份
      data: [
        [91, 101, 100, 98,102,106,102,115,127,140,128,123],
		[0,0,0,0,0,0,0,20,20,5,0,0]
      ]
    },
   {
       year: "2014", // 年份
       data: [
         [91, 93, 103, 109,110,97,95,91,80,66,53,47],
   		[0,20,10,5,0,0,0,0,0,0,0,0]
       ]
     },
   {
      year: "2022", // 年份
      data: [
        [86.8,90,100,105.4,115.1,109.8,96.4,91.6,82.2,87.9,91.8],
		[0,10,15,20,20,20,20,20,15,15,10,10]
      ]
    }
  ];

  var myChart = echarts.init(document.querySelector(".line .chart"));

  var option = {
    // 修改两条线的颜色
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis'
    },
    // 图例组件
    legend: {
      // 当serise 有name值时， legend 不需要写data
      // 修改图例组件文字颜色
      textStyle: {
        color: '#4c9bfd'
      },
      right: '10%',
    },
    grid: {
      top: "20%",
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      show: true, // 显示边框
      borderColor: '#012f4a' // 边框颜色
    },
    xAxis: {
      type: 'category',
      boundaryGap: false, // 去除轴间距
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfb" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: 'value',
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfb" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [{
        type: 'line',
        smooth: true, // 圆滑的线
        name: '国际油价',
        data: yearData[0].data[0]
      },
      {
        type: 'line',
        smooth: true, // 圆滑的线
        name: '俄作战周期',
        data: yearData[0].data[1]
      }
    ]
  };
  myChart.setOption(option);
  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
  // 5.点击切换2020 和 2021 的数据
  $('.line h2 a').on('click', function () {
    // console.log($(this).index());
    // 点击a 之后 根据当前a的索引号 找到对应的 yearData 相关对象
    // console.log(yearData[$(this).index()]);
    var obj = yearData[$(this).index()];
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    // 选中年份高亮
    $('.line h2 a').removeClass('a-active');
    $(this).addClass('a-active');

    // 需要重新渲染
    myChart.setOption(option);
  })
})();

// 折线图模块2
(function () {
  var myChart = echarts.init(document.querySelector('.line2 .chart'));

  var option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    grid: {
      top: '30',
      left: '10',
      right: '30',
      bottom: '10',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: 12
        }
      },
      // x轴线的颜色为   rgba(255,255,255,.2)
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.2)"
        }
      },
      data: ['2021年1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月','2022年1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月']
    }],
    yAxis: [{
      type: 'value',
      axisTick: {
        // 不显示刻度线
        show: false
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      },
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: 12
        }
      },
      // 修改分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      }
    }],
    series: [{
        name: '中国石油涨幅',
        type: 'line',
        smooth: true, // 圆滑的线
        // 单独修改当前线条的样式
        lineStyle: {
          color: "#0184d5",
          width: 2
        },
        // 填充区域渐变透明颜色
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [{
                offset: 0,
                color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 拐点设置为小圆点
        symbol: 'circle',
        // 设置拐点大小
        symbolSize: 5,
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        data: [0.00,0.06,0.19 ,0.20 ,0.29 ,0.32 ,0.35 ,0.33 ,0.27 ,0.35 ,0.46 ,0.30 ,0.40 ,0.58 ,0.65 ,0.67 ,0.51 ,0.60 ,0.50 ,0.56 ,0.50 ,0.50 ,0.39]
      },
      {
        name: "英国石油涨幅",
        type: "line",
        smooth: true,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [{
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        data: [0.00, 0.12 ,0.12 ,0.19 ,0.24 ,0.31 ,0.33 ,0.30 ,0.39 ,0.46 ,0.29 ,0.43 ,0.59 ,0.69 ,0.66,0.90 ,1.04 ,0.94 ,0.93 ,0.83 ,0.64 ,0.82 ,0.84]
      }
    ]
  };

  myChart.setOption(option);

  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();


// 饼形图1
(function () {
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  var option = {
    color: ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6", "#aa0000", "#aaff7f", "#aa55ff", "#ffff00"],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      // 垂直居中,默认水平居中
      // orient: 'vertical',
      bottom: 0,
      left: 10,
      // 小图标的宽度和高度
      itemWidth: 10,
      itemHeight: 10,
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "10"
      }
    },
    series: [{
      name: '制裁53次',
      type: 'pie',
      // 设置饼形图在容器中的位置
      center: ["50%", "42%"],
      // 修改饼形图大小，第一个为内圆半径，第二个为外圆半径
      radius: ['40%', '80%'],
      avoidLabelOverlap: false,
      // 图形上的文字
      label: {
        show: false,
        position: 'center'
      },
      // 链接文字和图形的线
      labelLine: {
        show: false
      },
      data: [{
          value: 11,
          name: "美国"
        },
        {
          value: 15,
          name: "欧盟"
        },
        {
          value: 3,
          name: "乌克兰"
        },
        {
          value: 3,
          name: "英国"
        },
        {
          value: 2,
          name: "德国"
        },
		{
		  value: 2,
		  name: "法国"
		},
		{
		  value: 2,
		  name: "日本"
		},
		{
		  value: 28,
		  name: "其他（28个国家）"
		}
      ]
    }]
  };

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 饼形图2
(function () {
  var myChart = echarts.init(document.querySelector('.pie2 .chart'));
  var option = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  color: ["#1089E7","#00aa7f",  "#00aa7f", "#00aa7f","#aa0000", "#aa0000", "#aa0000", "#aa0000","#1089E7", "#1089E7","#1089E7", "#00aa7f", "#1089E7", "#00aa7f", "#00aa7f", "#00aa7f", "#00aa7f", "#00aa7f", "#00aa7f", "#00aa7f", "#00aa7f", "#00aa7f", "#00aa7f", "#00aa7f", "#00aa7f", "#00aa7f", "#00aa7f", "#00aa7f"],
  series: [
    {
      name: '乌克兰各州被占情况',
      type: 'pie',
      radius: ['45%', '60%'],
      labelLine: {
        length: 30
      },
      data: [
        { value: 1, name: '苏梅州'},
		{ value: 1, name: '日托米尔州'},
		{ value: 1, name: '基辅州'},
		{ value: 1, name: '切尔尼戈夫州'},
		
		{ value: 2, name: '顿涅茨克州' },
        { value: 2, name: '哈尔科夫州'},
        { value: 1, name: '卢甘斯克州' },
        { value: 2, name: '赫尔松州'},
        { value: 3, name: '尼古拉耶夫州' },
	    { value: 2, name: '敖德萨州' },
		{ value: 2, name: '扎波罗热州' },
		
		{ value: 1, name: '切尔卡瑟州'},
		{ value: 1, name: '第聂伯罗彼得罗夫斯克州' },
		{ value: 1, name: '文尼察州' },
		{ value: 1, name: '波尔塔瓦州'},
		{ value: 1, name: '基洛沃格勒州' },
		
		{ value: 1, name: '利沃夫州' },
        { value: 1, name: '沃伦州' },
        { value: 1, name: '罗夫诺州' },
        { value: 1, name: '赫梅利尼茨基州' },
        { value: 1, name: '捷尔诺波尔州' },
        { value: 1, name: '伊万诺-弗兰科夫斯克州' },
        { value: 1, name: '外喀尔巴阡州'},
        { value: 1, name: '切尔诺夫策州' }
				      ]
    }
  ]
};

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();


// 地图
(function () {
  var myChart = echarts.init(document.querySelector(".map .chart"))
  var nameMap={
        "Canada": "加拿大",
        "Turkmenistan": "土库曼斯坦",
        "Saint Helena": "圣赫勒拿",
        "Lao PDR": "老挝",
        "Lithuania": "立陶宛",
        "Cambodia": "柬埔寨",
        "Ethiopia": "埃塞俄比亚",
        "Faeroe Is.": "法罗群岛",
        "Swaziland": "斯威士兰",
        "Palestine": "巴勒斯坦",
        "Belize": "伯利兹",
        "Argentina": "阿根廷",
        "Bolivia": "玻利维亚",
        "Cameroon": "喀麦隆",
        "Burkina Faso": "布基纳法索",
        "Aland": "奥兰群岛",
        "Bahrain": "巴林",
        "Saudi Arabia": "沙特阿拉伯",
        "Fr. Polynesia": "法属波利尼西亚",
        "Cape Verde": "佛得角",
        "W. Sahara": "西撒哈拉",
        "Slovenia": "斯洛文尼亚",
        "Guatemala": "危地马拉",
        "Guinea": "几内亚",
        "Dem. Rep. Congo": "刚果（金）",
        "Germany": "德国",
        "Spain": "西班牙",
        "Liberia": "利比里亚",
        "Netherlands": "荷兰",
        "Jamaica": "牙买加",
        "Solomon Is.": "所罗门群岛",
        "Oman": "阿曼",
        "Tanzania": "坦桑尼亚",
        "Costa Rica": "哥斯达黎加",
        "Isle of Man": "曼岛",
        "Gabon": "加蓬",
        "Niue": "纽埃",
        "Bahamas": "巴哈马",
        "New Zealand": "新西兰",
        "Yemen": "也门",
        "Jersey": "泽西岛",
        "Pakistan": "巴基斯坦",
        "Albania": "阿尔巴尼亚",
        "Samoa": "萨摩亚",
        "Czech Rep.": "捷克",
        "United Arab Emirates": "阿拉伯联合酋长国",
        "Guam": "关岛",
        "India": "印度",
        "Azerbaijan": "阿塞拜疆",
        "N. Mariana Is.": "北马里亚纳群岛",
        "Lesotho": "莱索托",
        "Kenya": "肯尼亚",
        "Belarus": "白俄罗斯",
        "Tajikistan": "塔吉克斯坦",
        "Turkey": "土耳其",
        "Afghanistan": "阿富汗",
        "Bangladesh": "孟加拉国",
        "Mauritania": "毛里塔尼亚",
        "Dem. Rep. Korea": "朝鲜",
        "Saint Lucia": "圣卢西亚",
        "Br. Indian Ocean Ter.": "英属印度洋领地",
        "Mongolia": "蒙古",
        "France": "法国",
        "Cura?ao": "库拉索岛",
        "S. Sudan": "南苏丹",
        "Rwanda": "卢旺达",
        "Slovakia": "斯洛伐克",
        "Somalia": "索马里",
        "Peru": "秘鲁",
        "Vanuatu": "瓦努阿图",
        "Norway": "挪威",
        "Malawi": "马拉维",
        "Benin": "贝宁",
        "St. Vin. and Gren.": "圣文森特和格林纳丁斯",
        "Korea": "韩国",
        "Singapore": "新加坡",
        "Montenegro": "黑山共和国",
        "Cayman Is.": "开曼群岛",
        "Togo": "多哥",
        "China": "中国",
        "Heard I. and McDonald Is.": "赫德岛和麦克唐纳群岛",
        "Armenia": "亚美尼亚",
        "Falkland Is.": "马尔维纳斯群岛（福克兰）",
        "Ukraine": "乌克兰",
        "Ghana": "加纳",
        "Tonga": "汤加",
        "Finland": "芬兰",
        "Libya": "利比亚",
        "Dominican Rep.": "多米尼加",
        "Indonesia": "印度尼西亚",
        "Mauritius": "毛里求斯",
        "Eq. Guinea": "赤道几内亚",
        "Sweden": "瑞典",
        "Vietnam": "越南",
        "Mali": "马里",
        "Russia": "俄罗斯",
        "Bulgaria": "保加利亚",
        "United States": "美国",
        "Romania": "罗马尼亚",
        "Angola": "安哥拉",
        "Chad": "乍得",
        "South Africa": "南非",
        "Fiji": "斐济",
        "Liechtenstein": "列支敦士登",
        "Malaysia": "马来西亚",
        "Austria": "奥地利",
        "Mozambique": "莫桑比克",
        "Uganda": "乌干达",
        "Japan": "日本本土",
        "Niger": "尼日尔",
        "Brazil": "巴西",
        "Kuwait": "科威特",
        "Panama": "巴拿马",
        "Guyana": "圭亚那",
        "Madagascar": "马达加斯加",
        "Luxembourg": "卢森堡",
        "American Samoa": "美属萨摩亚",
        "Andorra": "安道尔",
        "Ireland": "爱尔兰",
        "Italy": "意大利",
        "Nigeria": "尼日利亚",
        "Turks and Caicos Is.": "特克斯和凯科斯群岛",
        "Ecuador": "厄瓜多尔",
        "U.S. Virgin Is.": "美属维尔京群岛",
        "Brunei": "文莱",
        "Australia": "澳大利亚",
        "Iran": "伊朗",
        "Algeria": "阿尔及利亚",
        "El Salvador": "萨尔瓦多",
        "C?te d'Ivoire": "科特迪瓦",
        "Chile": "智利",
        "Puerto Rico": "波多黎各",
        "Belgium": "比利时",
        "Thailand": "泰国",
        "Haiti": "海地",
        "Iraq": "伊拉克",
        "S?o Tomé and Principe": "圣多美和普林西比",
        "Sierra Leone": "塞拉利昂",
        "Georgia": "格鲁吉亚",
        "Denmark": "丹麦",
        "Philippines": "菲律宾",
        "S. Geo. and S. Sandw. Is.": "南乔治亚岛和南桑威奇群岛",
        "Moldova": "摩尔多瓦",
        "Morocco": "摩洛哥",
        "Namibia": "纳米比亚",
        "Malta": "马耳他",
        "Guinea-Bissau": "几内亚比绍",
        "Kiribati": "基里巴斯",
        "Switzerland": "瑞士",
        "Grenada": "格林纳达",
        "Seychelles": "塞舌尔",
        "Portugal": "葡萄牙",
        "Estonia": "爱沙尼亚",
        "Uruguay": "乌拉圭",
        "Antigua and Barb.": "安提瓜和巴布达",
        "Lebanon": "黎巴嫩",
        "Uzbekistan": "乌兹别克斯坦",
        "Tunisia": "突尼斯",
        "Djibouti": "吉布提",
        "Greenland": "丹麦",
        "Timor-Leste": "东帝汶",
        "Dominica": "多米尼克",
        "Colombia": "哥伦比亚",
        "Burundi": "布隆迪",
        "Bosnia and Herz.": "波斯尼亚和黑塞哥维那",
        "Cyprus": "塞浦路斯",
        "Barbados": "巴巴多斯",
        "Qatar": "卡塔尔",
        "Palau": "帕劳",
        "Bhutan": "不丹",
        "Sudan": "苏丹",
        "Nepal": "尼泊尔",
        "Micronesia": "密克罗尼西亚",
        "Bermuda": "百慕大",
        "Suriname": "苏里南",
        "Venezuela": "委内瑞拉",
        "Israel": "以色列",
        "St. Pierre and Miquelon": "圣皮埃尔和密克隆群岛",
        "Central African Rep.": "中非",
        "Iceland": "冰岛",
        "Zambia": "赞比亚",
        "Senegal": "塞内加尔",
        "Papua New Guinea": "巴布亚新几内亚",
        "Trinidad and Tobago": "特立尼达和多巴哥",
        "Zimbabwe": "津巴布韦",
        "Jordan": "约旦",
        "Gambia": "冈比亚",
        "Kazakhstan": "哈萨克斯坦",
        "Poland": "波兰",
        "Eritrea": "厄立特里亚",
        "Kyrgyzstan": "吉尔吉斯斯坦",
        "Montserrat": "蒙特塞拉特",
        "New Caledonia": "新喀里多尼亚",
        "Macedonia": "马其顿",
        "Paraguay": "巴拉圭",
        "Latvia": "拉脱维亚",
        "Hungary": "匈牙利",
        "Syria": "叙利亚",
        "Honduras": "洪都拉斯",
        "Myanmar": "缅甸",
        "Mexico": "墨西哥",
        "Egypt": "埃及",
        "Nicaragua": "尼加拉瓜",
        "Cuba": "古巴",
        "Serbia": "塞尔维亚",
        "Comoros": "科摩罗",
        "United Kingdom": "英国",
        "Fr. S. Antarctic Lands": "南极洲",
        "Congo": "刚果（布）",
        "Greece": "希腊",
        "Sri Lanka": "斯里兰卡",
        "Croatia": "克罗地亚",
        "Botswana": "博茨瓦纳",
        "Siachen Glacier": "锡亚琴冰川地区"
    }
  
  var option = { 
	  title: {
          text: '北约东扩态势',
          left: 'center',
          textStyle: {
              color: 'white'
          },
         subtext: 'Data from www.people.cn',
         sublink: 'http://app.people.cn/h5/topic/subject_normal/771',
		  top: 'top'
      },
     visualMap: {
         min: 1900,
         max: 2022,
         text: ['2022', '1937'],
         realtime: false,
         calculable: false,
         textStyle: {
             color: 'white'
         },
         color: ['#aa0000', '#ff557f','#ffaa7f','#00aaff']
     },
      series: [{
          name: '国际组织',
          type: 'map',
          mapType: 'world',
          roam: true,
          itemStyle: {
              normal: {
                  areaColor: '#00aaff',
                  borderColor: 'rgb(0,108,255)',
              },
              emphasis: {
                  label: {
                      show: true,
                      color: '#ffe2ff'
                  },
                  areaColor: '#00007f',				
              }
          },
          nameMap: nameMap,
          // data: 
		 data:[
		 		  {name:"加拿大",	value:"1949"},
		 		  {name:"土库曼斯坦",	value:"0"},
		 		  {name:"圣赫勒拿",	value:"0"},
		 		  {name:"老挝",	value:"0"},
		 		  {name:"立陶宛",	value:"2004"},
		 		  {name:"柬埔寨",	value:"0"},
		 		  {name:"埃塞俄比亚",	value:"0"},
		 		  {name:"法罗群岛",	value:"0"},
		 		  {name:"斯威士兰",	value:"0"},
		 		  {name:"巴勒斯坦",	value:"0"},
		 		  {name:"伯利兹",	value:"0"},
		 		  {name:"阿根廷",	value:"0"},
		 		  {name:"玻利维亚",	value:"0"},
		 		  {name:"喀麦隆",	value:"0"},
		 		  {name:"布基纳法索",	value:"0"},
		 		  {name:"奥兰群岛",	value:"0"},
		 		  {name:"巴林",	value:"0"},
		 		  {name:"沙特阿拉伯",	value:"0"},
		 		  {name:"法属波利尼西亚",	value:"0"},
		 		  {name:"佛得角",	value:"0"},
		 		  {name:"西撒哈拉",	value:"0"},
		 		  {name:"斯洛文尼亚",	value:"2004"},
		 		  {name:"危地马拉",	value:"0"},
		 		  {name:"几内亚",	value:"0"},
		 		  {name:"刚果（金）",	value:"0"},
		 		  {name:"德国",	value:"1955"},
		 		  {name:"西班牙",	value:"1982"},
		 		  {name:"利比里亚",	value:"0"},
		 		  {name:"荷兰",	value:"1949"},
		 		  {name:"牙买加",	value:"0"},
		 		  {name:"所罗门群岛",	value:"0"},
		 		  {name:"阿曼",	value:"0"},
		 		  {name:"坦桑尼亚",	value:"0"},
		 		  {name:"哥斯达黎加",	value:"0"},
		 		  {name:"曼岛",	value:"0"},
		 		  {name:"加蓬",	value:"0"},
		 		  {name:"纽埃",	value:"0"},
		 		  {name:"巴哈马",	value:"0"},
		 		  {name:"新西兰",	value:"0"},
		 		  {name:"也门",	value:"0"},
		 		  {name:"泽西岛",	value:"0"},
		 		  {name:"巴基斯坦",	value:"0"},
		 		  {name:"阿尔巴尼亚",	value:"2009"},
		 		  {name:"萨摩亚",	value:"0"},
		 		  {name:"捷克",	value:"1999"},
		 		  {name:"阿拉伯联合酋长国",	value:"0"},
		 		  {name:"关岛",	value:"0"},
		 		  {name:"印度",	value:"0"},
		 		  {name:"阿塞拜疆",	value:"0"},
		 		  {name:"北马里亚纳群岛",	value:"0"},
		 		  {name:"莱索托",	value:"0"},
		 		  {name:"肯尼亚",	value:"0"},
		 		  {name:"白俄罗斯",	value:"0"},
		 		  {name:"塔吉克斯坦",	value:"0"},
		 		  {name:"土耳其",	value:"1952"},
		 		  {name:"阿富汗",	value:"0"},
		 		  {name:"孟加拉国",	value:"0"},
		 		  {name:"毛里塔尼亚",	value:"0"},
		 		  {name:"朝鲜",	value:"0"},
		 		  {name:"圣卢西亚",	value:"0"},
		 		  {name:"英属印度洋领地",	value:"0"},
		 		  {name:"蒙古",	value:"0"},
		 		  {name:"法国",	value:"1949"},
		 		  {name:"库拉索岛",	value:"0"},
		 		  {name:"南苏丹",	value:"0"},
		 		  {name:"卢旺达",	value:"0"},
		 		  {name:"斯洛伐克",	value:"2004"},
		 		  {name:"索马里",	value:"0"},
		 		  {name:"秘鲁",	value:"0"},
		 		  {name:"瓦努阿图",	value:"0"},
		 		  {name:"挪威",	value:"1949"},
		 		  {name:"马拉维",	value:"0"},
		 		  {name:"贝宁",	value:"0"},
		 		  {name:"圣文森特和格林纳丁斯",	value:"0"},
		 		  {name:"韩国",	value:"0"},
		 		  {name:"新加坡",	value:"0"},
		 		  {name:"黑山共和国",	value:"2017"},
		 		  {name:"开曼群岛",	value:"0"},
		 		  {name:"多哥",	value:"0"},
		 		  {name:"中国",	value:"0"},
		 		  {name:"赫德岛和麦克唐纳群岛",	value:"0"},
		 		  {name:"亚美尼亚",	value:"0"},
		 		  {name:"马尔维纳斯群岛（福克兰）",	value:"0"},
		 		  {name:"乌克兰",	value:"0"},
		 		  {name:"加纳",	value:"0"},
		 		  {name:"汤加",	value:"0"},
		 		  {name:"芬兰",	value:"2022"},
		 		  {name:"利比亚",	value:"0"},
		 		  {name:"多米尼加",	value:"0"},
		 		  {name:"印度尼西亚",	value:"0"},
		 		  {name:"毛里求斯",	value:"0"},
		 		  {name:"赤道几内亚",	value:"0"},
		 		  {name:"瑞典",	value:"2022"},
		 		  {name:"越南",	value:"0"},
		 		  {name:"马里",	value:"0"},
		 		  {name:"俄罗斯",	value:"0"},
		 		  {name:"保加利亚",	value:"2004"},
		 		  {name:"美国",	value:"1949"},
		 		  {name:"罗马尼亚",	value:"2004"},
		 		  {name:"安哥拉",	value:"0"},
		 		  {name:"乍得",	value:"0"},
		 		  {name:"南非",	value:"0"},
		 		  {name:"斐济",	value:"0"},
		 		  {name:"列支敦士登",	value:"0"},
		 		  {name:"马来西亚",	value:"0"},
		 		  {name:"奥地利",	value:"0"},
		 		  {name:"莫桑比克",	value:"0"},
		 		  {name:"乌干达",	value:"0"},
		 		  {name:"日本本土",	value:"0"},
		 		  {name:"尼日尔",	value:"0"},
		 		  {name:"巴西",	value:"0"},
		 		  {name:"科威特",	value:"0"},
		 		  {name:"巴拿马",	value:"0"},
		 		  {name:"圭亚那",	value:"0"},
		 		  {name:"马达加斯加",	value:"0"},
		 		  {name:"卢森堡",	value:"1949"},
		 		  {name:"美属萨摩亚",	value:"0"},
		 		  {name:"安道尔",	value:"0"},
		 		  {name:"爱尔兰",	value:"0"},
		 		  {name:"意大利",	value:"1949"},
		 		  {name:"尼日利亚",	value:"0"},
		 		  {name:"特克斯和凯科斯群岛",	value:"0"},
		 		  {name:"厄瓜多尔",	value:"0"},
		 		  {name:"美属维尔京群岛",	value:"0"},
		 		  {name:"文莱",	value:"0"},
		 		  {name:"澳大利亚",	value:"0"},
		 		  {name:"伊朗",	value:"0"},
		 		  {name:"阿尔及利亚",	value:"0"},
		 		  {name:"萨尔瓦多",	value:"0"},
		 		  {name:"科特迪瓦",	value:"0"},
		 		  {name:"智利",	value:"0"},
		 		  {name:"波多黎各",	value:"0"},
		 		  {name:"比利时",	value:"1949"},
		 		  {name:"泰国",	value:"0"},
		 		  {name:"海地",	value:"0"},
		 		  {name:"伊拉克",	value:"0"},
		 		  {name:"圣多美和普林西比",	value:"0"},
		 		  {name:"塞拉利昂",	value:"0"},
		 		  {name:"格鲁吉亚",	value:"0"},
		 		  {name:"丹麦",	value:"1949"},
		 		  {name:"菲律宾",	value:"0"},
		 		  {name:"南乔治亚岛和南桑威奇群岛",	value:"0"},
		 		  {name:"摩尔多瓦",	value:"0"},
		 		  {name:"摩洛哥",	value:"0"},
		 		  {name:"纳米比亚",	value:"0"},
		 		  {name:"马耳他",	value:"0"},
		 		{name:"几内亚比绍",	value:"0"},
		 		  {name:"瑞士",	value:"0"},
		 		  {name:"格林纳达",	value:"0"},
		 		  {name:"塞舌尔",	value:"0"},
		 		  {name:"葡萄牙",	value:"1949"},
		 		  {name:"爱沙尼亚",	value:"2004"},
		 		  {name:"乌拉圭",	value:"0"},
		 		  {name:"安提瓜和巴布达",	value:"0"},
		 		  {name:"黎巴嫩",	value:"0"},
		 		  {name:"乌兹别克斯坦",	value:"0"},
		 		  {name:"突尼斯",	value:"0"},
		 		  {name:"吉布提",	value:"0"},
		 		  {name:"丹麦",	value:"0"},
		 		 {name:"东帝汶",	value:"1949"},
		 		  {name:"多米尼克",	value:"0"},
		 		  {name:"哥伦比亚",	value:"0"},
		 		  {name:"布隆迪",	value:"0"},
		 		  {name:"波斯尼亚和黑塞哥维那",	value:"0"},
		 		  {name:"塞浦路斯",	value:"0"},
		 		  {name:"巴巴多斯",	value:"0"},
		 		  {name:"卡塔尔",	value:"0"},
		 		  {name:"帕劳",	value:"0"},
		 		  {name:"不丹",	value:"0"},
		 		  {name:"苏丹",	value:"0"},
		 		  {name:"尼泊尔",	value:"0"},
		 		  {name:"密克罗尼西亚",	value:"0"},
		 		  {name:"百慕大",	value:"0"},
		 		  {name:"苏里南",	value:"0"},
		 		  {name:"委内瑞拉",	value:"0"},
		 		  {name:"以色列",	value:"0"},
		 		  {name:"圣皮埃尔和密克隆群岛",	value:"0"},
		 		  {name:"中非",	value:"0"},
		 		  {name:"冰岛",	value:"1949"},
		 		  {name:"赞比亚",	value:"0"},
		 		  {name:"塞内加尔",	value:"0"},
		 		  {name:"巴布亚新几内亚",	value:"0"},
		 		  {name:"特立尼达和多巴哥",	value:"0"},
		 		  {name:"津巴布韦",	value:"0"},
		 		  {name:"约旦",	value:"0"},
		 		  {name:"冈比亚",	value:"0"},
		 		  {name:"哈萨克斯坦",	value:"0"},
		 		  {name:"波兰",	value:"1999"},
		 		  {name:"厄立特里亚",	value:"0"},
		 		  {name:"吉尔吉斯斯坦",	value:"0"},
		 		  {name:"蒙特塞拉特",	value:"0"},
		 		  {name:"新喀里多尼亚",	value:"0"},
		 		  {name:"马其顿",	value:"0"},
		 		  {name:"巴拉圭",	value:"0"},
		 		  {name:"拉脱维亚",	value:"2004"},
		 		  {name:"匈牙利",	value:"1999"},
		 		  {name:"叙利亚",	value:"0"},
		 		  {name:"洪都拉斯",	value:"0"},
		 		  {name:"缅甸",	value:"0"},
		 		  {name:"墨西哥",	value:"0"},
		 		  {name:"埃及",	value:"0"},
		 		  {name:"尼加拉瓜",	value:"0"},
		 		  {name:"古巴",	value:"0"},
		 		  {name:"塞尔维亚",	value:"0"},
		 		  {name:"科摩罗",	value:"0"},
		 		  {name:"英国",	value:"1949"},
		 		  {name:"南极洲",	value:"0"},
		 		  {name:"刚果（布）",	value:"0"},
		 		  {name:"希腊",	value:"1952"},
		 		  {name:"斯里兰卡",	value:"0"},
		 		  {name:"克罗地亚",	value:"2009"},
		 		  {name:"博茨瓦纳",	value:"0"},
		 		  {name:"锡亚琴冰川地区",	value:"0"}		

		 ]  
		 }] 
		
  };
  // 把配置和数据给实例对象
  myChart.setOption(option);  
  
  window.addEventListener('resize', function () {
  myChart.resize();
  })
})();