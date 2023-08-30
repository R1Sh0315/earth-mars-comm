# earth-mars-comm
## install dependency
For server :
```
cd ../server && npm i
```

For client :
```
cd ../client && npm i
```

After installing dependeny we are ready to run our application

For server:
```
cd ./server && npm start
```

For client:
```
cd ./client && ng s -o
```

## screen shorts of working in web and post man 
![image](https://github.com/R1Sh0315/earth-mars-comm/assets/52277260/679cf7b9-ffe0-48b4-a77c-cf409132c00c)
![image](https://github.com/R1Sh0315/earth-mars-comm/assets/52277260/518b275d-c3bc-4bb1-811a-e5e33ee52fa9)
![image](https://github.com/R1Sh0315/earth-mars-comm/assets/52277260/0ecf450d-267e-4880-a4e9-cc3124d3b85c)


## Working Curls to test post and get response 
### POST
```
curl --location 'http://localhost:3000/api/earth-mars-comm/message' \
--header 'Content-Type: application/json' \
--data '{
    "userMsg":"Hello World",
    "location":"earth"
}'
```

### GET
```
curl --location 'http://localhost:3000/api/earth-mars-comm/message' \
--data ''
```
