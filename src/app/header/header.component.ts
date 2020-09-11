import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() pageSelected = new EventEmitter<string>();

  collapsed = false;

  constructor() {}

  ngOnInit(): void {}

  onSelect(page: string): void {
    this.pageSelected.emit(page);
  }
}
