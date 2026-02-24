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
        const timeString = `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
        clock.textContent = timeString;
    }

    // Update Card Footer
    const cardFooter = document.getElementById('card-footer');
    if (cardFooter) {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const dateString = `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}, ${hours}:${minutes} ${ampm}`;
        cardFooter.textContent = "Expires " + dateString;
    }
}

setInterval(updateClock, 1000);
updateClock(); // Initial call