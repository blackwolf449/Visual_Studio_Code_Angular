import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  valorHtml: string = ''
  valorCss: string = ''
  valorJs: string = ''


  constructor() { }

  ngOnInit(): void {
  }

}
