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

const showIntroScreen = () => {
    const introDiv = document.createElement('div');
    introDiv.id = 'intro-div';

    // Text Element
    const introText = document.createElement('div');
    introText.className = 'intro-text';
    introText.innerText = 'Steam 2.0';

    introDiv.appendChild(introText);
    document.body.appendChild(introDiv);

    // Fade in
    setTimeout(() => {
        introDiv.classList.add('fade-in');
    }, 100);

    // Hold the text
    setTimeout(() => {
        introDiv.classList.remove('fade-in');
        introDiv.classList.add('fade-out');
    }, 3000);

    // Remove the intro screen and show loading screen
    setTimeout(() => {
        document.body.removeChild(introDiv);
    }, 6000);
};

// Call this function to start the intro sequence
waitForElement('.Rp8QOGJ2DypeDniMnRBhr').then(() => {
    showIntroScreen();
});
