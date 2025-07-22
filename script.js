// Quiz Application JavaScript

class QuizApp {
    constructor() {
        this.quizData = [];
        this.currentQuestionIndex = 0;
        this.correctAnswers = 0;
        this.wrongAnswers = 0;
        this.totalQuestions = 0;
        this.selectedQuestions = [];
        this.hasAnswered = false;
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadSampleData(); // Load sample data from JSON file
    }

    // Load sample quiz data
    loadSampleData() {
        // Embed the biblical quiz data directly (from your sample-quiz.json)
        const sampleData = [
            {
              "question": "Who built an ark to survive the flood?",
              "options": [
                "Moses",
                "Noah",
                "Abraham",
                "David"
              ],
              "answer": 1
            },
            {
              "question": "Who led the Israelites out of Egypt?",
              "options": [
                "Joseph",
                "Jacob",
                "Moses",
                "Joshua"
              ],
              "answer": 2
            },
            {
              "question": "What did God create on the first day?",
              "options": [
                "Land",
                "Animals",
                "Light",
                "People"
              ],
              "answer": 2
            },
            {
              "question": "What was the first man's name?",
              "options": [
                "Noah",
                "Adam",
                "Seth",
                "Cain"
              ],
              "answer": 1
            },
            {
              "question": "What kind of fruit did Adam and Eve eat?",
              "options": [
                "Banana",
                "Apple",
                "Fig",
                "Not specified"
              ],
              "answer": 3
            },
            {
              "question": "Who was swallowed by a big fish?",
              "options": [
                "Peter",
                "Jonah",
                "Paul",
                "Elijah"
              ],
              "answer": 1
            },
            {
              "question": "Who received the Ten Commandments?",
              "options": [
                "Abraham",
                "David",
                "Joshua",
                "Moses"
              ],
              "answer": 3
            },
            {
              "question": "What was the sign of God's covenant with Noah?",
              "options": [
                "Fire",
                "Rainbow",
                "Star",
                "Mountain"
              ],
              "answer": 1
            },
            {
              "question": "Who was thrown into a den of lions?",
              "options": [
                "Daniel",
                "David",
                "Elijah",
                "Samson"
              ],
              "answer": 0
            },
            {
              "question": "What city did God destroy with fire and brimstone?",
              "options": [
                "Babylon",
                "Nineveh",
                "Sodom",
                "Jericho"
              ],
              "answer": 2
            }
          ];

        // Convert 'answer' property to 'correct' for compatibility
        this.quizData = sampleData.map(question => ({
            ...question,
            correct: question.answer
        }));
        
        console.log('Biblical quiz data loaded successfully:', this.quizData.length, 'questions');
    }

    // Load custom quiz data from JSON
    loadQuizData(jsonData) {
        try {
            this.quizData = Array.isArray(jsonData) ? jsonData : JSON.parse(jsonData);
            console.log('Quiz data loaded successfully:', this.quizData.length, 'questions');
        } catch (error) {
            console.error('Error loading quiz data:', error);
            alert('Error loading quiz data. Please check the JSON format.');
        }
    }

    bindEvents() {
        // Setup screen events
        document.getElementById('start-quiz').addEventListener('click', () => this.startQuiz());
        
        // Quiz screen events
        document.getElementById('next-question').addEventListener('click', () => this.nextQuestion());
        
        // Results screen events
        document.getElementById('restart-quiz').addEventListener('click', () => this.restartQuiz());
        document.getElementById('new-quiz').addEventListener('click', () => this.newQuiz());
        
        // Option button events (using event delegation)
        document.querySelector('.options-container').addEventListener('click', (e) => {
            if (e.target.closest('.option-btn') && !this.hasAnswered) {
                this.selectOption(e.target.closest('.option-btn'));
            }
        });
    }

    startQuiz() {
        const quizCount = document.getElementById('quiz-count').value;
        
        if (this.quizData.length === 0) {
            alert('No quiz data available. Please load questions first.');
            return;
        }
        
        // Prepare selected questions
        if (quizCount === 'all') {
            this.selectedQuestions = [...this.quizData];
        } else {
            const count = parseInt(quizCount);
            this.selectedQuestions = this.shuffleArray([...this.quizData]).slice(0, count);
        }
        
        this.totalQuestions = this.selectedQuestions.length;
        this.currentQuestionIndex = 0;
        this.correctAnswers = 0;
        this.wrongAnswers = 0;
        
        this.showScreen('quiz-screen');
        this.loadQuestion();
        this.updateProgress();
        this.updateScore();
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    loadQuestion() {
        const question = this.selectedQuestions[this.currentQuestionIndex];
        
        document.getElementById('question-text').textContent = question.question;
        document.getElementById('question-counter').textContent = 
            `Question ${this.currentQuestionIndex + 1} of ${this.totalQuestions}`;
        
        const optionButtons = document.querySelectorAll('.option-btn');
        optionButtons.forEach((btn, index) => {
            const optionText = btn.querySelector('.option-text');
            optionText.textContent = question.options[index] || '';
            
            // Reset button state
            btn.classList.remove('correct', 'wrong');
            btn.disabled = false;
        });
        
        // Reset next button
        document.getElementById('next-question').disabled = true;
        this.hasAnswered = false;
    }

    selectOption(selectedButton) {
        if (this.hasAnswered) return;
        
        const selectedIndex = parseInt(selectedButton.dataset.option);
        const question = this.selectedQuestions[this.currentQuestionIndex];
        const correctIndex = question.correct;
        
        this.hasAnswered = true;
        
        // Disable all option buttons
        const allButtons = document.querySelectorAll('.option-btn');
        allButtons.forEach(btn => btn.disabled = true);
        
        // Check if answer is correct
        if (selectedIndex === correctIndex) {
            selectedButton.classList.add('correct');
            this.correctAnswers++;
            this.showFeedback('Correct! 🎉', 'success');
        } else {
            selectedButton.classList.add('wrong');
            allButtons[correctIndex].classList.add('correct');
            this.wrongAnswers++;
            this.showFeedback('Wrong answer! 😞', 'error');
        }
        
        // Update score display
        this.updateScore();
        
        // Enable next button
        document.getElementById('next-question').disabled = false;
        
        // Auto advance after delay (optional)
        setTimeout(() => {
            if (this.currentQuestionIndex < this.totalQuestions - 1) {
                // Do nothing, wait for user to click next
            } else {
                // Last question, auto show results after longer delay
                setTimeout(() => this.showResults(), 2000);
            }
        }, 1000);
    }

    showFeedback(message, type) {
        // Create temporary feedback element
        const feedback = document.createElement('div');
        feedback.className = `feedback feedback-${type}`;
        feedback.textContent = message;
        feedback.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: ${type === 'success' ? '#28a745' : '#dc3545'};
            color: white;
            padding: 15px 30px;
            border-radius: 10px;
            font-weight: 500;
            z-index: 1000;
            animation: fadeInOut 2s ease-in-out;
        `;
        
        document.body.appendChild(feedback);
        
        // Remove feedback after animation
        setTimeout(() => {
            if (feedback.parentNode) {
                feedback.parentNode.removeChild(feedback);
            }
        }, 2000);
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.totalQuestions - 1) {
            this.currentQuestionIndex++;
            this.loadQuestion();
            this.updateProgress();
        } else {
            this.showResults();
        }
    }

    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.totalQuestions) * 100;
        document.querySelector('.progress-fill').style.width = `${progress}%`;
    }

    updateScore() {
        document.getElementById('correct-count').textContent = this.correctAnswers;
        document.getElementById('wrong-count').textContent = this.wrongAnswers;
    }

    showResults() {
        const percentage = Math.round((this.correctAnswers / this.totalQuestions) * 100);
        
        document.getElementById('score-percentage').textContent = `${percentage}%`;
        document.getElementById('final-correct').textContent = this.correctAnswers;
        document.getElementById('final-wrong').textContent = this.wrongAnswers;
        document.getElementById('final-total').textContent = this.totalQuestions;
        
        this.showScreen('results-screen');
    }

    restartQuiz() {
        this.showScreen('quiz-screen');
        this.currentQuestionIndex = 0;
        this.correctAnswers = 0;
        this.wrongAnswers = 0;
        
        // Shuffle questions again for variety
        this.selectedQuestions = this.shuffleArray([...this.selectedQuestions]);
        
        this.loadQuestion();
        this.updateProgress();
        this.updateScore();
    }

    newQuiz() {
        this.showScreen('setup-screen');
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }
}

// Initialize the quiz application
const quizApp = new QuizApp();

// Add CSS for feedback animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
    }
`;
document.head.appendChild(style);

// Function to load custom quiz data (for user to call)
window.loadCustomQuizData = function(jsonData) {
    quizApp.loadQuizData(jsonData);
    alert('Custom quiz data loaded successfully! You can now start the quiz.');
};

// Display instructions for loading custom data
console.log(`
🎯 Quiz Application Ready!

To load your custom quiz data, call:
loadCustomQuizData(yourJsonData)

Expected JSON format:
[
    {
        "question": "Your question here?",
        "options": ["Option A", "Option B", "Option C", "Option D"],
        "correct": 0  // Index of correct answer (0-3)
    },
    // ... more questions
]

Or you can use the sample questions provided.
`); 