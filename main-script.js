// STEP 1 
// ENTER THIS CODE INTO THE WEB CONSOLE PANE
// UPDATE WITH YOUR CODE LIST!
const codes = [
    "00000-11111-22222-33333",
    "44444-55555-66666-77777"
]
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to simulate key input events
async function simulateTyping(inputField, value) {
    inputField.focus();
    inputField.value = ""; // Clear existing input

    for (let i = 0; i < value.length; i++) {
        const char = value[i];
        inputField.value += char;

        inputField.dispatchEvent(new KeyboardEvent('keydown', { key: char, bubbles: true }));
        inputField.dispatchEvent(new InputEvent('input', { bubbles: true }));
        await sleep(randomInt(10, 100));
        inputField.dispatchEvent(new KeyboardEvent('keyup', { key: char, bubbles: true }));
        await sleep(randomInt(10, 100));
    }

    // Simulate "change" event at the end
    inputField.dispatchEvent(new Event('change', { bubbles: true }));
}

async function redeemCode(code) {
    const inputField = document.querySelector('input[name="code"]');
    const submitButton = document.querySelector('button[type="submit"]');

    if (!inputField || !submitButton) {
        console.error("Input field or submit button not found!");
        return;
    }

    // Simulate typing the code
    console.log(`Typing code: ${code}`);
    simulateTyping(inputField, code);

    // Wait a bit to ensure the input registers
    await sleep(500);

    // Wait for the button to become active
    while (submitButton.disabled || submitButton.getAttribute('aria-disabled') === "true") {
        await sleep(300);
    }

    sleep(3000);
    // Click the redeem button
    console.log(`Redeeming code: ${code}`);
    submitButton.click();

    // Wait for the "Redeem another code" button to appear
    console.log(`Waiting for confirmation...`);
    while (!document.querySelector('a.css-8z9ay2')) {
        await sleep(500);
    }
    console.log(`Redemption complete for code: ${code}`);

    // Click "Redeem another code" to reset the form
    document.querySelector('a.css-8z9ay2').click();

    // Wait a bit for the form to reset
    await sleep(1000);
}


// STEP 2
// Enter this to run
(async () => {
    sleep(3000);
    const codes1 = codes; // Replace with your codes
    for (let code of codes1) {
        await redeemCode(code);
    }
    console.log("All codes redeemed!");
})();
