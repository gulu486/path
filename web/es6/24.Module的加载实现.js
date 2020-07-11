// 下面就是两种异步加载的语法。
<script src="path/to/myModule.js" defer></script>
<script src="path/to/myModule.js" async></script>

// lib.js
export let counter = 3;
export function incCounter() {
  counter++;
}

// main.js
import { counter, incCounter } from './lib';
console.log(counter); // 3
incCounter();
console.log(counter); // 4