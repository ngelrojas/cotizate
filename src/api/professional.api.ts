import API from './api';

export class Professional {
  private resp: any;
  private token: string = '';

  constructor(token: string){
    this.token = token;
  }

  all = async () => {
    this.resp = await API.get(`/user/profile/personal`, {
      headers: {
        'Authorization': `Bearer ${this.token}`
      }
    });
    return this.resp;
  }

  retrieve = async (professionalId: number) => {
    this.resp = await API.get(`/user/profile/personal/${professionalId}`, {
      headers: {
        'Authorization': `Bearer ${this.token}`
      }
    });
    return this.resp;
  }

  create = async (profileData: any) => {
    this.resp = await API.post(`/user/profile/personal`, profileData, {
      headers: {
        'Authorization': `Bearer ${this.token}`
      }
    });
    return this.resp;
  }

  update = async (profileData: any, profileId: number) => {
    this.resp = await API.put(`/user/profile/personal/${profileId}`, profileData, {
      headers: {
        'Authorization': `Bearer ${this.token}`
      }
    });
    return this.resp;
  }

  delete = async (profileId: number) => {
    this.resp = await API.delete(`/user/profile/personal/${profileId}`, {
      headers: {
        'Authorization': `Bearer ${this.token}`
      }
    });
    return this.resp;
  }
}
