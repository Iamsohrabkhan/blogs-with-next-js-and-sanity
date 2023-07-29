function calculateReadingTime(content, wordsPerMinute = 200) {
    // Assuming an average reading speed of 200 words per minute by default
  
    // Count the number of words in the content
    const wordCount = content.trim().split(/\s+/).length;
  
    // Calculate the estimated reading time in minutes
    const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
  
    // Return the result
    return readingTimeMinutes;
  }
 export default calculateReadingTime;  