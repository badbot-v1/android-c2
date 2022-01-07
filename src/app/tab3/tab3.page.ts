import { Component } from '@angular/core';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { MessagingService } from "../api/messaging.service";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private messaging: MessagingService) {
  }

  serverSelectionChanged($event)
  {
    this.messaging.setServerAddress($event.detail.value);
    this.messaging.init();
  }

}
