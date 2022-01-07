import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
var nipplejs:any = require('nipplejs');
import { MessagingService } from "../api/messaging.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private manager: any;
  private video_frame_subscription : Subscription;

  constructor(private messaging: MessagingService) {
    
  }

  onVideoFrameReceived(self,msg)
  {
    console.log("got video " + msg.videoFrame.frame.length);
    const blob = new Blob([msg.videoFrame.frame], { type: "image/jpeg" });
    const url = window.URL.createObjectURL(blob);
    const img = document.getElementById('live-view');
    //img.src = url;
  }

  ionViewWillEnter() 
  {
    var self = this;
    this.video_frame_subscription = this.messaging.getVideoFrameObservable().subscribe((x)=>{self.onVideoFrameReceived(self,x)});
    
    var options = {
        color: 'black',
        mode: 'static',
        position: {
          top: 50,
          left: '50%'
        },
        zone: document.getElementById('zone_joystick'),
    };
    this.manager = nipplejs.create(options);
    this.manager.on('move', this.onNippleMovement.bind(this));
  } 

  ionViewWillLeave()
  {
    this.manager.destroy();
    this.video_frame_subscription.unsubscribe();
  }

  onNippleMovement(evt, nipple)
  {
      // console.log(nipple);
      // console.log(
      //   Math.round(nipple.position.x), 
      //   Math.round(nipple.position.y),
      //   Math.round(nipple.distance), 
      //   Math.round(nipple.angle.degree), 
      //   Math.round(nipple.vector.x*100.0),
      //   Math.round(nipple.vector.y*100.0)
      // );
      // console.log();
      
      this.messaging.sendVel(nipple.vector.x*100.0, nipple.vector.y*100.0);
  }

}
