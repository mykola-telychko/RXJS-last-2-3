import { from } from 'rxjs';
import { last } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/filtering/last

const src1$ = from([1, 2, 3, 4, 5]);
const src2$ = from([1, 2, 3, 4, 5]);

// # 1 Last value to pass predicate
//emit last even number
const example1 = src1$.pipe(last((num) => num % 2 === 0));
//output: "Last to pass test: 4"
const subscribe1 = example1.subscribe((val) =>
  console.log(`Last to pass test: ${val}`)
);

// # 2 Last with default value
//no values will pass given predicate, emit default
const example2 = src2$.pipe(last((v) => v > 5, 'else false!'));
//output: 'Nothing!'
const subscribe2 = example2.subscribe((val) => console.log(val));
