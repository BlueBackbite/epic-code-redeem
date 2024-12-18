### Readme

After revealing all of the keys in the humble store, I ran this code to get a list of keys.

```javascript
const values = Array.from(document.querySelectorAll('div.keyfield-value'))
    .map(div => div.textContent.trim());
console.log(values);
```

This is unfinished technically. Running this code/script requires you to still backspace and replace the last character of the code to activate the UI and activate the code. If anyone knows a workaround for this let me know/send a PR.
