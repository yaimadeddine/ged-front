import {Component, OnInit} from '@angular/core';
import {SortEvent} from "primeng/api";
import {Document} from "../../model/document.model";
import {DocumentService} from "../../service/document.service";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  quantity: number;
}
@Component({
  selector: 'app-document-list-v2',
  templateUrl: './document-list-v2.component.html',
  styleUrl: './document-list-v2.component.scss'
})
export class DocumentListV2Component implements OnInit {
  documents: Document[] = [];

  constructor(private documentService: DocumentService) {}

  ngOnInit() {
    this.findAll();
  }

  download(document: any) {
    console.log('Downloading document:', document);
  }

  delete(document: any) {
    console.log('Deleting document:', document);
  }

  share(document: any) {
    console.log('Sharing document:', document);
  }

  viewDetails(document: any) {
    console.log('Viewing details of document:', document);
  }

  findAll() {
    this.documentService.findAll().subscribe((data) => {
      this.documents = data;
    });
  }
}
