# GRPC web runner and generator

## Quickstart

Generate protobuf
```bash
docker run --rm -v $(pwd)/example:/proto -v $(pwd)/example:/out jmarkin/grpc-web-generator
```

Run request
```bash
docker run --rm -v $(pwd)/example:/root/app jmarkin/grpc-web-runner app/run.js
```
