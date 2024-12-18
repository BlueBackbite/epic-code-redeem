### Readme

Being daunted with the dump of hundreds of keys from some humble epic bundles, I created this code to try and streamline the input into their web redeem at https://store.epicgames.com/en-US/redeem.
After revealing all of the keys in the humble store, I ran the below code to get a list of keys.

```javascript
const values = Array.from(document.querySelectorAll('div.keyfield-value'))
    .map(div => div.textContent.trim());
console.log(values);
```

Update the list in the `main-script.js` and copy the 'Step 1' code in.
Copy in the 'Step 2' code when you're ready to go.

This is unfinished technically. Running this code/script requires you to still backspace and replace the last character of the code to activate the UI and activate the code. If anyone knows a workaround for this let me know/send a PR.
