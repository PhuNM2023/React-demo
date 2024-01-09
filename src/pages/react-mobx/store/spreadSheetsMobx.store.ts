import { action, makeObservable, observable, reaction } from "mobx";

interface ISpreadSheetStore {
  b: number;
  c: number;
  d: number;
  a: number;

  handleChange:(key: keyof ISpreadSheetStore, value: number) => void;
  calculateA: () => void
}

class SpreadSheetStore implements ISpreadSheetStore {
  b= 0;
  c= 0;
  d= 0;
  a= 0;

  constructor() {
    makeObservable(this, {
      b: observable,
      c: observable,
      d: observable,
      a: observable,
      handleChange: action,
    });

    reaction (
      () => [this.b, this.c, this.d],
      (newValues, reaction) => {
        this.calculateA()
      }
    )
  }

  handleChange = (key: string, value: number) => {
    (this as any) [key] = value
  };
  calculateA () {
    this.a = this.b + this.c + this.d
  }
}

const spreadSheetStore = new SpreadSheetStore();
export default spreadSheetStore;