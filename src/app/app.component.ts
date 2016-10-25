import { Component } from '@angular/core';

@Component({
  moduleId: 'module.id',    // fully resolved filename; defined at module load time
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  
  title: string = 'AngularJS Nested Component Example';

  logs:string[] = []; //int array logs to stores all logs

  showLog(message) { //message is the parameter from function call in template
    this.logs.push(message);
  }

}
