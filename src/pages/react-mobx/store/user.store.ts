import { action, makeObservable, observable } from "mobx";

class UserStore {
  username = "FPT";
  userId = "1234";
  address = "17 Duy Tan"

  constructor() {
    makeObservable(this, {
      username: observable,
      userId: observable,
      address: observable,
      updateUserName: action,
      updateUserID: action,
    })
  }

  updateUserName(name:string) {
    this.username = name;
  }
  updateUserID(newId:string) {
    this.userId = newId;
  }
}

export const userStore = new UserStore();