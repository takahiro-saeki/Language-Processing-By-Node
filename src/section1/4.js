const data = 'Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can.';
const conditions = [1, 5, 6, 7, 8, 9, 15, 16, 19];
const split = data.split(' ')
const omit = split.map(item => item.replace(/\./g, ''))
const box = omit.map((item, i) => {
  const param = {}
  const flag = i + 1;
  if(conditions.includes(flag)) {
    const first = item.slice(0, 1)
    param[flag] = first
    return param
  } else {
    const second = item.slice(0, 2)
    param[flag] = second
    return param
  }
})

console.log(box)