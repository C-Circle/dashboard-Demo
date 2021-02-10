import random
import json
import time
from bson.code import Code
import pandas as pd

import pymongo
client = pymongo.MongoClient('localhost', 27017)
db = client['db_name']
db.authenticate(
    'username', 'password')
collection = db['collection_name']

# 加载颜色
with open('myColors.json','r',encoding='utf-8') as f:
    myColors = json.load(f)

def get_statistic():
    data = {}
    # 用户总数 男用户数 女用户数
    data['total'] = user_item.count_documents({})
    data['male'] = user_item.count_documents({'gender':'male'})
    data['female'] = user_item.count_documents({'gender':'female'})
    # 动态总数 svlog总数 日记总数
    keys = ['dynamic', 'svlog', 'feed']
    for key in keys:
        match_dict = {"$match": {key: {'$gt': 0}}}
        group_dict = {"$group": {"_id": None, key: {"$sum": '${}'.format(key)}}}
        result = user_item.aggregate([match_dict, group_dict])
        for i in result:
            data[key] = i[key]
    return data

def get_words():
    df_category=pd.DataFrame(user_item.find({}, {'_id':0, 'categoryAlias':1, 'categoryIDs':1}))
    df_category.dropna(inplace=True)
    df_category=df_category.astype({"categoryAlias":"string"})
    cList=[]
    for i in df_category['categoryAlias'].values:
        cList+=i.split("/")
    df_c=pd.DataFrame({"category":cList})
    df_category=df_c.groupby(by=["category"]).agg(
        {"category":"count"}).rename(columns={"category":"count"}).sort_values(by=['count'], ascending=False).reset_index()
    words=df_category.iloc[:100,:].values
    colors = random.choice(myColors['multi'])
    max_count = words[0][1]
    fontsize = [16, 42]
    words3d = [{"label":w[0], "labelNum":w[1], "color":random.choice(colors),"fontSize":int(w[1]/max_count*(fontsize[1]-fontsize[0]))+fontsize[0],
                "url":"","target":""} for w in words]
    text = str(words3d)
    data = text.replace("'label'", "label").replace("'labelNum'", "labelNum").replace("'color'", "color").replace(
        "'fontSize'", "fontSize").replace("'url'","url").replace("'target'","target").replace("\n","").replace("'","\"")
    return {'words3d':words3d}

def strNum(num):
    if num < 1000:
        num = str(num) 
    elif num < 10000:
        num = '{:.0f}K'.format(num/1000)
    elif num < 1000000:
        num = '{:.0f}W'.format(num/10000)
    elif num < 1000000000:
        num = '{:.0f}M'.format(num/1000000)
    else:
        num = '{:.0f}B'.format(num/1000000000)
    return num

# 性别数据
def get_data1():
    keys = user_item.distinct('gender')
    data=[]
    for k in keys:
        kname = k if k else "None"
        data.append({
            "name":kname,
            "value":user_item.count_documents({'gender':k})
            })
    return data

# 年龄数据
def get_data2():
    df_age=pd.DataFrame(user_item.find({},{'_id':0, 'birthday':1}))
    df_age.dropna(inplace=True)
    df_age['age'] = (time.time() - df_age['birthday']/1000) / 3600 / 24 / 365
    df_age=df_age.astype({"age":"int"})
    bins = [0, 8, 14, 18, 20, 24, 30, 40, 50, 60, 1000]
    labels = ['0-8岁', '8-14岁', '14-18岁', '18-20岁', '20-24岁', '24-30岁', '30-40岁', '40-50岁', '50-60岁', '60-100岁']
    df_age['age_area'] = pd.cut(df_age['age'], bins=bins, labels=labels)
    df_age=df_age.groupby(["age_area"]).agg({"age":"count"}).sort_values(by = ["age_area"], ascending = True)
    df_age.rename(columns={'age':'count'}, inplace=True)
    data = df_age['count'].round(1).tolist()
    return data

# 学习天数
def get_data3():
    df_ldays=pd.DataFrame(user_item.find({},{'_id':0, 'learningDays':1}))
    df_ldays.dropna(inplace=True)
    df_ldays=df_ldays.astype({"learningDays":"int"})
    bins = [0, 10, 30, 90, 180, 360, 720, 1080, 1440, 1800, 3600]
    labels = ['0-10天', '10-30天', '1-3个月', '3-6个月', '半年-1年', '1年-2年', '2年-3年', '3年-4年', '4年-5年', '5年+']
    df_ldays['area'] = pd.cut(df_ldays['learningDays'], bins=bins, labels=labels)
    df_ldays=df_ldays.groupby(["area"]).agg({"learningDays":"count"}).sort_values(by = ["area"], ascending = True)
    df_ldays.rename(columns={'area':'count'}, inplace=True)
    df_ldays.reset_index(inplace=True)
    data=[{"name":k,"value":v} for k, v in df_ldays.values]
    return data

# 粉丝数据
def get_data4():
    df_fans=pd.DataFrame(user_item.find({},{'_id':0, 'fansCount':1}))
    df_fans.dropna(inplace=True)
    df_fans=df_fans.astype({"fansCount":"int"})
    bins = [0, 10, 50, 100, 500, 1000, 2000, 5000, 10000, 100000, 300000]
    labels = ['0-10', '10-50', '50-100', '100-500', '500-1k', '1k-2k', '2k-5k', '5k-1w', '1w-10w', '10w-30w']
    df_fans['area'] = pd.cut(df_fans['fansCount'], bins=bins, labels=labels)
    df_fans=df_fans.groupby(["area"]).agg({"fansCount":"count"}).sort_values(by = ["area"], ascending = True)
    df_fans.rename(columns={'area':'count'}, inplace=True)
    data = df_fans['fansCount'].round(1).tolist()
    return data

# 日均学习天数
def get_data5():
    df_dlh=pd.DataFrame(user_item.find({}, {"_id":0, "totalDuration":1, "learningDays":1}))
    df_dlh.dropna(inplace=True)
    df_dlh['dlh']=df_dlh['totalDuration']/ 1000 / 3600 / df_dlh['learningDays']
    bins = list(range(21))
    labels = ['{}-{}h'.format(i, i+1) for i in range(0,20)]
    df_dlh['area'] = pd.cut(df_dlh['dlh'], bins=bins, labels=labels)
    df_dlh=df_dlh.groupby(["area"]).agg({"dlh":"count"}).sort_values(by = ["area"], ascending = True)
    df_dlh.rename(columns={'dlh':'count'}, inplace=True)
    df_dlh.reset_index(inplace=True)
    data=[{"name":k,"value":v} for k, v in df_dlh.values]
    return data

# 总学习时长
def get_data6():
    df_totalDuration=pd.DataFrame(user_item.find({}, {"_id":0, "totalDuration":1}))
    df_totalDuration.dropna(inplace=True)
    df_totalDuration['totalDuration']=df_totalDuration['totalDuration']/ 1000 / 3600
    bins = [0, 10, 50, 100, 200, 500, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000]
    labels = ['{}-{}h'.format(strNum(b), strNum(bins[i+1])) for i, b in enumerate(bins[:-1])]
    df_totalDuration['area'] = pd.cut(df_totalDuration['totalDuration'], bins=bins, labels=labels)
    df_totalDuration=df_totalDuration.groupby(["area"]).agg({"totalDuration":"count"}).sort_values(by = ["area"], ascending = True)
    df_totalDuration.rename(columns={'totalDuration':'count'}, inplace=True)
    df_totalDuration.reset_index(inplace=True)
    data=df_totalDuration['count'].round(2).tolist()
    return data

