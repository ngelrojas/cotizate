import API from './api';

interface AuthData {
  email: string;
  password: string;
}

export class Auth{
  private resp: any;

  async login(dataUser: AuthData){
    this.resp = await API.post(`/auth`, dataUser, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return this.resp;
  }
}
