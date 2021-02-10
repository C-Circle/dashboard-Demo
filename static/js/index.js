// 图1
(function() {
  // 1实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  // 2. 指定配置项和数据
  var option = {
      tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
          // orient: 'herizen',
          bottom: 0,
          data: ['male', 'female', 'None'],
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "12"
          }
      },
        toolbox: {
            show: true,
            orient: 'vertical' ,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
      series: [
        {
          name: '性别分布',
          type: 'pie',
          center: ['50%', '40%'],
          radius: ['40%', '60%'],
          roseType: false,
          avoidLabelOverlap: false,
          label: {
              show: true,
              fontSize: 12,
              position: 'left',
              formatter: '{b}:\n{c},{d}'
          },
          // 链接图形和文字的线条
          labelLine: {
            // length 链接图形的线条
            length: 6,
            // length2 链接文字的线条
            length2: 8,
          },
          emphasis: {
              label: {
                  show: true,
                  fontSize: '20',
                  fontWeight: 'bold'
              }
          },
          data: [
              {value: 4217, name: 'male'},
              {value: 18993, name: 'female'},
              {value: 2027, name: 'None'},
          ],
          itemStyle: {
            barBorderRadius: 20,
            // 此时的color 可以修改柱子的颜色
            color: function(params) {
              // params 传进来的是柱子对象
              // console.log(params);
              // dataIndex 是当前柱子的索引号
              return myColor[params.dataIndex];
            }
          },
        }
      ]
  };
  
  // 3. 把配置项给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
	function update_data1() {
		$.ajax({
			url:"/data?dname=data1",
            timeout: 10000, //超时时间设置，单位毫秒
			success:function (data){
				option["series"][0]["data"]=data;
				myChart.setOption(option);
			},
			error:function (xhr, type, errorThrown) {
				console.assert("Fail to get data...")
			}
		})
		return update_data1
	}
	setInterval(update_data1(), 1000 * 60 * 1) // 1分钟更新一次
})();
// 图2
(function() {
  var myColor = [
    "#006cff",
    "#60cda0",
    "#ed8884",
    "#ff9f7f",
    "#0096ff",
    "#9fe6b8",
    "#32c5e9",
    "#1d9dff"
  ];
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));
  // 2. 指定配置和数据
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
      textStyle: {
        fontSize: 12,
      },
      formatter: '{b}:{c}'
	},
	toolbox: {
		show: true,
		orient: 'horizontal', //'vertical' ,
		feature: {
			dataZoom: {
				yAxisIndex: 'none'
			},
			dataView: {readOnly: false},
			magicType: {type: ['line', 'bar', 'stack', 'tiled']},
			restore: {},
			saveAsImage: {}
		}
	},
    // 不显示x轴的相关信息
    xAxis: {
      show: true,
      type: 'category',
      axisLine: {
        show: false
      },
      axisLabel :{
        rotate: 45,
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      },
      // splitLine: {
      //   show: false,
      // },
      barGap: '100%',
      barCategoryGap: '40%',
      data: ['0-8岁', '8-14岁', '14-18岁', '18-20岁', '20-24岁', '24-30岁', '30-40岁', '40-50岁', '50-60岁', '60-100岁'],
    },
    yAxis: {
      type: "value",
      // inverse: true,
      // 不显示y轴的线
      axisLine: {
        show: false
      },
      // 不显示刻度
      axisTick: {
        show: false
      },
      // 不显示网格分割线
      splitLine: {
        show: false,
      },
      axisLabel :{
        show: false,
        rotate: 0,
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      },
    },
    series: [{
      data: [543, 5462, 5156, 5379, 16654, 4711, 792, 76, 30, 247],
      type: 'bar',
      label: {
          show: true,
          color: "rgba(255,255,255,.5)",
          position: 'top'
      },
      itemStyle: {
        color: function(params) {
          // params 传进来的是柱子对象
          // console.log(params);
          // dataIndex 是当前柱子的索引号
          return myColor[params.dataIndex];
        }
      },
    }],
  };
  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
  function update_data2() {
		$.ajax({
			url:"/data?dname=data2",
            timeout: 10000, //超时时间设置，单位毫秒
			success:function (data){
				option["series"][0]["data"]=data;
				myChart.setOption(option);
			},
			error:function (xhr, type, errorThrown) {
				console.assert("Fail to get data...")
			}
		})
		return update_data2
	}
	setInterval(update_data2(), 1000 * 60 * 1) // 1分钟更新一次
})();
// 图3
(function() {
  var myChart = echarts.init(document.querySelector(".line .chart"));
  var option = {
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff"
    ],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      bottom: "0%",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: "学习天数分布",
        type: "pie",
        radius: ["40%", "60%"],
        center: ["50%", "40%"],
        roseType: '',
        // 图形的文字标签
        label: {
          fontSize: 10
        },
        // 链接图形和文字的线条
        labelLine: {
          // length 链接图形的线条
          length: 6,
          // length2 链接文字的线条
          length2: 8
        },
        emphasis: {
            label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold'
            }
        },
        data: [
          {name: '0', value: 2024.0},
          {name: '0-10', value: 1700.0},
          {name: '10-30', value: 2173.0},
          {name: '30-90', value: 2663.0},
          {name: '90-180', value: 1624.0},
          {name: '180-360', value: 5527.0},
          {name: '360-720', value: 8827.0},
          {name: '720-1080', value: 651.0},
          {name: '1080-1440', value: 28.0},
          {name: '1440-1800', value: 6.0},
        ]
      }
    ]
  };
  myChart.setOption(option);
  // 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function() {
    myChart.resize();
  });
    function update_data3() {
		$.ajax({
			url:"/data?dname=data3",
            timeout: 10000,
			success:function (data){
				option["series"][0]["data"]=data;
				myChart.setOption(option);
			},
			error:function (xhr, type, errorThrown) {
				console.assert("Fail to get data...")
			}
		})
		return update_data3
	}
	setInterval(update_data3(), 1000 * 60 * 1) // 1分钟更新一次
})();
// 图4
(function() {
  var myColor = [
    "#006cff",
    "#60cda0",
    "#ed8884",
    "#ff9f7f",
    "#0096ff",
    "#9fe6b8",
    "#32c5e9",
    "#1d9dff"
  ];
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".line2 .chart"));
  // 2. 指定配置和数据
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
      textStyle: {
        fontSize: 12,
      },
      formatter: '{b}:{c}'
  },
    // 不显示x轴的相关信息
    xAxis: {
      show: true,
      type: 'category',
      axisLine: {
        show: false
      },
      axisLabel :{
        rotate: 45,
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      },
      // splitLine: {
      //   show: false,
      // },
      barGap: '100%',
      barCategoryGap: '40%',
      data: ['0-10', '10-50', '50-100', '100-500', '500-1k', 
	  '1k-2k', '2k-5k', '5k-1w', '1w-10w', '10w-30w'],
    },
    yAxis: {
      type: "value",
      // inverse: true,
      // 不显示y轴的线
      axisLine: {
        show: false
      },
      // 不显示刻度
      axisTick: {
        show: false
      },
      // 不显示网格分割线
      splitLine: {
        show: false,
      },
      axisLabel :{
        show: false,
        rotate: 0,
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      },
    },
    series: [{
      data: [11581, 13583, 4842, 6270, 1156, 692, 483, 180, 139, 4],
      type: 'bar',
      label: {
          show: true,
          color: "rgba(255,255,255,.5)",
          position: 'top'
      },
      itemStyle: {
        color: function(params) {
          // params 传进来的是柱子对象
          // console.log(params);
          // dataIndex 是当前柱子的索引号
          return myColor[params.dataIndex];
        }
      },
    }],
  };
  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
    function update_data4() {
		$.ajax({
			url:"/data?dname=data4",
            timeout: 10000,
			success:function (data){
				option["series"][0]["data"]=data;
				myChart.setOption(option);
			},
			error:function (xhr, type, errorThrown) {
				console.assert("Fail to get data...")
			}
		})
		return update_data4
	}
	setInterval(update_data4(), 1000 * 60 * 1) // 1分钟更新一次
})();
// 图5
 (function() {
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  var option = {
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff"
    ],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      bottom: "0%",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: "日均学习时长",
        type: "pie",
        radius: ["40%", "60%"],
        center: ["50%", "40%"],
        roseType: '',
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        // 图形的文字标签
        label: {
          show: true,
          position: 'top'
        },
        emphasis: {
            label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
            }
        },
        labelLine: {
            show: true
        },
        data: [
          {name: '0', value: 2024.0},
          {name: 1.0, value: 9508.0},
          {name: 2.0, value: 4312.0},
          {name: 3.0, value: 2787.0},
          {name: 4.0, value: 1878.0},
          {name: 5.0, value: 1381.0},
          {name: 6.0, value: 1058.0},
          {name: 7.0, value: 729.0},
          {name: 8.0, value: 494.0},
          {name: 9.0, value: 374.0},
          {name: 10.0, value: 236.0},
          {name: 11.0, value: 157.0},
          {name: 12.0, value: 111.0},
          {name: 13.0, value: 67.0},
          {name: 14.0, value: 40.0},
          {name: 15.0, value: 35.0},
          {name: 16.0, value: 10.0},
          {name: 18.0, value: 10.0},
          {name: 20.0, value: 6.0}
        ]
      }
    ]
  };
  myChart.setOption(option);
  // 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function() {
    myChart.resize();
  });
    function update_data5() {
		$.ajax({
			url:"/data?dname=data5",
            timeout: 10000,
			success:function (data){
				option["series"][0]["data"]=data;
				myChart.setOption(option);
			},
			error:function (xhr, type, errorThrown) {
				console.assert("Fail to get data...")
			}
		})
		return update_data5
	}
	setInterval(update_data5(), 1000 * 60 * 1) // 1分钟更新一次
})();

// 图6
 (function() {
  var myColor = [
    "#006cff", "#60cda0", "#ed8884", "#ff9f7f", "#0096ff", "#9fe6b8", "#32c5e9", "#1d9dff",
    "#006cff", "#60cda0", "#ed8884", "#ff9f7f", "#0096ff", "#9fe6b8", "#32c5e9", "#1d9dff"
  ];
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie2 .chart"));
  // 2. 指定配置和数据
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
      textStyle: {
        fontSize: 12,
      },
      formatter: '{b}:{c}'
  },
    // 不显示x轴的相关信息
    xAxis: {
      show: true,
      type: 'category',
      axisLine: {
        show: false
      },
      axisLabel :{
        rotate: 45,
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      },
      // splitLine: {
      //   show: false,
      // },
      barGap: '100%',
      barCategoryGap: '40%',
      data: ['0-10h', '10-50h', '50-100h', '100-200h', '200-500h', '500-1Kh', 
	  '1K-2Kh', '2K-3Kh', '3K-4Kh', '4K-5Kh', '5K-6Kh', '6K-8Kh', '8K-1Wh', '1W-10Wh'],
    },
    yAxis: {
      type: "value",
      // inverse: true,
      // 不显示y轴的线
      axisLine: {
        show: false
      },
      // 不显示刻度
      axisTick: {
        show: false
      },
      // 不显示网格分割线
      splitLine: {
        show: false,
      },
      axisLabel :{
        show: false,
        rotate: 0,
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      },
    },
    series: [{
      data: [2897, 4710, 3428, 4614, 7843, 6183, 5065, 1707, 590, 206, 71, 59, 10, 2],
      type: 'bar',
      label: {
          show: true,
          color: "rgba(255,255,255,.5)",
          position: 'top'
      },
      itemStyle: {
        color: function(params) {
          // params 传进来的是柱子对象
          // console.log(params);
          // dataIndex 是当前柱子的索引号
          return myColor[params.dataIndex];
        }
      },
    }],
  };
  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
    function update_data6() {
		$.ajax({
			url:"/data?dname=data6",
            timeout: 10000, //超时时间设置，单位毫秒
			success:function (data){
				option["series"][0]["data"]=data;
				myChart.setOption(option);
			},
			error:function (xhr, type, errorThrown) {
				console.assert("Fail to get data...")
			}
		})
		return update_data6
	}
	setInterval(update_data6(), 1000 * 60 * 1) // 1分钟更新一次
})();

// 中间大图
(function() {
        var words = new Array();
        function get_words() {
            $.ajax({
                url:"/data?dname=words",
                timeout: 10000,
                success:function (data){
                    console.log("get_words")
                    var canvas = document.querySelector(".map .chart");
                    words = eval(data.words3d);
                    //调用WordCloud
                    SVG3DTagCloud(canvas, words);
                },
                error:function (xhr, type, errorThrown) {
                    console.assert("Fail to get data: words...")
                }
            })
            return get_words
        }
        setInterval(get_words(), 1000 * 60 * 1) // 1分钟更新一次
})();
