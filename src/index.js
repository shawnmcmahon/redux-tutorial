import { compose, pipe } from  'loadash/fp'; 

let input = "    Javascript    "; 
let output = "<div>" + input.trim() + "</div>";

const trim = str = str.trim(); 
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input))); 


