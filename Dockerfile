FROM alpine AS builder

ARG MAKEFLAGS=-j8


RUN apk add git automake build-base bash autoconf libtool

RUN git clone https://github.com/grpc/grpc-web /github/grpc-web

WORKDIR /github/grpc-web

RUN git checkout tags/1.3.1

## Install gRPC and protobuf

RUN ./scripts/init_submodules.sh

WORKDIR /github/grpc-web/third_party/protobuf
RUN ./autogen.sh 
RUN ./configure
RUN make && make install

## Install all the gRPC-web plugin

WORKDIR /github/grpc-web
RUN make install-plugin

FROM alpine

COPY --from=builder /usr/local/bin /usr/local/bin
COPY --from=builder /usr/lib/libstdc* /usr/lib
COPY --from=builder /usr/lib/libgcc* /usr/lib
COPY --from=builder /usr/local/lib /usr/local/lib
COPY --from=builder /usr/local/include /usr/local/include

## Create the gRPC client
ENV import_style=commonjs
ENV grpc_web_import_style=commonjs
ENV mode=grpcwebtext
VOLUME /proto
VOLUME /out
ENV protofile=echo.proto
ENV output=/out

CMD protoc \
  -I=/proto \
  /proto/$protofile \
  --js_out=import_style=$import_style:$output \
  --grpc-web_out=import_style=$grpc_web_import_style,mode=$mode:$output
