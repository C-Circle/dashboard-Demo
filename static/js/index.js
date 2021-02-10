// 图1
(function() {
  // 1实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
/*   原生方法
  var xmlhttp=new XMLHttpRequest();
  var url="/data?dtype=statistic" //要获取数据的接口
  var type="GET";//方法
  xmlhttp.open(type,url,true);//方法，接口，异步
  xmlhttp.send();//发送请求
  xmlhttp.onreadystatechange=function(){
  if(xmlhttp.status==200&&xmlhttp.readyState==4){
	var myData=JSON.parse(xmlhttp.response); //获取到的json数据
	console.log(myData);
	}
  }
  jquery
  $.ajax({
		url:"/data?dtype=statistic",
		success:function (data){
			console.log(myData);
		},
		error:function (xhr, type, errorThrown) {
		}
	}) */
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


// 模拟飞行路线模块地图模块
// (function() {
//   var myChart = echarts.init(document.querySelector(".map .chart"));
//   var geoCoordMap = {
//     上海: [121.4648, 31.2891],
//     东莞: [113.8953, 22.901],
//     东营: [118.7073, 37.5513],
//     中山: [113.4229, 22.478],
//     临汾: [111.4783, 36.1615],
//     临沂: [118.3118, 35.2936],
//     丹东: [124.541, 40.4242],
//     丽水: [119.5642, 28.1854],
//     乌鲁木齐: [87.9236, 43.5883],
//     佛山: [112.8955, 23.1097],
//     保定: [115.0488, 39.0948],
//     兰州: [103.5901, 36.3043],
//     包头: [110.3467, 41.4899],
//     北京: [116.4551, 40.2539],
//     北海: [109.314, 21.6211],
//     南京: [118.8062, 31.9208],
//     南宁: [108.479, 23.1152],
//     南昌: [116.0046, 28.6633],
//     南通: [121.1023, 32.1625],
//     厦门: [118.1689, 24.6478],
//     台州: [121.1353, 28.6688],
//     合肥: [117.29, 32.0581],
//     呼和浩特: [111.4124, 40.4901],
//     咸阳: [108.4131, 34.8706],
//     哈尔滨: [127.9688, 45.368],
//     唐山: [118.4766, 39.6826],
//     嘉兴: [120.9155, 30.6354],
//     大同: [113.7854, 39.8035],
//     大连: [122.2229, 39.4409],
//     天津: [117.4219, 39.4189],
//     太原: [112.3352, 37.9413],
//     威海: [121.9482, 37.1393],
//     宁波: [121.5967, 29.6466],
//     宝鸡: [107.1826, 34.3433],
//     宿迁: [118.5535, 33.7775],
//     常州: [119.4543, 31.5582],
//     广州: [113.5107, 23.2196],
//     廊坊: [116.521, 39.0509],
//     延安: [109.1052, 36.4252],
//     张家口: [115.1477, 40.8527],
//     徐州: [117.5208, 34.3268],
//     德州: [116.6858, 37.2107],
//     惠州: [114.6204, 23.1647],
//     成都: [103.9526, 30.7617],
//     扬州: [119.4653, 32.8162],
//     承德: [117.5757, 41.4075],
//     拉萨: [91.1865, 30.1465],
//     无锡: [120.3442, 31.5527],
//     日照: [119.2786, 35.5023],
//     昆明: [102.9199, 25.4663],
//     杭州: [119.5313, 29.8773],
//     枣庄: [117.323, 34.8926],
//     柳州: [109.3799, 24.9774],
//     株洲: [113.5327, 27.0319],
//     武汉: [114.3896, 30.6628],
//     汕头: [117.1692, 23.3405],
//     江门: [112.6318, 22.1484],
//     沈阳: [123.1238, 42.1216],
//     沧州: [116.8286, 38.2104],
//     河源: [114.917, 23.9722],
//     泉州: [118.3228, 25.1147],
//     泰安: [117.0264, 36.0516],
//     泰州: [120.0586, 32.5525],
//     济南: [117.1582, 36.8701],
//     济宁: [116.8286, 35.3375],
//     海口: [110.3893, 19.8516],
//     淄博: [118.0371, 36.6064],
//     淮安: [118.927, 33.4039],
//     深圳: [114.5435, 22.5439],
//     清远: [112.9175, 24.3292],
//     温州: [120.498, 27.8119],
//     渭南: [109.7864, 35.0299],
//     湖州: [119.8608, 30.7782],
//     湘潭: [112.5439, 27.7075],
//     滨州: [117.8174, 37.4963],
//     潍坊: [119.0918, 36.524],
//     烟台: [120.7397, 37.5128],
//     玉溪: [101.9312, 23.8898],
//     珠海: [113.7305, 22.1155],
//     盐城: [120.2234, 33.5577],
//     盘锦: [121.9482, 41.0449],
//     石家庄: [114.4995, 38.1006],
//     福州: [119.4543, 25.9222],
//     秦皇岛: [119.2126, 40.0232],
//     绍兴: [120.564, 29.7565],
//     聊城: [115.9167, 36.4032],
//     肇庆: [112.1265, 23.5822],
//     舟山: [122.2559, 30.2234],
//     苏州: [120.6519, 31.3989],
//     莱芜: [117.6526, 36.2714],
//     菏泽: [115.6201, 35.2057],
//     营口: [122.4316, 40.4297],
//     葫芦岛: [120.1575, 40.578],
//     衡水: [115.8838, 37.7161],
//     衢州: [118.6853, 28.8666],
//     西宁: [101.4038, 36.8207],
//     西安: [109.1162, 34.2004],
//     贵阳: [106.6992, 26.7682],
//     连云港: [119.1248, 34.552],
//     邢台: [114.8071, 37.2821],
//     邯郸: [114.4775, 36.535],
//     郑州: [113.4668, 34.6234],
//     鄂尔多斯: [108.9734, 39.2487],
//     重庆: [107.7539, 30.1904],
//     金华: [120.0037, 29.1028],
//     铜川: [109.0393, 35.1947],
//     银川: [106.3586, 38.1775],
//     镇江: [119.4763, 31.9702],
//     长春: [125.8154, 44.2584],
//     长沙: [113.0823, 28.2568],
//     长治: [112.8625, 36.4746],
//     阳泉: [113.4778, 38.0951],
//     青岛: [120.4651, 36.3373],
//     韶关: [113.7964, 24.7028]
//   };

//   var XAData = [
//     [{ name: "西安" }, { name: "拉萨", value: 100 }],
//     [{ name: "西安" }, { name: "上海", value: 100 }],
//     [{ name: "西安" }, { name: "广州", value: 100 }],
//     [{ name: "西安" }, { name: "西宁", value: 100 }],
//     [{ name: "西安" }, { name: "银川", value: 100 }]
//   ];

//   var XNData = [
//     [{ name: "西宁" }, { name: "北京", value: 100 }],
//     [{ name: "西宁" }, { name: "上海", value: 100 }],
//     [{ name: "西宁" }, { name: "广州", value: 100 }],
//     [{ name: "西宁" }, { name: "西安", value: 100 }],
//     [{ name: "西宁" }, { name: "银川", value: 100 }]
//   ];

//   var YCData = [
//     [{ name: "拉萨" }, { name: "潍坊", value: 100 }],
//     [{ name: "拉萨" }, { name: "哈尔滨", value: 100 }],
//     [{ name: "银川" }, { name: "上海", value: 100 }],
//     [{ name: "银川" }, { name: "西安", value: 100 }],
//     [{ name: "银川" }, { name: "西宁", value: 100 }]
//   ];

//   var planePath =
//     "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
//   //var planePath = 'arrow';
//   var convertData = function(data) {
//     var res = [];
//     for (var i = 0; i < data.length; i++) {
//       var dataItem = data[i];

//       var fromCoord = geoCoordMap[dataItem[0].name];
//       var toCoord = geoCoordMap[dataItem[1].name];
//       if (fromCoord && toCoord) {
//         res.push({
//           fromName: dataItem[0].name,
//           toName: dataItem[1].name,
//           coords: [fromCoord, toCoord],
//           value: dataItem[1].value
//         });
//       }
//     }
//     return res;
//   };

//   var color = ["#a6c84c", "#ffa022", "#46bee9"]; //航线的颜色
//   var series = [];
//   [
//     ["西安", XAData],
//     ["西宁", XNData],
//     ["银川", YCData]
//   ].forEach(function(item, i) {
//     series.push(
//       {
//         name: item[0] + " Top3",
//         type: "lines",
//         zlevel: 1,
//         effect: {
//           show: true,
//           period: 6,
//           trailLength: 0.7,
//           color: "red", //arrow箭头的颜色
//           symbolSize: 3
//         },
//         lineStyle: {
//           normal: {
//             color: color[i],
//             width: 0,
//             curveness: 0.2
//           }
//         },
//         data: convertData(item[1])
//       },
//       {
//         name: item[0] + " Top3",
//         type: "lines",
//         zlevel: 2,
//         symbol: ["none", "arrow"],
//         symbolSize: 10,
//         effect: {
//           show: true,
//           period: 6,
//           trailLength: 0,
//           symbol: planePath,
//           symbolSize: 15
//         },
//         lineStyle: {
//           normal: {
//             color: color[i],
//             width: 1,
//             opacity: 0.6,
//             curveness: 0.2
//           }
//         },
//         data: convertData(item[1])
//       },
//       {
//         name: item[0] + " Top3",
//         type: "effectScatter",
//         coordinateSystem: "geo",
//         zlevel: 2,
//         rippleEffect: {
//           brushType: "stroke"
//         },
//         label: {
//           normal: {
//             show: true,
//             position: "right",
//             formatter: "{b}"
//           }
//         },
//         symbolSize: function(val) {
//           return val[2] / 8;
//         },
//         itemStyle: {
//           normal: {
//             color: color[i]
//           },
//           emphasis: {
//             areaColor: "#2B91B7"
//           }
//         },
//         data: item[1].map(function(dataItem) {
//           return {
//             name: dataItem[1].name,
//             value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//           };
//         })
//       }
//     );
//   });
//   var option = {
//     tooltip: {
//       trigger: "item",
//       formatter: function(params, ticket, callback) {
//         if (params.seriesType == "effectScatter") {
//           return "线路：" + params.data.name + "" + params.data.value[2];
//         } else if (params.seriesType == "lines") {
//           return (
//             params.data.fromName +
//             ">" +
//             params.data.toName +
//             "<br />" +
//             params.data.value
//           );
//         } else {
//           return params.name;
//         }
//       }
//     },
//     legend: {
//       orient: "vertical",
//       top: "bottom",
//       left: "right",
//       data: ["西安 Top3", "西宁 Top3", "银川 Top3"],
//       textStyle: {
//         color: "#fff"
//       },
//       selectedMode: "multiple"
//     },
//     geo: {
//       map: "china",
//       label: {
//         emphasis: {
//           show: true,
//           color: "#fff"
//         }
//       },
//       // 把中国地图放大了1.2倍
//       zoom: 1.2,
//       roam: true,
//       itemStyle: {
//         normal: {
//           // 地图省份的背景颜色
//           areaColor: "rgba(20, 41, 87,0.6)",
//           borderColor: "#195BB9",
//           borderWidth: 1
//         },
//         emphasis: {
//           areaColor: "#2B91B7"
//         }
//       }
//     },
//     series: series
//   };
//   myChart.setOption(option);
//   // 监听浏览器缩放，图表对象调用缩放resize函数
//   window.addEventListener("resize", function() {
//     myChart.resize();
//   });
// })();

// mycharts1
// (function() {
//   var myChart = echarts.init(document.querySelector(".map .chart"));
//   var option = {
//       // "backgroundColor": "#031739",
//       "tooltip": {
//           "show": true,
//           "textStyle": {
//               "fontSize": "16",
//               "color": "#3c3c3c"
//           },
//           "backgroundColor": "#fff",
//           "borderColor": "#ddd",
//           "borderWidth": 1
//       },
//       "series": [{
//           "name": "积分排行",
//           "type": "wordCloud",
//           "gridSize": 8,
//           "sizeRange": [12, 30],
//           "rotationRange": [-30, 30],
//           "shape": "circle",
//           "autoSize": {
//               "enable": true,
//               "minSize": 18
//           },
//           "data": [{name: '考研', value: 7775, 'textStyle': {'normal': {'color': '#FF6C02'}}},
//           {name: '英语', value: 3904, 'textStyle': {'normal': {'color': '#E7D700'}}},
//           {name: '高考', value: 1703, 'textStyle': {'normal': {'color': '#FF6C02'}}},
//           {name: '英语六级',
//            value: 1423,
//            'textStyle': {'normal': {'color': '#FF6C02'}}},
//           {name: '中考', value: 1270, 'textStyle': {'normal': {'color': '#FEC106'}}},
//           {name: '雅思', value: 1266, 'textStyle': {'normal': {'color': '#E00702'}}},
//           {name: '阅读', value: 1139, 'textStyle': {'normal': {'color': '#AB0068'}}},
//           {name: '英语四级',
//            value: 1082,
//            'textStyle': {'normal': {'color': '#E00702'}}},
//           {name: '日语', value: 754, 'textStyle': {'normal': {'color': '#FEC106'}}},
//           {name: '中小学教师资格',
//            value: 722,
//            'textStyle': {'normal': {'color': '#E7D700'}}},
//           {name: '写作', value: 710, 'textStyle': {'normal': {'color': '#E7D700'}}},
//           {name: '手账', value: 702, 'textStyle': {'normal': {'color': '#AB0068'}}},
//           {name: '健身', value: 686, 'textStyle': {'normal': {'color': '#FEC106'}}},
//           {name: '绘画', value: 636, 'textStyle': {'normal': {'color': '#FEC106'}}},
//           {name: '公务员', value: 519, 'textStyle': {'normal': {'color': '#E00702'}}},
//           {name: '注册会计师(CPA)',
//            value: 517,
//            'textStyle': {'normal': {'color': '#FF6C02'}}},
//           {name: '小升初', value: 448, 'textStyle': {'normal': {'color': '#FEC106'}}},
//           {name: '法律职业资格考试',
//            value: 426,
//            'textStyle': {'normal': {'color': '#AB0068'}}},
//           {name: '初级会计', value: 415, 'textStyle': {'normal': {'color': '#FEC106'}}},
//           {name: '视频剪辑', value: 412, 'textStyle': {'normal': {'color': '#AB0068'}}},
//           {name: '书法', value: 409, 'textStyle': {'normal': {'color': '#E00702'}}},
//           {name: '学习', value: 402, 'textStyle': {'normal': {'color': '#FEC106'}}},
//           {name: '专升本', value: 373, 'textStyle': {'normal': {'color': '#E7D700'}}},
//           {name: '教育编制', value: 335, 'textStyle': {'normal': {'color': '#E00702'}}},
//           {name: '唱歌', value: 330, 'textStyle': {'normal': {'color': '#AB0068'}}},
//           {name: '自律', value: 284, 'textStyle': {'normal': {'color': '#FEC106'}}},
//           {name: '数学', value: 274, 'textStyle': {'normal': {'color': '#FEC106'}}},
//           {name: '托福', value: 270, 'textStyle': {'normal': {'color': '#AB0068'}}},
//           {name: '摄影', value: 265, 'textStyle': {'normal': {'color': '#FF6C02'}}},
//           {name: 'python',
//            value: 265,
//            'textStyle': {'normal': {'color': '#FEC106'}}},
//           {name: '事业编制', value: 240, 'textStyle': {'normal': {'color': '#E00702'}}},
//           {name: '注册会计师',
//            value: 228,
//            'textStyle': {'normal': {'color': '#E00702'}}},
//           {name: '英语专八', value: 227, 'textStyle': {'normal': {'color': '#E7D700'}}},
//           {name: '跑步', value: 220, 'textStyle': {'normal': {'color': '#E7D700'}}},
//           {name: '吉他', value: 213, 'textStyle': {'normal': {'color': '#FF6C02'}}},
//           {name: '文学', value: 193, 'textStyle': {'normal': {'color': '#AB0068'}}},
//           {name: '执业医师', value: 190, 'textStyle': {'normal': {'color': '#FF6C02'}}},
//           {name: '历史', value: 155, 'textStyle': {'normal': {'color': '#E00702'}}},
//           {name: 'GRE', value: 154, 'textStyle': {'normal': {'color': '#FF6C02'}}},
//           {name: '英语专四', value: 151, 'textStyle': {'normal': {'color': '#FEC106'}}},
//           {name: '韩语', value: 151, 'textStyle': {'normal': {'color': '#FEC106'}}},
//           {name: '画画', value: 149, 'textStyle': {'normal': {'color': '#FF6C02'}}},
//           {name: '法律硕士', value: 144, 'textStyle': {'normal': {'color': '#E7D700'}}},
//           {name: '演讲', value: 131, 'textStyle': {'normal': {'color': '#FEC106'}}},
//           {name: '篮球', value: 122, 'textStyle': {'normal': {'color': '#FEC106'}}},
//           {name: '计算机二级',
//            value: 116,
//            'textStyle': {'normal': {'color': '#AB0068'}}},
//           {name: '小语种', value: 114, 'textStyle': {'normal': {'color': '#FF6C02'}}},
//           {name: '考博', value: 111, 'textStyle': {'normal': {'color': '#E00702'}}},
//           {name: '法语', value: 106, 'textStyle': {'normal': {'color': '#E00702'}}},
//           {name: '税务师', value: 104, 'textStyle': {'normal': {'color': '#FEC106'}}},
//           {name: '钢琴', value: 101, 'textStyle': {'normal': {'color': '#AB0068'}}},
//           {name: '自考', value: 97, 'textStyle': {'normal': {'color': '#E7D700'}}},
//           {name: '21考研', value: 96, 'textStyle': {'normal': {'color': '#FF6C02'}}},
//           {name: '特许金融分析师(CFA)',
//            value: 93,
//            'textStyle': {'normal': {'color': '#FEC106'}}},
//           {name: '二战', value: 91, 'textStyle': {'normal': {'color': '#FEC106'}}},
//           {name: '减肥', value: 88, 'textStyle': {'normal': {'color': '#FEC106'}}},
//           {name: '论文', value: 88, 'textStyle': {'normal': {'color': '#E7D700'}}},
//           {name: '舞蹈', value: 87, 'textStyle': {'normal': {'color': '#FF6C02'}}},
//           {name: '国际注册会计师(ACCA)',
//            value: 86,
//            'textStyle': {'normal': {'color': '#AB0068'}}},
//           {name: '运动', value: 85, 'textStyle': {'normal': {'color': '#AB0068'}}},
//           {name: '计算机', value: 83, 'textStyle': {'normal': {'color': '#FF6C02'}}},
//           {name: '高校教师资格',
//            value: 83,
//            'textStyle': {'normal': {'color': '#FEC106'}}},
//           {name: '尤克里里', value: 82, 'textStyle': {'normal': {'color': '#FF6C02'}}},
//           {name: '街舞', value: 79, 'textStyle': {'normal': {'color': '#FF6C02'}}},
//           {name: '德语', value: 77, 'textStyle': {'normal': {'color': '#E7D700'}}},
//           {name: '年级前十', value: 75, 'textStyle': {'normal': {'color': '#AB0068'}}},
//           {name: '语文', value: 75, 'textStyle': {'normal': {'color': '#AB0068'}}},
//           {name: '化妆', value: 75, 'textStyle': {'normal': {'color': '#FEC106'}}},
//           {name: 'GMAT', value: 72, 'textStyle': {'normal': {'color': '#FF6C02'}}},
//           {name: '复试', value: 70, 'textStyle': {'normal': {'color': '#E7D700'}}},
//           {name: '中级会计', value: 69, 'textStyle': {'normal': {'color': '#FF6C02'}}},
//           {name: '修图', value: 68, 'textStyle': {'normal': {'color': '#FEC106'}}},
//           {name: '烘焙', value: 68, 'textStyle': {'normal': {'color': '#FF6C02'}}},
//           {name: '配音', value: 66, 'textStyle': {'normal': {'color': '#E7D700'}}},
//           {name: 'ACCA', value: 65, 'textStyle': {'normal': {'color': '#E00702'}}},
//           {name: '古筝', value: 63, 'textStyle': {'normal': {'color': '#FEC106'}}},
//           {name: '期末考试', value: 63, 'textStyle': {'normal': {'color': '#FF6C02'}}},
//           {name: 'DIY', value: 63, 'textStyle': {'normal': {'color': '#E7D700'}}},
//           {name: '编程', value: 62, 'textStyle': {'normal': {'color': '#E00702'}}},
//           {name: '写作业', value: 60, 'textStyle': {'normal': {'color': '#FF6C02'}}},
//           {name: '医学', value: 59, 'textStyle': {'normal': {'color': '#E7D700'}}},
//           {name: '执业护士', value: 59, 'textStyle': {'normal': {'color': '#AB0068'}}},
//           {name: '电子竞技', value: 59, 'textStyle': {'normal': {'color': '#E7D700'}}},
//           {name: '保研', value: 57, 'textStyle': {'normal': {'color': '#E7D700'}}},
//           {name: '考研复试', value: 55, 'textStyle': {'normal': {'color': '#FF6C02'}}},
//           {name: '乐器', value: 55, 'textStyle': {'normal': {'color': '#FF6C02'}}},
//           {name: '心理学', value: 53, 'textStyle': {'normal': {'color': '#FEC106'}}},
//           {name: '教资', value: 51, 'textStyle': {'normal': {'color': '#FEC106'}}},
//           {name: '毕业论文', value: 51, 'textStyle': {'normal': {'color': '#E7D700'}}},
//           {name: '翻译专业资格考试',
//            value: 50,
//            'textStyle': {'normal': {'color': '#FF6C02'}}},
//           {name: '法硕', value: 49, 'textStyle': {'normal': {'color': '#FF6C02'}}},
//           {name: '理科', value: 49, 'textStyle': {'normal': {'color': '#FF6C02'}}},
//           {name: '考上重点高中',
//            value: 49,
//            'textStyle': {'normal': {'color': '#FEC106'}}},
//           {name: '艺考', value: 49, 'textStyle': {'normal': {'color': '#E7D700'}}},
//           {name: '拉丁舞', value: 49, 'textStyle': {'normal': {'color': '#E7D700'}}},
//           {name: '幼师资格', value: 47, 'textStyle': {'normal': {'color': '#E00702'}}},
//           {name: '初一', value: 47, 'textStyle': {'normal': {'color': '#AB0068'}}},
//           {name: 'CFA', value: 46, 'textStyle': {'normal': {'color': '#E7D700'}}},
//           {name: '诗歌', value: 45, 'textStyle': {'normal': {'color': '#E00702'}}},
//           {name: 'GPA', value: 44, 'textStyle': {'normal': {'color': '#E00702'}}}]
//       }]
//   }
//   myChart.setOption(option);
//   // 监听浏览器缩放，图表对象调用缩放resize函数
//   window.addEventListener("resize", function() {
//     myChart.resize();
//   });
// })();