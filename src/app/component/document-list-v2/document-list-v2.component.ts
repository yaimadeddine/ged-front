import {Component, OnInit} from '@angular/core';
import {SortEvent} from "primeng/api";
import {Document} from "../../model/document.model";
import {DocumentService} from "../../service/document.service";
import { HttpClient, HttpResponse } from '@angular/common/http';
import {Documentcriteria} from "../../model/documentcriteria";

@Component({
  selector: 'app-document-list-v2',
  templateUrl: './document-list-v2.component.html',
  styleUrl: './document-list-v2.component.scss'
})
export class DocumentListV2Component implements OnInit {
  documents: Document[] = [];

  documentCriteria:Documentcriteria = new Documentcriteria();

  constructor(private documentService: DocumentService,private http: HttpClient) {}

  ngOnInit() {
    this.findAll();
  }


  download(documentId: number, documentName: string): void {
    const url = `http://localhost:8070/files/download/${documentId}`;
    this.http.get(url, { responseType: 'blob' })
      .subscribe((response: Blob) => {
        const blob = new Blob([response], { type: 'application/octet-stream' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = documentName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      });
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

  searchDocuments() {

    this.documentService.searchDocuments(this.documentCriteria).subscribe((data) => {
      this.documents = data;
    });
  }
}
