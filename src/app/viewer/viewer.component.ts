import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {
  @Input() valorHtml = ''
  @Input() valorCss = ''
  @Input() valorJs = ''

  run() {
    const htmlCode = this.valorHtml
    const cssCode = "<style>" + this.valorCss + "</style>"
    const valorJs = "<script>" + this.valorJs + "</script>"
    const previewWindow = (document.querySelector(".viewerDiv") as HTMLIFrameElement)?.contentWindow?.document
    previewWindow?.open()
    previewWindow?.write(htmlCode + cssCode + valorJs)
    previewWindow?.close
  }

  constructor() { }

  ngOnInit(): void {
  }

}