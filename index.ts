import { A } from './a';
import { B } from './b';

const a = new A('hello');
const b: B = a.b();
b.log();
