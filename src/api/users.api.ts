import API from './api';

export class Users {
  private resp: any;
  private token: string = '';

  constructor(token: string){
    this.token = token;
  }

  async currentUser(){
    this.resp = await API.get(`/user/0`,{
      headers: {
        'Authorization': `Bearer ${this.token}`
      }
    });
    return this.resp;
  }
}
