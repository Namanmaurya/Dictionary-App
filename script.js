function getDefinition() {
    let word = document.getElementById("searchWord").value.trim();
    let output = document.getElementById("output");

    if (word === "") {
        output.innerHTML = "<p>Please enter a word.</p>";
        return;
    }

    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            if (data.title) {
                output.innerHTML = `<p>❌ Word not found! Try another word.</p>`;
                return;
            }

            let meanings = data[0].meanings;
            let phonetics = data[0].phonetics.length > 0 ? data[0].phonetics[0].text : "N/A";
            let definition = meanings[0].definitions[0].definition;
            
            // Extract synonyms & antonyms
            let synonyms = meanings[0].synonyms || [];
            let antonyms = meanings[0].antonyms || [];

            let synonymsText = synonyms.length > 0 ? synonyms.join(", ") : "None available";
            let antonymsText = antonyms.length > 0 ? antonyms.join(", ") : "None available";

            output.innerHTML = `
                <h2>${word}</h2>
                <p><b>Phonetics:</b> ${phonetics}</p>
                <p><b>Definition:</b> ${definition}</p>
                <p class="synonyms"><b>Synonyms:</b> ${synonymsText}</p>
                <p class="antonyms"><b>Antonyms:</b> ${antonymsText}</p>
                <button onclick="speak('${word}')">🔊 Pronounce</button>
            `;
        })
        .catch(error => {
            console.log("Error fetching data:", error);
            output.innerHTML = `<p>⚠️ Error fetching data. Try again later.</p>`;
        });
}

// Web Speech API for pronunciation
function speak(word) {
    let speech = new SpeechSynthesisUtterance();
    speech.text = word;
    speech.lang = "en-US";
    speech.rate = 0.8;
    window.speechSynthesis.speak(speech);
}
