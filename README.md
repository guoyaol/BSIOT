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
conda env create -f environment.yml
conda activate iot

python mqttServer.py
```



4.Start Backend: based on SpringBoot

```bash
cd BSIOT/backend

mvn install

java -jar ./target/demo-0.0.1-SNAPSHOT.jar
```

5.Run Frontend: based on react

```bash
cd BSIOT/frontend

npm install

npm run dev
```

