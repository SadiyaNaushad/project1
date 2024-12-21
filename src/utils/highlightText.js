export const highlightText = (textArray, wordsToHighlight) => {
    if (!Array.isArray(textArray) || textArray.length === 0 || !wordsToHighlight) {
      return textArray;
    }
  
    try {
      // Escape special regex characters in the words to highlight
      const escapedWords = wordsToHighlight.map((word) =>
        word.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
      );
      const regex = new RegExp(`(${escapedWords.join("|")})`, "gi");
  
      // Join the array into a single string
      const joinedText = textArray.join(" ");
  
      // Split and apply highlighting
      return joinedText.split(regex).map((part, i) =>
        regex.test(part) ? (
          <span
            key={i}
            style={{
              color: "#4A2FBD",
              fontWeight: "bold",
            }}
          >
            {part}
          </span>
        ) : (
          part
        )
      );
    } catch (error) {
      console.error("Error in highlightText:", error);
      return textArray.join(" ");
    }
  };