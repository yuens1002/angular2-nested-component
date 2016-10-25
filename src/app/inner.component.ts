import {  Component, EventEmitter, Input, Output } from '@angular/core';

@Component ({
	moduleId: 'module.id',    // module.id needs to have quotes around it to work
	selector: 'inner-component',
	templateUrl: 'inner.component.html',
	styleUrls: ['inner.component.css']
})

export class InnerComponent {
	
	isHidden: boolean = true;  // ts type declaration
  msg: string = 'Show';
	
	@Output() visible: EventEmitter<any> = new EventEmitter();
  @Output() hidden: EventEmitter<any> = new EventEmitter();
  
	toggle(): void { // void or any is needed if a return doesnt return a value
		this.isHidden = !this.isHidden;
	  this.isHidden ? this.msg = 'Show' : this.msg = 'Hide';
		this.isHidden ? this.hidden.emit(null) : this.visible.emit(null);
	}
	
}