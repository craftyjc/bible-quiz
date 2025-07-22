# 🧠 Quiz Master Application

A beautiful, responsive quiz application built with vanilla JavaScript, HTML, and CSS.

## Features

✨ **Modern Design**: Beautiful gradient UI with smooth animations  
📱 **Responsive**: Works perfectly on desktop, tablet, and mobile  
🎯 **Customizable**: Load your own quiz questions via JSON  
📊 **Progress Tracking**: Real-time progress bar and score counters  
🎨 **Visual Feedback**: Green/red color coding for correct/wrong answers  
🔄 **Flexible Options**: Choose number of questions (5, 10, 15, 20, or all)  
🎲 **Random Order**: Questions are shuffled for variety  

## Getting Started

1. **Open the application**: Simply open `index.html` in your web browser
2. **Try the demo**: The app comes with 15 sample questions ready to use
3. **Load your questions**: Use the instructions below to load your own quiz data

## Loading Custom Quiz Questions

### Method 1: Browser Console
1. Open browser developer tools (F12)
2. Go to the Console tab
3. Use the `loadCustomQuizData()` function:

```javascript
// Your quiz data
const myQuizData = [
    {
        "question": "What is the capital of Japan?",
        "options": ["Tokyo", "Osaka", "Kyoto", "Hiroshima"],
        "correct": 0
    },
    // ... more questions
];

// Load the data
loadCustomQuizData(myQuizData);
```

### Method 2: JSON File
Create a JSON file with your questions and load it programmatically:

```json
[
    {
        "question": "Your question here?",
        "options": ["Option A", "Option B", "Option C", "Option D"],
        "correct": 2
    },
    {
        "question": "Another question?",
        "options": ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        "correct": 0
    }
]
```

## JSON Format Requirements

Each question object must have:
- `question`: The question text (string)
- `options`: Array of exactly 4 answer choices (strings)
- `correct`: Index of the correct answer (0-3, where 0 is the first option)

### Example:
```json
{
    "question": "What is 2 + 2?",
    "options": ["3", "4", "5", "6"],
    "correct": 1
}
```
☝️ In this example, "4" is correct (index 1 in the options array)

## How to Use

1. **Setup Screen**: Choose how many questions you want (5, 10, 15, 20, or all)
2. **Quiz Screen**: 
   - Read the question
   - Click on your chosen answer
   - See immediate feedback (green = correct, red = wrong)
   - Click "Next Question" to continue
3. **Results Screen**: View your final score and choose to restart or setup a new quiz

## File Structure

```
quiz-app/
├── index.html      # Main HTML structure
├── styles.css      # CSS styling and animations
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## Features in Detail

### Progress Tracking
- Real-time progress bar showing completion percentage
- Current question counter (e.g., "Question 5 of 10")
- Live correct/wrong answer counters

### Visual Feedback
- Correct answers turn green with checkmark
- Wrong answers turn red, correct answer also highlights in green
- Animated feedback messages
- Score circle with percentage on results screen

### Customization Options
- Choose quiz length (5, 10, 15, 20, or all questions)
- Questions are randomly shuffled each time
- Restart with same questions or setup new quiz

## Sample Questions Included

The app comes with 15 sample questions covering:
- Geography (capitals, countries, landmarks)
- Science (chemistry, physics, nature)
- History (world events, dates)
- General knowledge (culture, facts)

## Tips for Creating Good Quiz Questions

1. **Clear Questions**: Make questions specific and unambiguous
2. **Balanced Options**: Ensure all 4 options are plausible
3. **Difficulty**: Mix easy, medium, and hard questions
4. **Length**: Keep questions and answers concise
5. **Variety**: Include different topics and question types

Enjoy testing your knowledge! 🎓 