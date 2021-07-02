# “设备已联网”物联网管理平台

1.Database

创建数据库，数据表，插入一定原始数据

```mysql
>mysql source miniiot.sql
```

更改MySql连接信息

```properties
#in 
#SrcCode/backend/src/main/resources/application.properties

spring.datasource.username= YOUR USERNAME!
spring.datasource.password= YOUR PASSWORD!
```

2.启动MQTT broker &配置python环境，运行脚本

```bash
cd SrcCode/mqtt

brew install emqx
emqx start

conda env create -f py_environment.yml
conda activate iot

python mqttServer.py
```

3.启动后端：基于SpringBoot

```bash
cd SrcCode/backend

mvn install

java -jar ./target/demo-0.0.1-SNAPSHOT.jar
```

4.启动前端：基于react

```bash
cd SrcCode/frontend

npm install

npm run dev
```

