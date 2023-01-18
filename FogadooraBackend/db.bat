@echo off
chcp 65001
"c:\Program Files\MongoDB\Server\6.0\bin\mongoimport.exe" --uri="mongodb://localhost:27017/FogadoOra" --collection=Idopontok --drop --file=db_1.json --jsonArray
"c:\Program Files\MongoDB\Server\6.0\bin\mongoimport.exe" --uri="mongodb://localhost:27017/FogadoOra" --collection=Tanar --drop --file=db_n.json --jsonArray
echo PLEASE KILL AND RESTART YOUR BACKEND SERVER DEV TASK IF RUNNING!