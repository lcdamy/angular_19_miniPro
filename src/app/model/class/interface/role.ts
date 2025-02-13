export interface IRole {
    roleId: string;
    role: string;
}

export interface IDesignation {
    designationId: string;
    designation: string;
}

export interface APIResponseModel {
    message: string;
    result: boolean;
    data: any;
}

export interface Iclient {
    clientId: number
    contactPersonName: string
    companyName: string
    address: string
    city: string
    pincode: string
    state: string
    employeeStrength: number
    gstNo: string
    contactNo: string
    regNo: string
  }