import { Component, OnInit, NgZone} from '@angular/core';
import { MessagingService } from "../api/messaging.service";
import {Subject} from 'rxjs';

@Component({
  selector: 'app-offline-banner',
  templateUrl: './offline-banner.component.html',
  styleUrls: ['./offline-banner.component.scss'],
})
export class OfflineBannerComponent implements OnInit {

  public offline:boolean;
  private offlinesub:any;
  public fadein:string="";

  constructor(private zone: NgZone, private messaging: MessagingService) {
    

    this.offline = true;

    
  }

  checkConnected()
  {
    this.zone.run(()=>{
      
      this.offline=!this.messaging.isConnected();
      this.fadein="fadein";
      
      setTimeout(()=>{
        this.fadein="";
      },2300)
    });
  }

  ngOnInit() {
    this.checkConnected();

    this.messaging.getConnectivityObservable().subscribe(() => {

      this.checkConnected();
    });
  }

  getOfflineState(){
    return this.offline;
  }

  ngOnDestroy() {
    if(typeof(this.offlinesub)!="undefined"){
      this.offlinesub.unsubscribe();
    }
  }

}
