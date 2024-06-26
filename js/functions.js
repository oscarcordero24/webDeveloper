
// Fetch data as json
export async function fetchJson(url, successFunction, errorFunction) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.json();

        // Handle data
        successFunction(data);
    } catch (error) {
        console.error('Error fetching the JSON file:', error);
        errorFunction();
    }
};

// Funtion to fill the gauge with the exact number
export function updateNthChildValue(newValue) {
    // Get all stylesheets in the document
    let styleSheets = document.styleSheets;
    
    // Loop through each stylesheet
    try{
        for (let i = 1; i < styleSheets.length; i++) {
            let styleSheet = styleSheets[i];
            
            // Get all rules in the stylesheet
            let rules = styleSheet.cssRules || styleSheet.rules;
            
            // Loop through each rule
            for (let j = 0; j < rules.length; j++) {
                let rule = rules[j];
                
                // Check if the rule matches the one we're looking for
                if (rule.selectorText && rule.selectorText.includes(".main .gauge .card .rating .block:nth-child(-n+")) {
                    // Update the rule with the new value
                    let newSelector = `.main .gauge .card .rating .block:nth-child(-n+${newValue})`;
                    rule.selectorText = newSelector;
                }
            }
        }
    } catch (e) {
        console.log("Error happened: " + e);
    }
    
}

// Function to update CSS variables
export function updateCSSVariable(variableName, newValue) {
    document.documentElement.style.setProperty(variableName, newValue);
}

