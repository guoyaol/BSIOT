# BSIOT

1.create database & tables

```mysql
>mysql source miniiot.sql
```



2.Start MQTT broker

```bash
brew install EMQX

emqx start
```



3.Run python script: MUST DO

```bash
python mqttServer.py
```



4.Start Backend: based on SpringBoot

```bash
cd ./SB_backend

mvn install

java -jar ./target/demo-0.0.1-SNAPSHOT.jar
```

5.Run Frontend: based on react

```bash
cd ./react_frontend

npm install

npm run dev
```

