// Rank
function Rank(evt, pagrams) { //key为数据名称(fansCount totalDuration dynamic)
    var i, tabcontent, tablinks;
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";


    // 清除原chart
    var chart = document.querySelector(".map .chart");
    if (chart.hasChildNodes()) {
        chart.removeChild(chart.lastChild);
        chart.removeAttribute("_echarts_instance_");
    }　
    
    var myData = {
        fansCount:{
            name:['苏璇儿💨.', 'Timing官方', '土妹英语：学渣要上130', '我是波波老师呐~', 'Timing锦鲤酱', '账号已注销', '英语静老师', 'Angelina', '余土土Elin（英语画画', 'Dolores和山竹🍑', '函清英语教主', '程帅陪你学物理', 'zovm', '凤梨少女Lu', '杂良', '生物杨老师', '月月', '作文大神懒羊羊', '初高中数学张老师', '呆哥高考数学', '不想上学的Luna', '英语Doris老师', '衡水中学戴戴老师', '酸奶iris', '教英语的单眼皮小姐姐', '店长', '语文溜溜老师', '赧烟七七', '迪迪迪迪小朋友', '轰焦冻家的控控', '麦片的读书日记', '小林同学', '狄云教主', '十惧ESTHER', 'Rookie英语-布吉岛', 'TED精选君', '李锦堂', '折耳都', '语文帅炸的男人', '猩猩老师', '延龙高中数学', '老陈的动画物理', '老唐秒杀数学', 'Shawn啸笑', '美剧精选菌', '花花flora', '菡灵老师', '小酒同志～の肉夹馍', '杨思琴清华大学', 'OneTalk', '右耳橙', '清华数学系坑老师', 'Alaina', '月菱ISADORA', 'Amuro Toru', '白桃与海', '椰汁面包Zz', '大头思', '拾叁.🕊', 'IRIS简说英语', '欣小蓝', '胖老李带你逆袭物理', '康乐哥哥', '匠拙墨同学', '荔枝小叔', '生物老司机任老师', '理想三旬', '陈也行。', 'W的小黑猫', '南条小鹿', '林波微步', '慕时', '蘑菇酱', '一只化学老师', 'Gabrielle', '苦', '元宝妹', 'lola偏不跑 微博同名', '無月餅', 'poppy笑', '南朝/前路昭然携共濟', '小妗上线-', '苏悠扬', '咏之书画', 'Mas of L👨\u200d🎓', '高考数学大招秒杀', '曲奇cookie', '清华大学小环姐', '阿又🍃', '仙女小可', '七秋cicii', '辩辨变', '一勺豆豆🦄', '陳亦_', 'Lucy.', '小北老师', '热心网友安安', '机灵小不董✨', '你英语口语不好我有罪', '超宠粉滴居居💕', '是我阿花'],
            value: [218637, 155142, 152931, 137992, 90139, 80316, 79491, 68554, 60133, 50875, 48665, 47898, 46492, 46030, 45907, 44987, 44059, 43387, 40627, 40160, 35831, 35738, 35420, 34153, 34056, 32291, 32261, 31531, 30459, 29910, 29498, 29490, 29257, 28891, 28841, 28554, 28411, 28360, 28226, 26509, 26434, 26123, 25545, 25308, 24375, 24254, 23702, 23447, 23208, 22928, 22846, 22735, 22429, 21766, 21574, 21503, 21279, 21274, 21121, 20547, 20202, 20065, 19997, 19895, 19744, 19437, 19101, 19035, 18940, 18364, 18084, 17961, 17493, 17475, 17455, 17252, 17096, 16967, 16907, 16680, 16506, 15884, 15829, 15692, 15642, 15303, 15271, 15229, 15218, 15124, 14935, 14880, 14853, 14783, 14689, 14636, 14622, 14558, 14161, 14086, 13984]
        },
        totalDuration:{
            name:['法师UnicornW', '国风美少女', '撒贝晴的未来要发光', 'amalfoy_', '不学习不配玩手机', '芒果Seven', '陈也行。', '周六', '冉喵去冰八分甜', 'みやみず みつは', 'Patrick', '^_^', '十年谨德', '鹿暮小姐i', '微生俊潇', '大仙不愿做房主', '凌霜霜', '斯兔兔要读博', '桃子的小仙女', '🥇', '包纸想要PhD顺利毕业', '不开心', 'Tung', 'Hannalee', 'AMBITION', '香菜后援会会长', '首无', '爱学习的大锦鲤', 'L', '南詺', '多吃不胖', '刘逸散', '青枫浦上', '💨', 'sherry梨', '木木的15+1', '阿白', '我要考华师', 'ルーレット', '木木🌸', '柳盈盈', '七分耕耘', '℡浅浅要上ecnu', '薄言', '懒惰使我丑陋', '澳平小金蹄', '牛哥', '快考完吧', 'BW.', 'lien', '功不唐捐玉汝于成', '是开碧落', '🍪Alpacaの熙稚恬°淡退', '寒月', '是可可啊-', '银落笙中考牛逼🥀', '尘埃眠', '心微', '阿墨在追冰淇淋🍦', '黄星星🌟', 'Letty', '远行客', '苻苓', '小喵MiKi', '💕', 'Dmua🍕', '苦', '一叶知秋之晟', '木木', '小陀螺🙌', 'WildYeti', '起名这个费劲', 'crystal', '冰岛不语🌸', 'Malfoy', '郁蒸廿九', '学无止境', '无理由爱学习', '阿猫。🐈ིྀ', '彩虹色的诺诺~', '马克思大法好', '枝繁叶茂', '迟早会发光的兔崽纸🐰', '啊菲一定要上岸✊', '逆风飞翔🍓雪倩', '月明星汐🌸', '浮生不若梦', 'Charlie', 'Ash', '🍼奶瓶小太阳', '喵喵', '💛筱莛☀', '.', '一定会是🍼的！', '徐小超', 'Yue', '焕焕要努力鸭', '向蒋丞选手学习', '无心法师', '鹤家筠', '十七冲啊'],
            value: [13651.55, 13320.28, 9437.62, 8943.66, 8782.97, 8746.32, 8643.7, 8361.44, 8295.71, 8254.39, 8088.38, 8084.14, 7885.98, 7855.88, 7771.32, 7738.7, 7699.08, 7638.52, 7626.16, 7592.8, 7554.02, 7422.11, 7405.26, 7341.68, 7340.98, 7298.97, 7298.9, 7298.54, 7261.41, 7140.55, 7103.85, 7093.46, 7068.83, 7036.1, 7025.42, 7022.74, 7000.97, 6994.25, 6903.91, 6833.11, 6813.06, 6673.53, 6673.06, 6653.38, 6653.09, 6563.99, 6558.24, 6543.57, 6537.75, 6519.18, 6474.84, 6455.38, 6390.74, 6386.51, 6384.32, 6369.88, 6364.16, 6359.97, 6344.6, 6344.48, 6342.05, 6313.71, 6291.0, 6287.35, 6229.39, 6127.22, 6118.28, 6084.76, 6082.5, 6010.25, 6004.86, 5963.36, 5938.68, 5877.3, 5812.83, 5800.11, 5799.84, 5780.35, 5777.84, 5772.65, 5763.4, 5695.38, 5675.24, 5669.67, 5657.35, 5623.9, 5615.89, 5545.27, 5542.87, 5531.83, 5489.88, 5474.48, 5465.05, 5448.31, 5435.27, 5432.0, 5419.13, 5410.14, 5407.16, 5399.79, 5399.06]
        },
        dynamic:{
            name:['十七冲啊', '草莓干', '撒贝晴的未来要发光', '阿白', '迟早会发光的兔崽纸🐰', '陈也行。', '努力加油就是干', 'YCYJ', 'sherry梨', '法师UnicornW', '苗草草', '木木🌸', '阿律lv', 'Hannalee', '苻苓', '一只小洋芋💎', '陈果果', '℡浅浅要上ecnu', '月落', '多吃不胖', '首无', '绿绮', '芒果Seven', 'Yolanda踏实背', '╰\x0e☆梦 雪︶~', '小李同学', '楚冰', '鹤唳华亭', '日青', 'Jane', '背水', '言希', '征征冲鸭', '素魈🌸', '沉淀', '一定上岸的簪花小楷', '老肥宅', '木木的15+1', 'Letty', '不学习不配玩手机', '林曦和', '睡神要减肥🙋', 'Privilege', 'Bingo终点见🏃', 'MichelleMikyo', 'Iris', '阿墨在追冰淇淋🍦', '秃头的丧尸君', 'RIO  with  lemon', '平平无奇学习小天才🌈', '疲惫生活中的英雄梦想', '小娜四级教资必过', '一叶知秋之晟', 'York H', 'xback', 'Tina🍃', '自律才能自由', '徐小超', '大瑭', '空灵熙', 'みやみず みつは', 'Heather', '小关要上岸', '银落笙中考牛逼🥀', '凡事预则立，不预则废', '考 CPA 啊', '十二颗肉丸', 'Serendipity♡', 'H.L.L', '国风美少女', '～～', '花花Amanda', '爱喝黑咖啡', '保持思考要谦卑的阿依', '^_^', '优秀指挥官', 'Jay Chou', '是开碧落', 'Claire', '4文评日语6文学2政治', '🌟柚柚要坚定🌙', '任来来 上暨南', '欣怡最爱背专业课！', '子川君的京都梦', '西瓜🍉崽崽.', '伊仙女', '小伐同学的日记', 'rose', 'Mas of L👨\u200d🎓', '用心培育理想', '200%努力', '决定勇敢的圆圆', '！', 'Cherry🍒', 'lien', 'Yolanda', '青鸟', '🌈笨笨啊笨笨滴', '爱学习的大锦鲤', '夫唯世界', '研究生小张'],
            value: [7111, 5388, 5160, 5113, 5090, 4818, 4776, 4640, 4476, 4454, 4440, 4374, 4297, 4244, 4188, 4186, 4118, 4115, 4100, 4087, 4066, 4061, 4025, 3993, 3897, 3870, 3869, 3860, 3858, 3855, 3798, 3788, 3738, 3685, 3674, 3657, 3642, 3640, 3626, 3617, 3592, 3549, 3540, 3463, 3450, 3425, 3400, 3339, 3333, 3327, 3324, 3323, 3315, 3315, 3306, 3299, 3293, 3284, 3280, 3261, 3260, 3258, 3256, 3248, 3247, 3244, 3241, 3191, 3187, 3173, 3170, 3164, 3160, 3160, 3132, 3131, 3128, 3116, 3106, 3097, 3091, 3087, 3083, 3082, 3074, 3068, 3059, 3041, 3033, 3033, 3032, 3031, 3027, 3024, 3022, 3017, 3010, 2988, 2980, 2971, 2970]
        },
        svlog:{
            name:['Redemption.', '延龙高中数学', '学霸同桌', '学霸同桌', '一叶知秋之晟', '忘忧剪辑', '我是波波老师呐~', '我要当学霸', '小小星', '我要当学霸', '韩语学习加油努力坚持', '奇葩星球', '牛皮纸袋的生活', '高考数学大招秒杀', '金姜Gingell', 'Crista🎈', '郝可爱喜欢IU', '这里是二琳', '真好学数学', '葡萄柚子', '老王陪你高考英语140', 'lola偏不跑 微博同名', 'Jason英语乐园', '剥落的小浮尘', '陈凯', '思维', '咖啡厅的cafe vlog', '刘翊熙Piano', '郭老师', '村雨(已退，备考中)', '专升本小哎同学', '柳如丝(影视剪辑)', 'ゞ、流年漫过盛夏天ヅ', 'Leon', 'Poikilotherm', 'Timing电影学院', '喵呜', '奥利奥小柴酱', '教英语的单眼皮小姐姐', 'Zikk_zzil小小一桌呀i', '哈塞', 'Elvira小晗', 'Sailor', '清华大学小环姐', '韩语学习求思', '@爱自律的星妍', '你算哪块小饼干', '清华数学系坑老师', '@黑界祖宗大人言♀', '北柒陌か🧀', '初柒Renee', 'Sabrina', '直线距离', '语文溜溜老师', '考研顶呱呱', '苏皖池✨', '一捧棉花糖', '专升本学长', '奈奈子', '胡粒粒', '花花原来是你呀', 'Hey', 'Sophia77', '落琳娜.Ruby', 'Gabrielle', 'arriving', '原味鱼烧', '小元老师高数线代概率', '羽毛', 'Vichine最棒', '山东中公教育', '晚柠✨超宠粉', '柠儿要努力.🌈', '康乐哥哥', '是筱何呀！', '全球帝', '国外综艺', '专升本学姐', '旋烟、', '猩猩老师', 'Elegant', 'Space', '微酒', '果粒橙（源源）', '狄云教主', '小珂(理想与自由)', '一叶知秋', '美剧精选菌', '你英语口语不好我有罪', '阿酱🍓', '沫熙梦_憨憨♥︎花子', '🤔吞舟', '6班小队长、剪辑', 'coco 柚子', '小宜手帐', '韩奈&减肥健身视频', '如梦绕魂', '探索世界', 'Nicki yang', '*Cherry*--&chen:).🍒', '不想上学的Luna'],
            value: [1088, 808, 635, 458, 369, 347, 287, 246, 228, 220, 210, 206, 198, 181, 170, 168, 167, 166, 162, 159, 152, 150, 146, 144, 144, 138, 136, 133, 133, 132, 132, 130, 127, 126, 123, 122, 121, 121, 121, 120, 119, 119, 118, 115, 114, 113, 111, 111, 109, 109, 109, 104, 104, 103, 102, 102, 100, 100, 99, 97, 97, 96, 94, 93, 93, 93, 92, 90, 90, 89, 89, 88, 87, 87, 86, 86, 86, 86, 86, 85, 85, 85, 85, 83, 82, 82, 82, 81, 81, 81, 81, 81, 80, 80, 80, 80, 79, 79, 78, 78, 78]
        },
        feed:{
            name:['我改名了', '行测一定要上80分！！', '得陇望蜀的吴为', '果粒橙（源源）', 'G和N的母亲', '北柒陌か🧀', '法学家', 'York H', '以梦为马不负韶华', 'dqy', '忧国忧民王小小', '一只小洋芋💎', '荔枝小叔', '和大叔一起学习', '@钥-yue🙆', '公考小书童', 'Hannalee', '吴宾Bunny', 'Gabrielle', 'Redemption.', '迪迪迪迪小朋友', '血粑粑', '苻苓', '延龙高中数学', '斯兔兔要读博', '逗兮逗兮', '英语资源库', 'Flora_且御风行', '书姐专爱申论和面试', '💐-布丁加油吖', '北北', '疲惫生活中的英雄梦想', '小毛球考神附体', '剥落的小浮尘', '自律才能自由', '不瘦腰疼大乐乐', '切断循环！螺旋上升！', '账号已注销', '未来·未曾来', '来点小甜饼嘛', 'Luce', '手劈榴莲咯哦', '🌈笨笨啊笨笨滴', '大择', '陳', '旺仔女孩✨', 'Lynn Mayer', '法考小道', '阿玖要好好背法条', '一叶知秋之晟', '外卖小哥steel', '热央金', '玄殇', '此乐绵绵', '在山的那边', '千方之水', '折戟', '谐贱闯江湖', '高考特战贾北大', '🐄.Cattle.🐇', '柠檬味的Dawn', '一把上岸！', '🍋沫.七', '小西同学🍉', '迎难而上', '不想上学的Luna', 'lien', 'Lunam', '学渣女孩Elsa', 'lemonade', '若文', '爱吃奥利奥的小饼干', 'Morty', '喵喵', 'o西漠o', '社会主义接班熊', 'Tina🍃', '今年一定要上岸！', '爱学习的大锦鲤', '土妹英语：学渣要上130', '人可一由心', '教英语的单眼皮小姐姐', '咩', '飞往我的山', '💛筱莛☀', '羽毛', '粉笔小可爱', 'CPA干货铺', '℡浅浅要上ecnu', '叶汀芷', '2020的软团团', '。。。', '宁静致远', 'Su_manan', 'Jupyter＇', '未满', '十一别冬眠了👻', '黎茗✨', '青青', '老妖乖', '醒着做梦'],
            value: [1750, 1682, 1474, 1177, 1146, 1124, 1062, 1053, 1013, 931, 921, 881, 866, 834, 820, 805, 800, 780, 761, 749, 740, 729, 721, 718, 715, 708, 696, 694, 668, 666, 661, 652, 640, 640, 637, 630, 628, 608, 602, 587, 585, 583, 578, 560, 554, 550, 547, 545, 543, 534, 534, 523, 516, 515, 513, 508, 508, 506, 505, 504, 500, 497, 495, 494, 492, 491, 489, 488, 485, 475, 475, 473, 470, 467, 467, 466, 462, 458, 456, 455, 450, 449, 447, 446, 445, 441, 441, 439, 439, 438, 436, 434, 432, 432, 432, 430, 429, 427, 425, 425, 425]
        },
        gainLike:{
            name:['账号已注销', '不想上学的Luna', '迪迪迪迪小朋友', 'zovm', '苏璇儿💨.', '十惧ESTHER', 'Gabrielle', '凤梨少女Lu', 'Dolores和山竹🍑', '小酒同志～の肉夹馍', '白桃与海', 'Amuro Toru', '蘑菇酱', '小小星', '杂良', '欣小蓝', '心之所向', '理想三旬', '南条小鹿', '折耳都', '忘忧剪辑', '右耳橙', '荔枝小叔', '拾叁.🕊', '月月', '小妗上线-', 'Timing官方', '是我阿花', '陳亦_', '小林同学', '冬日小盐-', 'Angelina', '慕时', '美剧精选菌', '月菱ISADORA', 'Alaina', '辩辨变', '椿屋小阮', '我要当学霸', '南朝/前路昭然携共濟', '匠拙墨同学', '赧烟七七', '酸奶iris', '康乐哥哥', 'Ttterbel', '函清英语教主', '高中学习资料', '是优优呢！', 'Shawn啸笑', '🧸玉米神仙𝘅𝘆𝗹𝗶𝗮', '热心网友安安', '小汤睡不着', '陈也行。', 'Timing锦鲤酱', 'Christy', 'timing在逃小书童_澈', '七秋cicii', '笑颜', '李锦堂', '清晖', '温山云', '曲奇cookie', '四啊秣啊', '奈奈子', '小奈牌-小熊软糖.', '〇', '轰焦冻家的控控', '默读.', '余土土Elin（英语画画', '沈衫', '账号已注销', '土妹英语：学渣要上130', '十里故清欢', 'kiki_琪琪☀️', '无畏远方', '我是波波老师呐~', '無月餅', '姜渔', '\U000e0000小宋。', 'TED精选君', '苦', '1207', '傅歧止', '灵魂摆渡人', '@夹心小涵-', '昭', 'Mas of L👨\u200d🎓', '苏一', '是蘑菇阿.', 'ustinian', '沢风北州', '姜舟', 'HANHAN_', 'Redemption.', 'Skyline', 'Lklk的小熊-', '影视推荐', '我要当学霸', '阿乔–', '店长', '木木🌸'],
            value: [627096, 354889, 328974, 308269, 240049, 222885, 210835, 196984, 185877, 183301, 173255, 163669, 157736, 156952, 146455, 137661, 128380, 122158, 121100, 112504, 104581, 103476, 100241, 98577, 93494, 90454, 89468, 86119, 85493, 83496, 83128, 82739, 81445, 79597, 78500, 78027, 77369, 77361, 77250, 76595, 75073, 74007, 73081, 71891, 71102, 71058, 71049, 70779, 70198, 69399, 69042, 68858, 68300, 67828, 65193, 64330, 63875, 63723, 62964, 60616, 59312, 58830, 56545, 56421, 56401, 56354, 56321, 54990, 54534, 54318, 53979, 53652, 53329, 53302, 52986, 52819, 52745, 52170, 51747, 51176, 50952, 50269, 50094, 48297, 48270, 48081, 47857, 47663, 47000, 46849, 46585, 46060, 45240, 45232, 45214, 44785, 44771, 44407, 44321, 44259, 44129]
        },
        learningDays:{
            name:['迪迪迪迪小朋友', '谐贱闯江湖', '小童', '是耿耿吖🍭', '梦想有多远就走多远', '椎名纱夏', 'Dini', '血粑粑', '夏清流', '背了吗❓题做了吗❓', 'daybyday', '大仙加油', 'Gammy', '是开碧落', '海绵宝宝', '沈屾见夏', '镜子♡', '小赵要暴富💫', 'Dolores和山竹🍑', 'Somnus', 'Willben', '二缓', 'Timing官方', '艾希Elvichy', '你一定可以！', '柠檬味儿的柠檬水', '椰子菌', '啊酱', '猪叽叽', '浮沉至若', '包纸想要PhD顺利毕业', '冷穆冉', '破茧训练营班班', '法烤盐鹅', '学习小伙', '一叶知秋之晟', 'Vicky', '牛扎凤梨酥', '🍇', '木木的15+1', '背带裙少年', 'Eleven', '是药药药药', 'ALEX0626', 'catstail', 'Ochrasy', 'lertgfhj', '雪', 'cpa', 'D', '侧耳', '吱鹅', 'cpa', '端合华年说殷勤', '登峰造极', '你好，我叫没有人', '木木夕', '〆\u3000呗妞妞。', '斯兔兔要读博', '可乐', '小鹅蛋冲冲冲', '鲸鱼海上记', '橙子今天学习了吗', '为了明年省考', 'Natascha', 'Lustrous', '丁', '🍀🍀🍀', 'Utopia', '山山', '◣皮卡皮卡qiu', '牛哥', 'Sylvia', '小丸子', '林间羡', 'Alice.Z', '用力生活樱桃醬', '土鸡变凤可乐多多', '吃瓜群众', '孟聪聪', '鱼小姐', '楠', '朱妮', '忧国忧民王小小', '苇子', '沐沐子', '大灵咂', 'Mori girl', '阿拉斯加小企鹅', '蓝胖子加油吖', '小遥是个汉子', 'Mentiros', '鱼鸭', '李罗顺', '爱学习的大锦鲤', '王嗷嗷', '🐭', '杰公子要读书', '努力努力再努力g', '加一今天学习了吗', 'Étoile'],
            value: [1578, 1537, 1522, 1504, 1463, 1451, 1414, 1408, 1382, 1349, 1337, 1317, 1292, 1286, 1275, 1272, 1272, 1267, 1260, 1256, 1244, 1243, 1237, 1233, 1231, 1226, 1226, 1223, 1223, 1217, 1214, 1201, 1188, 1184, 1181, 1180, 1170, 1169, 1169, 1166, 1166, 1163, 1156, 1153, 1151, 1149, 1149, 1146, 1143, 1139, 1138, 1136, 1136, 1135, 1129, 1129, 1124, 1124, 1123, 1123, 1119, 1114, 1113, 1111, 1110, 1105, 1103, 1101, 1100, 1099, 1098, 1097, 1095, 1095, 1092, 1091, 1090, 1089, 1089, 1084, 1084, 1081, 1075, 1075, 1072, 1072, 1072, 1071, 1070, 1069, 1067, 1065, 1062, 1061, 1060, 1060, 1059, 1059, 1056, 1054, 1054]
        },
    };
    if(pagrams == "fansCount"){
        Values = myData.fansCount.value;
        Names = myData.fansCount.name;
    } else if (pagrams == "totalDuration"){
        Values = myData.totalDuration.value;
        Names = myData.totalDuration.name;
    } else if (pagrams == "dynamic"){
        Values = myData.dynamic.value;
        Names = myData.dynamic.name;
    } else if (pagrams == "svlog"){
        Values = myData.svlog.value;
        Names = myData.svlog.name;
    } else if (pagrams == "feed"){
        Values = myData.feed.value;
        Names = myData.feed.name;
    } else if (pagrams == "gainLike"){
        Values = myData.gainLike.value;
        Names = myData.gainLike.name;
    } else if (pagrams == "learningDays"){
        Values = myData.learningDays.value;
        Names = myData.learningDays.name;
    }
    var myColor = [
    "#006cff", "#60cda0", "#ed8884", "#ff9f7f", "#0096ff", "#9fe6b8", "#32c5e9", "#1d9dff",
    "#006cff", "#60cda0", "#ed8884", "#ff9f7f", "#0096ff", "#9fe6b8", "#32c5e9", "#1d9dff"
    ];
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".map .chart"));
    // 2. 指定配置和数据
    // var index = 0;
    var colorList = ['#f36c6c', '#e6cf4e', '#20d180', '#0093ff'];
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            show: false
        },
        grid: {
            left: '30%',
            // right: '20%'
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {}
            }
        },
        dataZoom: [
            // {
                // type: 'slider',
                // show: true,
                // xAxisIndex: [0],
                // start: 1,
                // end: 35
            // },
            {
                type: 'slider',
                show: true,
                yAxisIndex: [0],
                left: '93%',
                start: 0,
                end: 11,
                textStyle:{ color: '#ffffff' }
            },
            // {
            //     type: 'inside',
            //     xAxisIndex: [0],
            //     start: 1,
            //     end: 35
            // },
            {
                type: 'inside',
                yAxisIndex: [0],
                start: 0,
                end: 11
            }
        ],
        xAxis: {
            type: 'value',

            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },

        },
        yAxis: {
            type: 'category',
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisPointer: {
                label: {
                    show: true,
                    margin: 30
                }
            },
            data: Names,
            axisLabel: {
                margin: 200, // 刻度标签与轴线之间的距离。
                rotate: 0,
                fontSize: 14,
                align: 'left',
                color: '#fff',
                rich: {
                    a1: {
                        color: '#fff',
                        backgroundColor: colorList[0],
                        width: 30,
                        height: 30,
                        align: 'center',
                        borderRadius: 2
                    },
                    a2: {
                        color: '#fff',
                        backgroundColor: colorList[1],
                        width: 30,
                        height: 30,
                        align: 'center',
                        borderRadius: 2
                    },
                    a3: {
                        color: '#fff',
                        backgroundColor: colorList[2],
                        width: 30,
                        height: 30,
                        align: 'center',
                        borderRadius: 2
                    },
                    b: {
                        color: '#fff',
                        backgroundColor: colorList[3],
                        width: 30,
                        height: 30,
                        align: 'center',
                        borderRadius: 2
                    }
                },
                formatter: function(value, index) { // 当前显示的数据值、索引（使用dataZoom后，index为在部分数据的索引）
                    index = option.yAxis.data.indexOf(value) + 1; // 当前元素在整个数据中的索引+1
                    if (index - 1 < 3) {
                        return [
                            '{a' + index + '|' + index + '}' + '  ' + value
                        ].join('\n')
                    } else {
                        return [
                            '{b|' + index + '}' + '  ' + value
                        ].join('\n')
                    }
                }
            }
        },
        series: [{
                z: 2,
                name: 'value',
                type: 'bar',
                data: Values.map((item, i) => {
                    itemStyle = {
                        color: i > 3 ? colorList[3] : colorList[i]
                    }
                    return {
                        value: item,
                        itemStyle: itemStyle
                    };
                }),
                label: {
                    show: true,
                    position: 'right',
                    color: '#fff',
                    fontSize: 14,
                    offset: [10, 0]
                }
            }

        ]
    };
    // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
    myChart.resize();
    });
    window.Rank = Rank;
}{};
