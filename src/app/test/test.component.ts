import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Persoana} from '../app.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit {
  @Input() persoana: Persoana;
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter<any>();

  date = new Date().toISOString();

  constructor() {
  }

  ngOnInit(): void {
  }

  delete() {
    this.deleteEvent.emit();
  }
}

