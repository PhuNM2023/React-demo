
class MyObservable  {
  private _value: number;
  private _fn: (value: number) => void;

  constructor(value: number) {
    this._value = value;
    this._fn = () => {}
  }

  get value() {
    return this._value;
  }

  set value(v: number) {
    const diff = v - this._value;
    this._value = v;
    this.notify(diff)
  }

  notify(diff: number) {
    if(typeof this._fn === 'function') {
      this._fn(diff);
    }
  }

  subscribe(fn: (value: number) => void) {
    this._fn = fn;
  }

  static sum(...obs: MyObservable[]) {
    const res = new MyObservable(
      obs.map((o) => o.value).reduce((a, b) => a + b, 0)
    )

    obs.map((o) => o.subscribe((diff) => (res.value += diff)))

    return res
  }

}

export default MyObservable