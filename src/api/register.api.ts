import API from './api';

export class RegisterUser {
  private resp: any;

  register = async (dataRegister: any) => {
    this.resp = await API.post(`/user`, dataRegister, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return this.resp;
  }
}
