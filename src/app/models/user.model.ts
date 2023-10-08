export interface UserModel {
  id: number;
  name: string;
}

export class SignUpModel {
  public firstname: string;
  public lastname: string;
  public email: string;
  public password: string;

  constructor() {
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.password = '';
  }
}
