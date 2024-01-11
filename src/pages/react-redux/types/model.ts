

export interface ActionProps {
  type?: string;
  payload?: any;
}

 export interface CounterState  {
  countA: number; 
  countB: number; 
  total: number;
  numberClick: number
}

export interface AcademyProps {
  name: string;
  address: AddressProps[]
}

export interface AcademyState {
  name: string;
  address: AddressProps[]
}

export interface AddressProps {
  street:string;
  ward: string;
  number: number;
  city: string;
}

export interface RootState {
  counterReducer: CounterState;
  academyReducer: AcademyState;
  user: any
}