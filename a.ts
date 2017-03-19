import { B } from './b';

export class A {
  constructor(public prop: string) {
  }

  b(): B {
    return new B(this.prop, 123);
  }

  log() {
    console.log(`Prop: ${this.prop}`);
  }
}
