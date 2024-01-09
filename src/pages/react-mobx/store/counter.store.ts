import { action, computed, makeObservable, observable } from "mobx";

interface DataProps {
  userId?:string;
  id?:number;
  title?:string;
  completed?:boolean;
}

class CounterStore {
  count = {
    numberA: 0,
    numberB: 0,
    c: []
  }

  data: DataProps = {};

  constructor() {
    makeObservable(this, {
      count: observable,
      data: observable,
      total: computed,
      increaseCountA: action,
      increaseCountB: action,
      // setData: action,
      // getCount: action

    })
  }

  // computed value
  get total() {
    console.log("--Calculating--");
    return this.count.numberA + this.count.numberB;
  }

  // action
  increaseCountA(number: number) {
    return (this.count.numberA += number)
  }

  // action
  increaseCountB(number: number) {
    return (this.count.numberB += number)
  }

  // action
  setData(data: any) {
    this.data = data;
  }

  // action
  getCount(){
    console.log("--getCounting--");
    return this.count.numberA + this.count.numberB;
  }
}

export const counterStore = new CounterStore