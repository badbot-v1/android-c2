#!/bin/sh

mkdir -p ./protojs

protoc ./badbot-protos/consts.proto \
    -I ./badbot-protos \
    --js_out=import_style=commonjs:./protojs \
    --grpc-web_out=import_style=commonjs,mode=grpcweb:./protojs

protoc ./badbot-protos/cmd_operational_mode.proto \
    -I ./badbot-protos \
    --js_out=import_style=commonjs:./protojs \
    --grpc-web_out=import_style=commonjs,mode=grpcweb:./protojs

protoc ./badbot-protos/botstatus.proto \
    -I ./badbot-protos \
    --js_out=import_style=commonjs:./protojs \
    --grpc-web_out=import_style=commonjs,mode=grpcweb:./protojs

protoc ./badbot-protos/cmdtoggle.proto \
    -I ./badbot-protos \
    --js_out=import_style=commonjs:./protojs \
    --grpc-web_out=import_style=commonjs,mode=grpcweb:./protojs

protoc ./badbot-protos/cmdvel.proto \
    -I ./badbot-protos \
    --js_out=import_style=commonjs:./protojs \
    --grpc-web_out=import_style=commonjs,mode=grpcweb:./protojs

protoc ./badbot-protos/videoframe.proto \
    -I ./badbot-protos \
    --js_out=import_style=commonjs:./protojs \
    --grpc-web_out=import_style=commonjs,mode=grpcweb:./protojs

protoc ./badbot-protos/message.proto \
    -I ./badbot-protos \
    --js_out=import_style=commonjs:./protojs \
    --grpc-web_out=import_style=commonjs,mode=grpcweb:./protojs

protoc ./badbot-protos/services.proto \
    -I ./badbot-protos \
    --js_out=import_style=commonjs:./protojs \
    --grpc-web_out=import_style=commonjs,mode=grpcweb:./protojs