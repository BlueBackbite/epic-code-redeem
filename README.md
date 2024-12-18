### Readme

After revealing all of the keys in the humble store, I ran this code to get a list of keys.
const values = Array.from(document.querySelectorAll('div.keyfield-value'))
    .map(div => div.textContent.trim());
console.log(values);
