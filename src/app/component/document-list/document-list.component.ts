import {Component, OnInit} from '@angular/core';

interface Document {
  name: string;
  type: string;
  size: string;
}

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.scss'
})
export class DocumentListComponent implements OnInit {
  documents: Document[] = [
    {name: 'Document 1', type: 'pdf', size: '2 MB'},
    {name: 'Document 2', type: 'docx', size: '1.5 MB'},
    {name: 'Document 3', type: 'xlsx', size: '3 MB'},
    // Add more documents as needed
  ];

  constructor() {
  }

  ngOnInit() {
  }

  getIconClass(type: string): string {
    switch (type) {
      case 'pdf':
        return 'pi pi-file-pdf';
      case 'docx':
        return 'pi pi-file-word';
      case 'xlsx':
        return 'pi pi-file-excel';
      default:
        return 'pi pi-file';
    }
  }

  downloadDocument(document: Document): void {
    // Implement download logic here
    console.log('Downloading document:', document);
  }

  deleteDocument(document: Document): void {
    // Implement delete logic here
    console.log('Deleting document:', document);
  }
}
