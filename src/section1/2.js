const base1 = 'パトカー';
const base2 = 'タクシー';

const split1 = base1.split("")
const split2 = base2.split("")

const box = [];

let firstCount = 0;
let secondCount = 0;
for(let i = 0; i < 8; i++) {
  if((i % 2) !== 0) {
    box.push(split2[secondCount])
    secondCount++
  } else {
    box.push(split1[firstCount])
    firstCount++
  }
}

const join = box.join()
const replace = join.replace(/,/g, '')

console.log(replace)