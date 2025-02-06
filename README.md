# Dictionary-App

Free Dictionary API 📝
🔹 Purpose: Fetches word definitions, phonetics, synonyms, antonyms, and example sentences.
🔹 API Endpoint:
https://api.dictionaryapi.dev/api/v2/entries/en/{word}


🔹 How It Works:

The app sends a request to the API with the user’s input word.
The API returns a JSON response containing the word’s definition, phonetics, synonyms, antonyms, and examples.
The app extracts and displays this information in a user-friendly format.

2️⃣ Web Speech API 🔊
🔹 Purpose: Reads out the word pronunciation using text-to-speech functionality.
🔹 How It Works:

The app creates a SpeechSynthesisUtterance object in JavaScript.
It sets the text (word), language (English), and speech rate.
The window.speechSynthesis.speak() method plays the pronunciation.
🔧 Technologies Used
Technology	Purpose
HTML5	Creates the structure of the app (input fields, buttons, results display).
CSS3	Enhances the user interface with styling and layout design.
JavaScript (ES6)	Handles API calls, processes data, and manages user interactions.
Fetch API	Sends HTTP requests to the Free Dictionary API and retrieves data asynchronously.
Web Speech API	Implements text-to-speech functionality for pronunciation.

🚀 Why These APIs & Technologies?
✅ Free & Open-Source – No API key is needed, making it easy to use.
✅ Lightweight & Fast – Uses JavaScript for quick processing.
✅ User-Friendly Experience – Provides clear definitions and pronunciation support.

