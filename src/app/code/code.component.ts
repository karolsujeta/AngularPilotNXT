import { Component, OnInit, Input } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  @Input()
  todos;

  constructor() { }

  ngOnInit() {
    var fileName = 'code.html'; // You can use the .txt extension if you want
    $('#downloadLink').click(function () {
      $.fn.downloadInnerHtml(fileName, 'main', 'text/html');
    });

    $.fn.downloadInnerHtml = function (filename, elId, mimeType) {
      var elHtml = document.getElementById(elId).innerHTML;
      var link = document.createElement('a');
      mimeType = mimeType || 'text/plain';

      link.setAttribute('download', filename);
      link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(elHtml));
      link.click();
    }
  }
}
