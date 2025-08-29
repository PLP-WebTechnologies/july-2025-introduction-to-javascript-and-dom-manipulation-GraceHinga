// Part 1: JavaScript Basics - Variables, Conditionals, and User Input
function processUserData() {
    // Get user input
    const userName = document.getElementById('name-input').value || 'Guest';
    const userAge = parseInt(document.getElementById('age-input').value) || 0;
    
    // Determine if user is an adult
    const isAdult = userAge >= 18;
    
    // Create message based on condition
    let message = `Hello, ${userName}! You are ${userAge} years old. `;
    message += isAdult ? 
        '<span class="highlight">You are an adult.</span>' : 
        '<span class="highlight">You are not yet an adult.</span>';
    
    // Additional conditional check
    if (userAge >= 65) {
        message += ' <span class="highlight">(Senior citizen)</span>';
    } else if (userAge >= 30) {
        message += ' <span class="highlight">(Middle-aged)</span>';
    } else if (userAge >= 13) {
        message += ' <span class="highlight">(Teenager)</span>';
    }
    
    // Output the result
    document.getElementById('basic-output').innerHTML = message;
}

// Part 2: JavaScript Functions
// Temperature conversion function
function convertTemperature() {
    const temp = parseFloat(document.getElementById('temp-input').value);
    const conversionType = document.getElementById('conversion-type').value;
    let result;
    
    if (conversionType === 'cToF') {
        result = `${temp}°C is ${(temp * 9/5 + 32).toFixed(1)}°F`;
    } else {
        result = `${temp}°F is ${((temp - 32) * 5/9).toFixed(1)}°C`;
    }
    
    document.getElementById('temp-result').textContent = result;
}

// String formatting function
function formatString() {
    const text = document.getElementById('format-input').value;
    const formatType = document.getElementById('format-type').value;
    let result;
    
    if (formatType === 'uppercase') {
        result = text.toUpperCase();
    } else if (formatType === 'lowercase') {
        result = text.toLowerCase();
    } else if (formatType === 'capitalize') {
        result = text.replace(/\b\w/g, c => c.toUpperCase());
    }
    
    document.getElementById('format-result').textContent = result;
}

// Part 3: JavaScript Loops
// Simple counter loop
function runCounter() {
    let output = "Counting from 1 to 10:<br>";
    for (let i = 1; i <= 10; i++) {
        output += i + " ";
    }
    document.getElementById('loop-output').innerHTML = output;
}

// Even number counter
function runEvenCounter() {
    let output = "Even numbers from 0 to 20:<br>";
    for (let i = 0; i <= 20; i += 2) {
        output += i + " ";
    }
    document.getElementById('loop-output').innerHTML = output;
}

// Array processing with loops
function processArray() {
    const numbers = [5, 12, 8, 130, 44];
    let sum = 0;
    let max = numbers[0];
    let output = "Array: " + numbers.join(", ") + "<br>";
    
    // Using for loop to calculate sum and max
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    
    output += `Sum: ${sum}<br>`;
    output += `Maximum value: ${max}<br>`;
    output += "Numbers greater than 10: ";
    
    // Using forEach to find numbers greater than 10
    numbers.forEach(num => {
        if (num > 10) {
            output += num + " ";
        }
    });
    
    document.getElementById('array-output').innerHTML = output;
}

// Part 4: DOM Manipulation
// Change text content
function changeText() {
    const outputElem = document.getElementById('dom-output');
    outputElem.textContent = "The text has been changed! Current time: " + new Date().toLocaleTimeString();
}

// Toggle background color
function toggleColor() {
    const outputElem = document.getElementById('dom-output');
    outputElem.style.backgroundColor = outputElem.style.backgroundColor === 'lightyellow' ? 'lightcyan' : 'lightyellow';
}

// Add list item
function addItem() {
    const list = document.getElementById('item-list');
    const newItem = document.createElement('li');
    newItem.textContent = "Item " + (list.children.length + 1);
    list.appendChild(newItem);
}

// Create user card
function createUserCard() {
    const name = document.getElementById('user-name').value || 'Anonymous';
    const role = document.getElementById('user-role').value || 'User';
    const container = document.getElementById('user-cards');
    
    const card = document.createElement('div');
    card.className = 'user-card';
    
    const avatar = document.createElement('div');
    avatar.className = 'user-avatar';
    avatar.textContent = name.charAt(0).toUpperCase();
    
    const info = document.createElement('div');
    info.innerHTML = `<strong>${name}</strong><br>${role}`;
    
    card.appendChild(avatar);
    card.appendChild(info);
    container.appendChild(card);
    
    // Clear input fields
    document.getElementById('user-name').value = '';
    document.getElementById('user-role').value = '';
}
