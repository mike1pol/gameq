# Steam Query api
Server & docker container for https://github.com/sonicsnes/node-gamedig

## API
Getting server status and information
```
http://localhost:3000/?type=arma3&host=123.123.123.123&port=2303
```

## Docker container
### Build
```sh
docker build -t gameq .
```

### Run
```sh
docker run -p 8090:3000 mike1pol/gameq:latest
```

Get info
```
http://localhost:8090/?type=arma3&host=123.123.123.123&port=2303
```
