import { Component } from '@angular/core';
import { MessagingService } from "../api/messaging.service";
const {message_pb} = require('../api/protojs/message_pb.js')

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  private context: any =
  {
    appSrcEnabled: "off",
    currMode: "teleop",
    lidarRecordingStatus: "disabled",
    appVideoStreamingStatus: "off"
  };

  constructor(private messaging: MessagingService) {
    
    var self = this;
    this.messaging.getBotStatusObservable().subscribe((x)=>{self.onBotStatus(self,x)});
    
  }

  ionViewWillEnter()
  {
  }

  onBotStatus(self, msg)
  {
    if(!msg || !msg.status)
    {
      return;
    }

    switch(msg.status.mode)
    {
      case message_pb.badbot.messages.OperationalMode.AUTONOMOUS:
        self.context.currMode = "auto";
      break;
      
      case message_pb.badbot.messages.OperationalMode.FOLLOW_ME:
        self.context.currMode = "follower";
      break;

      case message_pb.badbot.messages.OperationalMode.TELEOP:
        self.context.currMode = "teleop";
      break;
    }

    switch(msg.status.lidarRecordingEnabled)
    {
      case true:
        self.context.lidarRecordingStatus = "enabled";
        break;
      
      case false:
        self.context.lidarRecordingStatus = "disabled";
        break;
    }

    switch(msg.status.appSrcEnabled)
    {
      case true:
        self.context.appSrcEnabled = "on";
        break;
      case false:
        self.context.appSrcEnabled = "off";
        break;
    }

    switch(msg.status.wsVideoEnabled)
    {
      case true:
        self.context.appVideoStreamingStatus = "on";
        break;
      case false:
        self.context.appVideoStreamingStatus = "off";
        break;
    }


  }

  lidarPowerToggled(enable)
  {
    this.messaging.toggleLidar(enable);
  }

  lidarRecordToggled(enable)
  {
    this.messaging.toggleLidarRecording(enable);
  }

  appSrcToggle($event)
  {
    this.messaging.toggleAppSrc($event.detail.value);
  }

  opModeChanged($event)
  {
    this.messaging.setMode($event.detail.value);
  }

  enableAppVideoStream(enable)
  {
    this.messaging.toggleAppVideoStream(enable);
  }

}
