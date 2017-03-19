import { A } from './a';

export class B extends A {
  constructor(prop: string, public otherStuff: number) {
    super(`B ${prop}`);
  }
}
