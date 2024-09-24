const validNames = ["Tharun Kumar", "Faiyaz", "Dora", "Graham Stuart"];
let openInfo = [];

function showHome() {
    hideAllPages();
    document.getElementById('home-page').style.display = 'block';
}

function launchApp() {
    hideAllPages();
    document.getElementById('launch-page').style.display = 'block';
}

function showAbout() {
    hideAllPages();
    document.getElementById('about-page').style.display = 'block';
    displayOpenInfo();
}

function hideAllPages() {
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
}

function validateName() {
    const name = document.getElementById('userName').value.trim();
    const launchMessage = document.getElementById('launch-message');
    
    if (validNames.includes(name)) {
        launchMessage.innerHTML = `
            <p>Dear Chef Guest And Our Founder, Our Director, Our Senior Editor, Thank you For Using Your Valuable Time.</p>
            <button onclick="openApp('${name}')">Open</button>
        `;
    } else {
        launchMessage.innerHTML = `<p>Name not recognized. Access Denied.</p>`;
    }
}

function openApp(name) {
    const currentDateTime = new Date();
    const openTime = currentDateTime.toLocaleString();
    
    openInfo.push({ name, openTime });
    
    alert(`Thank You For Opening Our App. The App Will Be Launched On 07/09/24. Remaining Time: ${calculateRemainingTime()}`);
}

function calculateRemainingTime() {
    const launchDate = new Date("2024-09-07");
    const now = new Date();
    const timeDifference = launchDate - now;
    const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return `${daysRemaining} days`;
}

function displayOpenInfo() {
    const openInfoDiv = document.getElementById('open-info');
    openInfoDiv.innerHTML = '';

    if (openInfo.length > 0) {
        openInfo.forEach(entry => {
            openInfoDiv.innerHTML += `<p>${entry.name} Opened On ${entry.openTime}</p>`;
        });
    } else {
        openInfoDiv.innerHTML = `<p>No one has opened the app yet.</p>`;
    }

    const notOpenedNames = validNames.filter(name => !openInfo.some(entry => entry.name === name));
    if (notOpenedNames.length > 0) {
        openInfoDiv.innerHTML += `<p>These names have not opened the app:</p>`;
        notOpenedNames.forEach(name => {
            openInfoDiv.innerHTML += `<p>${name} not opened</p>`;
        });
    }
}

