import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiModel } from '../models/ApiModel';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    
  constructor(private http: HttpClient) { }

  postApiModel(apiModel: ApiModel): any {
    delete apiModel['id'];
    return this.http.post("/apimodel", JSON.stringify(apiModel), {headers: this.headers, observe: 'response'});
  }

  putApiModel(apiModel: any): any {
    delete apiModel['payload'];
    return this.http.put("/apimodel/" + apiModel.id, JSON.stringify(apiModel), {headers: this.headers});
  }

  deleteApiModel(apiModelId: number): any {
    return this.http.delete("/apimodel/" + apiModelId, {headers: this.headers});
  }

  getApiModel(apiModelId: number): Observable<any> {
    return this.http.get("/apimodel/" + apiModelId);
  }

  getApiModelStatus(): Observable<any> {
    return this.http.get("/apimodel/status");
  }

  getApiModelTags(): Observable<any> {
    return this.http.get("/apimodel/tags");
  }

  getApiCompare(id1: string, id2: string): Observable<any> {
    return this.http.get("/apimodel/compare/" + id1 + "," + id2, {responseType: "text"});
  }

  getGuideLineCheckResults(id: string) {
    return this.http.get("apimodel/guideline/" + id, {responseType: "text"});
  }
}
