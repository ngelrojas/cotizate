import API from './api';

export class Users {
  private resp: any;
  private token: string = '';

  constructor(token: string){
    this.token = token;
  }

  currentUser = async () => {
    this.resp = await API.get(`/user/0`,{
      headers: {
        'Authorization': `Bearer ${this.token}`
      }
    });
    return this.resp;
  }

  updateUser = async (data:any, userId:number) => {
    this.resp = await API.put(`/user/${userId}`, data, {
      headers: {
        'Authorization': `Bearer ${this.token}`
      }
    });
    return this.resp;
  }

  deleteUser = async (userId: number) => {
    this.resp = await API.delete(`/user/${userId}`, {
      headers: {
        'Authorization': `Bearer ${this.token}`
      }
    });
    return this.resp;
  }
}
