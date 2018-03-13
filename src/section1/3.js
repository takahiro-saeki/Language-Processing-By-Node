const data = 'Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics.';
const split = data.split(' ')
const omit = split.map(item => item.replace(/,/g, ''))
const omitDot = omit.map(item => item.replace(/\./g, ''))
const box = omitDot.map(item => item.length)
console.log(box)