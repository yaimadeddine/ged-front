import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {EMPTY, Observable} from "rxjs";
import {Document} from "../model/document.model";
import {NgForm} from "@angular/forms";
import {Documentcriteria} from "../model/documentcriteria";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  url = 'http://localhost:8070';

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Document[]> {
    return this.httpClient.get<Document[]>(this.url + "/files");
  }


  createDocument(file: File, metadata: any[]): Observable<Document> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('metadata', JSON.stringify(metadata));

    return this.httpClient.put<Document>(`${this.url}/files/create`, formData);
  }
  uploadFile(fileToUpload: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    return this.httpClient.put('http://localhost:8070/files/upload', formData, {
      reportProgress: true,
      observe: 'events',
      responseType: 'text'
    });

  }
  searchDocuments(documentCriteria: Documentcriteria): Observable<Document[]> {
    let url = `${this.url}/files/search`;
    return this.httpClient.post<Document[]>(url, documentCriteria);
  }


}
