import { compose, pipe } from  'lodash/fp'; 

let input = "    Javascript    "; 
let output = "<div>" + input.trim() + "</div>";

const trim = str => str.trim(); 
const wrap = (type, str) => `<${type}>${str}</${type}>`;
const toLowerCase = str => str.toLowerCase();

const transform  = pipe(trim, toLowerCase, wrap); 

transform(input)
console.log(transform(input))



