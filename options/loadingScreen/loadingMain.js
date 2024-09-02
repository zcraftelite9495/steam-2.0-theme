const waitForElement = (selector, parent = document) => new Promise((resolve) => {
    const el = parent.querySelector(selector);
    if (el) {
        resolve(el);
    }

    const observer = new MutationObserver(() => {
        const el = parent.querySelector(selector);
        if (!el) {
            return;
        }

        resolve(el);
        observer.disconnect();
    });

    observer.observe(document.body, {
        subtree: true,
        childList: true,
    });
});

const createLoadingDiv = () => {
    const loadingDiv = document.createElement('div');
    loadingDiv.id = 'loading-div';

    // Array of messages
    const messages = [
        'Getting you ready to rumble...',
        'Baking cookies...',
        'Fetching your gaming experience...',
        'Sharpening pixels...',
        'Charging up the fun...',
        'Respawning excitement...',
        'Mixing potions...',
        'Leveling up your experience...',
        'Rolling out the red carpet...',
        'Buffering awesomeness...',
        'Brewing some magic...',
        'Gathering loot...',
        'Summoning dragons...',
        'Reviving nostalgia...',
        'Powering up your controller...',
        'Counting down to epicness...',
        'Building the perfect world...',
        'Calibrating your adventure...',
        'Cooking up a storm...',
        'Planting trees in your forest...',
        'Mining for diamonds...',
        'Warming up the engines...',
        'Squeezing lemons...',
        'Polishing the gems...',
        'Generating infinite possibilities...',
        'Unleashing creativity...',
        'Rolling the dice...',
        'Connecting the dots...',
        'Starting the party...',
        'Setting the stage...',
        'Chasing butterflies...',
        'Inflating balloons...',
        'Lighting up the fireworks...'
    ];

    // Pick a random message
    const getRandomMessage = () => messages[Math.floor(Math.random() * messages.length)];

    // Main Loading Text
    const textDiv = document.createElement('div');
    textDiv.className = 'loading-text';
    textDiv.innerText = 'Starting Steam';

    // Secondary Loading Text
    const subTextDiv = document.createElement('div');
    subTextDiv.className = 'loading-subtext';
    subTextDiv.innerText = getRandomMessage(); // Set an initial random message

    // Function to update the subtext message every 3 seconds
    const updateSubText = () => {
        subTextDiv.innerText = getRandomMessage(); // Pick a new random message
    };

    // Initial message update
    updateSubText();

    // Set interval to change the message every 5 seconds
    const intervalId = setInterval(updateSubText, 5000);

    // Radial Loader
    const loadingIndicator = document.createElement('div');
    loadingIndicator.className = 'radial-loader';

    loadingDiv.appendChild(loadingIndicator);
    loadingDiv.appendChild(textDiv);
    loadingDiv.appendChild(subTextDiv);

    // Apply to body
    document.body.appendChild(loadingDiv);

    // Timer
    setTimeout(() => {
        clearInterval(intervalId); // Clear the interval when loading screen is removed
        document.body.removeChild(loadingDiv);
    }, 15000);
};

// Call this function to start the intro sequence
waitForElement('.Rp8QOGJ2DypeDniMnRBhr').then(() => {
    createLoadingDiv();
});