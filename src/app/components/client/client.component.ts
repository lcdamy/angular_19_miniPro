import { Component, inject } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/class/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client',
  imports: [FormsModule,CommonModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  clientObject: Client = new Client();
  clientList: Client[] = [];

  clientService = inject(ClientService);

  onSaveClient() {
    this.clientService.addUpdateclient(this.clientObject).subscribe((response: APIResponseModel) => {
      console.log(response.result);
    });
  }
  ngOnInit(): void {
    this.getClientList();
  }

  getClientList() {
    this.clientService.getAllclient().subscribe((response: APIResponseModel) => {
      this.clientList = response.data;
    });
  }
}
