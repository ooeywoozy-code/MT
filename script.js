function setExpirationTime() {
    const cardFooter = document.getElementById('card-footer');
    if (cardFooter) {
        const now = new Date();
        const expires = new Date(now.getTime() + 2 * 60 * 60 * 1000 - 7 * 60 * 1000); // Add 2 hours, subtract 7 minutes
        let expHours = expires.getHours();
        const expMinutes = String(expires.getMinutes()).padStart(2, '0');
        const expAmpm = expHours >= 12 ? 'PM' : 'AM';

        expHours = expHours % 12;
        expHours = expHours ? expHours : 12;

        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const dateString = `${months[expires.getMonth()]} ${expires.getDate()}, ${expires.getFullYear()}, ${expHours}:${expMinutes} ${expAmpm}`;
        cardFooter.textContent = "Expires " + dateString;
    }
}

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // Update Clock
    const clock = document.getElementById('clock');
    if (document.activeElement !== clock) {
        const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
        clock.textContent = timeString;
    }
}

function addFooter() {
    const footer = document.createElement('div');
    footer.className = 'footer';
    document.body.appendChild(footer);
}

setExpirationTime();
setInterval(updateClock, 1000);
updateClock(); // Initial call
addFooter();