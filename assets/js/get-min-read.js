
document.addEventListener('DOMContentLoaded', function () {
    const readTimeElement = document.getElementById('read-time');

    if (readTimeElement) {
        // Example: calculate read time (assuming an average reading speed of 200 words per minute)
        // const language = readTimeElement.dataLanguage;
        const language = readTimeElement.dataset.language;
        const content = document.querySelector('.article-post').innerText; // or however you get the post content
        let readTime = 0;

        if (language === 'zh') {
            const wordCount = content.replace(/\s+/g, ' ').trim().length;
            console.log(wordCount)
            const wordsPerMinute = 400;
            readTime = Math.ceil(wordCount / wordsPerMinute);
        }
        
        else if (language === 'en') {
            const words = content.split(/\s+/).length;
            const wordsPerMinute = 200;
            readTime = Math.ceil(words / wordsPerMinute);
        }

        else { // author forgot to include language
            readTime = "?"
        }

        readTimeElement.textContent = `${readTime} min read`;
    }
});
