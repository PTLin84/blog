function timeSince(timestamp) {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
    };

    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
        const count = Math.floor(seconds / secondsInUnit);
        if (count >= 1) {
            return `${count} ${unit}${count > 1 ? 's' : ''} ago`;
        }
    }
    return "just now";
}

// Call the function when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
        // Only execute code relevant to post pages
        const timeElement = document.getElementById('post-date-since');
        const timestamp = timeElement.getAttribute('datetime');

        // Show default post date if author forgot to include timestamp
        if (timeElement && timestamp) {
            timeElement.textContent = timeSince(timestamp);
        }
});
