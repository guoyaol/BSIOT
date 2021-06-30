import paho.mqtt.client as mqtt
import re
import random
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import json


engine = create_engine("mysql+pymysql://root:newpassword@localhost:3306/miniIOT", encoding="utf-8")
#database: miniIOT;
Session = sessionmaker(bind=engine)
session = Session()
count=1


def on_connect(client, userdata, flags, rc):
    print("Connected with result code "+str(rc))
    client.subscribe("testapp")


def on_message(client, userdata, msg):
    str_msg=str(msg.payload)[2:-1]
    print(str_msg)
    dic_msg=json.loads(str_msg)

    stmt='insert into msg_device values (null,"'+str(dic_msg['alert'])+'","'+str(dic_msg['clientId'])+'","'+str(dic_msg['info'])+'","'+str(dic_msg['lat'])+'","'+str(dic_msg['lng'])+'","'+str(dic_msg['timestamp'])+'","'+str(dic_msg['value'])+'")'
    print(stmt)
    session.execute(stmt)
    session.commit()


client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message
client.connect("127.0.0.1", 1883, 60)
client.loop_forever()
