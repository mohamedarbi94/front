import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo';

const baseURL = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any> {
    return this.httpClient.get<any>(`${baseURL}/${"get"}`);
  }

  getTodo(id  : string):Observable<any>{
    
    const req = new HttpRequest('GET','http://localhost:8080/api/'+id,{
      responseType: 'json',
      observe: 'body',
      
      });
      return this.httpClient.request(req);
    }


/*
  getTodo(id: string): Observable<any> {  
    return this.httpClient.get(`${baseURL}/${"id"}`);
  }
*/
  create(data): Observable<any> {
    return this.httpClient.post(`${baseURL}/${"add"}`, data);
  }

  update(data): Observable<any> {
    return this.httpClient.put(`${baseURL}/${"edit"}`, data);
  }

  delete(data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body:data
  };
    return this.httpClient.delete(`${baseURL}/${"delete"}`,httpOptions);
    
  }

}
