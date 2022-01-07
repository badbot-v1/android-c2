import { Injectable } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import {Subject} from 'rxjs';
import { ProtractorBrowser } from 'protractor';

import * as grpc from '@grpc/grpc-js';
import { Client } from '@grpc/grpc-js';

//import {  } from '@grpc/grpc-js';
import * as protoloader from '@grpc/proto-loader';

// const {Consts} = require('./protojs/consts_pb.js');
// const {BadMessage} = require('./protojs/message_pb.js');
// const {CmdToggle} = require('./protojs/cmdtoggle_pb.js');
// //import * as consts_pb from './protojs/consts_pb.js';
//import * as message_pb from './protojs/message_pb.js';
// import * as cmd_tog_pb from './protojs/cmdtoggle_pb.js';

//https://grpc.io/blog/grpc-web-ga/

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  private _service: any;
  private heartbeatActive: boolean = false;
  private cbHeartbeat: any;
  private _connected: boolean = false;
  private _connectedStatusSubject = new Subject<any>();
  private _botStatusObservable = new Subject<any>();
  private _videoFrameObservable = new Subject<any>();
  private _serverAddress = "127.0.0.1";


  init(): void
  {
    console.log("init entered");


    if(this._service == undefined)
    {

      var PROTO_PATH = __dirname + 'badbot-protos/services.proto';

      // Suggested options for similarity to existing grpc.load behavior
      var packageDefinition = protoloader.loadSync(
          PROTO_PATH,
          {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true
          });
      var protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
      // The protoDescriptor object has the full package hierarchy
      // var botServiceClient = protoDescriptor.badbot.messages;
      // console.log(botServiceClient);

      //var client = new botServiceClient.BotServiceClient('localhost:5001', grpc.credentials.createInsecure());
    }
      
    //   this._service = new botService.BotServiceClient('http://localhost:5001', null, null);
    //   console.log("connected");
      
      
    //   var toggle_msg = new proto.badbot.messages.CommandToggle();
    //   toggle_msg.setDevice(proto.badbot.messages.Devices.LIDAR);
    //   toggle_msg.setEnable(true);
      
    //   var test_msg = new proto.badbot.messages.BadMessage();
    //   test_msg.setMsgtype(proto.badbot.messages.MessageType.CMD_TOGGLE);
    //   test_msg.setTogglecmd(toggle_msg);
    //   console.log(test_msg);

    //   console.log("executing cmd");

    //   var metadata = {};
    //   var getTodo = this._service.processCommand(test_msg, metadata, (err, response) => {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       console.log("cmd execute successfully");
    //       // const todo = response.todo();
    //       // if (todo == null) {
    //       //   console.log(`A TODO with the ID ${todoId} wasn't found`);
    //       // } else {
    //       //   console.log(`Fetched TODO with ID ${todoId}: ${todo.content()}`);
    //       // }
    //     }
    //   });

      
    //   this._connected = true;
    //   this._connectedStatusSubject.next();

    //   if(this.heartbeatActive === false)
    //   {
    //     this.heartbeatActive = true;
    //     this.cbHeartbeat = setInterval(this.sendHeartbeat, 5000, this);
    //   }
    // }

    //   this.dealer.onMessage = function (message) {
        
    //     // the response from the server
    //     var msg = badbot.messages.BadMessage.decode(message.popBuffer());
    //     //console.log("got msg of type " + badbot.messages.MessageType[msg.msgType]);
    //     if(msg.msgType == badbot.messages.MessageType.STATUS_BOT)
    //     {
    //       self._botStatusObservable.next(msg);
    //     }else if(msg.msgType == badbot.messages.MessageType.VIDEO_FRAME)
    //     {
    //       self._videoFrameObservable.next(msg);
    //     }
    //   };
    // }else{
    //   console.log("dealer already present.");
    // }

    console.log("init exiting");
  }

  constructor() {

  }


  isConnected(): boolean
  {
    return this._connected;
  }

  getConnectivityObservable(): any
  {
    return this._connectedStatusSubject;
  }

  getBotStatusObservable(): any
  {
    return this._botStatusObservable;
  }

  getVideoFrameObservable(): any
  {
    return this._videoFrameObservable;
  }

  setServerAddress(addr: string): void
  {
    this._serverAddress = addr;
    this._connected = false;
    this._connectedStatusSubject.next();
  }


  sendHeartbeat(msgingSvc)
  {
    // var msg = new badbot.messages.BadMessage();
    // msg.msgType = badbot.messages.MessageType.HEARTBEAT_RC;
    
    // var buffer = badbot.messages.BadMessage.encode(msg).finish();
    // //console.log(buffer);

    // var message = new JSMQ.Message();
    // message.addBuffer(buffer);
    // msgingSvc.dealer.send(message);
  }

  //sendMsg(msg: badbot.messages.BadMessage): void {

    // if(!this.dealer){
    //   return;
    // }

    // var buffer = badbot.messages.BadMessage.encode(msg).finish();
    // //console.log(buffer);

    // var message = new JSMQ.Message();
    // message.addBuffer(buffer);
    // this.dealer.send(message);

  //}

  toggleLidar(poweredOn: boolean): void {

    // var msg = new badbot.messages.BadMessage();
    // msg.msgType = badbot.messages.MessageType.CMD_TOGGLE;
    // msg.toggleCmd = new badbot.messages.CommandToggle({
    //   device: badbot.messages.Devices.LIDAR,
    //   enable: poweredOn
    // });
    
    // this.sendMsg(msg);
  }

  toggleLidarRecording(recording: boolean): void {

    // var msg = new badbot.messages.BadMessage();

    // msg.msgType = badbot.messages.MessageType.CMD_TOGGLE;
    // msg.toggleCmd = new badbot.messages.CommandToggle({
    //   device: badbot.messages.Devices.LIDAR_RECORD,
    //   enable: recording
    // });
    
    // this.sendMsg(msg);
  }

  toggleAppVideoStream(enabled: boolean): void {

    // var msg = new badbot.messages.BadMessage();

    // msg.msgType = badbot.messages.MessageType.CMD_TOGGLE;
    // msg.toggleCmd = new badbot.messages.CommandToggle({
    //   device: badbot.messages.Devices.WS_VIDEO,
    //   enable: enabled
    // });
    
    //this.sendMsg(msg);
  }

  toggleAppSrc(onOff: string): void
  {
    // var enabled : boolean = false;

    // if(onOff === 'on')
    // {
    //   enabled = true;
    // }

    // var msg = new badbot.messages.BadMessage();
    // msg.msgType = badbot.messages.MessageType.CMD_TOGGLE;
    // msg.toggleCmd = new badbot.messages.CommandToggle({
    //   device: badbot.messages.Devices.APPSRC,
    //   enable: enabled
    // });
    
    // this.sendMsg(msg);
  }

  setMode(mode: string): void {

    // let opMode = badbot.messages.OperationalMode.TELEOP;

    // if(mode == "follower")
    // {
    //   opMode = badbot.messages.OperationalMode.FOLLOW_ME;
    // }else if(mode == "auto")
    // {
    //   opMode = badbot.messages.OperationalMode.AUTONOMOUS;
    // }

    // var msg = new badbot.messages.BadMessage();
    // msg.msgType = badbot.messages.MessageType.CMD_OPERATIONAL_MODE;
    // msg.opMode = new badbot.messages.CommandOperationalMode({
    //   opMode: opMode
    // });
    
    // this.sendMsg(msg);
  }

  sendVel(velX: number, velY: number): void 
  {

    // let msg = new badbot.messages.BadMessage();
    // msg.msgType = badbot.messages.MessageType.CMD_TELEOP_MOVEMENT;
    // msg.cmdVel = new badbot.messages.CmdVelocity();
    // msg.cmdVel.vX = velX;
    // msg.cmdVel.vY = velY;

    // console.log(velX, velY);

    // this.sendMsg(msg);
  }
}
