#!/bin/sh

mkdir -p ./cppsrc
protoc -I=badbot-protos --cpp_out=./cppsrc badbot-protos/consts.proto
protoc -I=badbot-protos --cpp_out=./cppsrc badbot-protos/cmd_operational_mode.proto
protoc -I=badbot-protos --cpp_out=./cppsrc badbot-protos/botstatus.proto
protoc -I=badbot-protos --cpp_out=./cppsrc badbot-protos/cmdtoggle.proto
protoc -I=badbot-protos --cpp_out=./cppsrc badbot-protos/cmdvel.proto
protoc -I=badbot-protos --cpp_out=./cppsrc badbot-protos/videoframe.proto
protoc -I=badbot-protos --cpp_out=./cppsrc badbot-protos/message.proto
