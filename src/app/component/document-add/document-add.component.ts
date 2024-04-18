import {Component, OnInit} from '@angular/core';
import {DocumentService} from "../../service/document.service";


@Component({
  selector: 'app-document-add',
  templateUrl: './document-add.component.html',
  styleUrl: './document-add.component.scss'
})
export class DocumentAddComponent implements OnInit {
  metadataDialogVisible: boolean = false;
  uploadedFile!: File;
  metadata: { key: string, value: string }[] = [];

  constructor(private documentService: DocumentService) {
  }

  ngOnInit() {
  }

  onUpload(event: any): void {
    console.log('onUpload method called');
    this.uploadedFile = event.files[0];
    console.log('Uploaded file:', this.uploadedFile);
  }

  showMetadataDialog(): void {
    this.metadataDialogVisible = true;
  }

  hideMetadataDialog(): void {
    this.metadataDialogVisible = false;
  }

  addMetadata(): void {
    this.metadata.push({key: '', value: ''});
  }

  submitForm(): void {
    console.log('Metadata:', this.metadata);
    console.log('Uploaded file:', this.uploadedFile);
    this.documentService.createDocument(this.uploadedFile, this.metadata).subscribe(
      (document) => {
        console.log('Document created:', document);
        this.hideMetadataDialog();
      },
      (error) => {
        console.error('Error:', error);
      }
    );

  }

}
