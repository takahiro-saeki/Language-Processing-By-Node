const item = "stressed";
const split = item.split("")
const reverse = split.reverse()
const join = reverse.join()
const replace = join.replace(/,/g, '')

console.log(replace)
