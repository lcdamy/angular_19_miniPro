import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/Client';
import { environment } from '../../environments/environment.development';
import { APIResponseModel } from '../model/class/interface/role';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllclient(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(`${environment.API_URL}/ClientStrive/GetAllClients`);
  }
  addUpdateclient(obj: Client): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(`${environment.API_URL}/ClientStrive/AddUpdateClient`, obj);
  }
  deleteclient(id: string): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(`${environment.API_URL}/ClientStrive/DeleteClientByClientId?clientId=${id}`);
  }
}
