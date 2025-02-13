import { Component, inject } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIResponseModel, IDesignation } from '../../model/class/interface/role';


@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent {

  designation: IDesignation[] = [];
  isloading: boolean = true;
  masterService = inject(MasterService);

  ngOnInit() {
    this.masterService.getDesignation().subscribe((designation: APIResponseModel) => {
      this.designation = designation.data;
      this.isloading = false;
    }, error => {
      console.log(error);
      this.isloading = false;
    })
  }


}
