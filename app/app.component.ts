import { Component } from '@angular/core';
import { YtsService } from './services/yts.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [YtsService]
})
export class AppComponent  { }
