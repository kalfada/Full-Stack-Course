const inp = document.querySelector("input");
const btn = document.querySelector("button")
const span = document.querySelector("span");
console.log(inp);

btn.onclick = () => alert(inp.value);
inp.oninput = () => span.innerHTML = isValid(inp.value);


function isValid(str) {
    return str.toLowerCase() == str ? 'not valid' : 
    str.length < 8 ? 'not valid' : 'valid';
}