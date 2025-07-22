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
        // 100 Biblical quiz questions
        const sampleData = [
            {
                "question": "Who built an ark to survive the flood?",
                "options": ["Moses", "Noah", "Abraham", "David"],
                "answer": 1
            },
            {
                "question": "Who led the Israelites out of Egypt?",
                "options": ["Joseph", "Jacob", "Moses", "Joshua"],
                "answer": 2
            },
            {
                "question": "What did God create on the first day?",
                "options": ["Land", "Animals", "Light", "People"],
                "answer": 2
            },
            {
                "question": "What was the first man's name?",
                "options": ["Noah", "Adam", "Seth", "Cain"],
                "answer": 1
            },
            {
                "question": "What kind of fruit did Adam and Eve eat?",
                "options": ["Banana", "Apple", "Fig", "Not specified"],
                "answer": 3
            },
            {
                "question": "Who was swallowed by a big fish?",
                "options": ["Peter", "Jonah", "Paul", "Elijah"],
                "answer": 1
            },
            {
                "question": "Who received the Ten Commandments?",
                "options": ["Abraham", "David", "Joshua", "Moses"],
                "answer": 3
            },
            {
                "question": "What was the sign of God's covenant with Noah?",
                "options": ["Fire", "Rainbow", "Star", "Mountain"],
                "answer": 1
            },
            {
                "question": "Who was thrown into a den of lions?",
                "options": ["Daniel", "David", "Elijah", "Samson"],
                "answer": 0
            },
            {
                "question": "What city did God destroy with fire and brimstone?",
                "options": ["Babylon", "Nineveh", "Sodom", "Jericho"],
                "answer": 2
            },
            {
                "question": "Who was the strongest man in the Bible?",
                "options": ["David", "Samson", "Saul", "Solomon"],
                "answer": 1
            },
            {
                "question": "Who was the first woman?",
                "options": ["Ruth", "Sarah", "Eve", "Miriam"],
                "answer": 2
            },
            {
                "question": "What did God create on the seventh day?",
                "options": ["Trees", "Man", "Rest", "Animals"],
                "answer": 2
            },
            {
                "question": "What river did the Israelites cross into the Promised Land?",
                "options": ["Euphrates", "Nile", "Jordan", "Tigris"],
                "answer": 2
            },
            {
                "question": "Who interpreted Pharaoh's dreams?",
                "options": ["Moses", "Joseph", "Aaron", "Daniel"],
                "answer": 1
            },
            {
                "question": "What food did God provide in the wilderness?",
                "options": ["Quail", "Manna", "Bread", "All of the above"],
                "answer": 3
            },
            {
                "question": "Who was the mother of Samuel?",
                "options": ["Sarah", "Rachel", "Hannah", "Leah"],
                "answer": 2
            },
            {
                "question": "What was David's job before he became king?",
                "options": ["Fisherman", "Carpenter", "Shepherd", "Soldier"],
                "answer": 2
            },
            {
                "question": "How many days was the world created in?",
                "options": ["6", "7", "8", "10"],
                "answer": 0
            },
            {
                "question": "Who fought Goliath?",
                "options": ["Saul", "David", "Jonathan", "Solomon"],
                "answer": 1
            },
            {
                "question": "What did Moses part to escape Egypt?",
                "options": ["Nile River", "Red Sea", "Jordan River", "Dead Sea"],
                "answer": 1
            },
            {
                "question": "What fell from heaven to feed the Israelites?",
                "options": ["Corn", "Manna", "Bread", "Honey"],
                "answer": 1
            },
            {
                "question": "Who was Abraham's son?",
                "options": ["Esau", "Isaac", "Jacob", "Joseph"],
                "answer": 1
            },
            {
                "question": "Who betrayed his brother for 20 pieces of silver?",
                "options": ["Cain", "Esau", "Judah", "Joseph's brothers"],
                "answer": 3
            },
            {
                "question": "Who built the temple in Jerusalem?",
                "options": ["Saul", "David", "Solomon", "Samuel"],
                "answer": 2
            },
            {
                "question": "Where was Jesus born?",
                "options": ["Nazareth", "Bethlehem", "Jerusalem", "Galilee"],
                "answer": 1
            },
            {
                "question": "Who baptized Jesus?",
                "options": ["Peter", "John the Baptist", "Paul", "James"],
                "answer": 1
            },
            {
                "question": "How many disciples did Jesus have?",
                "options": ["10", "11", "12", "13"],
                "answer": 2
            },
            {
                "question": "What was Jesus' first miracle?",
                "options": ["Healing the sick", "Feeding the 5,000", "Walking on water", "Turning water into wine"],
                "answer": 3
            },
            {
                "question": "Who was Jesus' mother?",
                "options": ["Elizabeth", "Sarah", "Mary", "Martha"],
                "answer": 2
            },
            {
                "question": "Who betrayed Jesus for 30 pieces of silver?",
                "options": ["Peter", "Judas", "Thomas", "James"],
                "answer": 1
            },
            {
                "question": "Who denied Jesus three times?",
                "options": ["Judas", "Paul", "Peter", "John"],
                "answer": 2
            },
            {
                "question": "What did Jesus feed to 5,000 people?",
                "options": ["Fish and grapes", "Bread and fish", "Loaves and honey", "Bread and lamb"],
                "answer": 1
            },
            {
                "question": "What did Jesus walk on?",
                "options": ["Sand", "Clouds", "Water", "Air"],
                "answer": 2
            },
            {
                "question": "Who wrote most of the New Testament letters?",
                "options": ["Peter", "John", "Paul", "Luke"],
                "answer": 2
            },
            {
                "question": "What was Jesus' job before ministry?",
                "options": ["Fisherman", "Carpenter", "Teacher", "Shepherd"],
                "answer": 1
            },
            {
                "question": "Who was raised from the dead by Jesus?",
                "options": ["John", "Lazarus", "Judas", "Peter"],
                "answer": 1
            },
            {
                "question": "What did Jesus ride into Jerusalem?",
                "options": ["Camel", "Horse", "Donkey", "Cart"],
                "answer": 2
            },
            {
                "question": "What happened 3 days after Jesus died?",
                "options": ["He rose again", "He was buried", "His tomb was sealed", "His body disappeared"],
                "answer": 0
            },
            {
                "question": "What is the shortest verse in the Bible?",
                "options": ["Jesus loves you", "Jesus cried", "Jesus wept", "Jesus rose"],
                "answer": 2
            },
            {
                "question": "What did the disciples do at the Last Supper?",
                "options": ["Sacrificed a lamb", "Fasted", "Prayed", "Ate bread and wine"],
                "answer": 3
            },
            {
                "question": "Who visited Jesus at his birth with gifts?",
                "options": ["Angels", "Priests", "Three wise men", "Shepherds"],
                "answer": 2
            },
            {
                "question": "What did the devil tempt Jesus to turn into bread?",
                "options": ["Sand", "Stone", "Clay", "Wood"],
                "answer": 1
            },
            {
                "question": "What did Jesus say is the greatest commandment?",
                "options": ["Love yourself", "Love God", "Love money", "Obey the law"],
                "answer": 1
            },
            {
                "question": "Who climbed a tree to see Jesus?",
                "options": ["Zacchaeus", "Peter", "Paul", "Nicodemus"],
                "answer": 0
            },
            {
                "question": "What parable tells of a son who ran away and returned?",
                "options": ["The Lost Sheep", "The Good Samaritan", "The Talents", "The Prodigal Son"],
                "answer": 3
            },
            {
                "question": "Who was the Roman governor at Jesus' trial?",
                "options": ["Herod", "Caesar", "Pontius Pilate", "Felix"],
                "answer": 2
            },
            {
                "question": "What book comes after the four Gospels?",
                "options": ["Acts", "Romans", "Revelation", "Hebrews"],
                "answer": 0
            },
            {
                "question": "How did Jesus die?",
                "options": ["Poison", "Sword", "Crucifixion", "Stoning"],
                "answer": 2
            },
            {
                "question": "Who found Jesus' tomb empty?",
                "options": ["John", "Mary Magdalene", "Peter", "Paul"],
                "answer": 1
            },
            {
                "question": "Who was known for his wisdom?",
                "options": ["Saul", "Solomon", "Samuel", "David"],
                "answer": 1
            },
            {
                "question": "What did David use to kill Goliath?",
                "options": ["Sword", "Spear", "Sling and stone", "Bow"],
                "answer": 2
            },
            {
                "question": "What did God create Eve from?",
                "options": ["Dust", "Water", "Rib", "Clay"],
                "answer": 2
            },
            {
                "question": "How many books are in the Bible?",
                "options": ["60", "66", "70", "72"],
                "answer": 1
            },
            {
                "question": "Who was Jesus' earthly father?",
                "options": ["Zechariah", "Joseph", "Simeon", "Jacob"],
                "answer": 1
            },
            {
                "question": "What bird did Noah send first?",
                "options": ["Dove", "Raven", "Eagle", "Owl"],
                "answer": 1
            },
            {
                "question": "Who received a coat of many colors?",
                "options": ["Jacob", "Esau", "Joseph", "Benjamin"],
                "answer": 2
            },
            {
                "question": "What was written on Jesus' cross?",
                "options": ["King of the Jews", "Messiah", "Savior", "Lamb of God"],
                "answer": 0
            },
            {
                "question": "What city did Jesus grow up in?",
                "options": ["Bethlehem", "Jerusalem", "Nazareth", "Capernaum"],
                "answer": 2
            },
            {
                "question": "What did Jesus say to calm the storm?",
                "options": ["Peace, be still", "Do not fear", "Hush now", "Silence"],
                "answer": 0
            },
            {
                "question": "What's the last book of the Bible?",
                "options": ["Acts", "Jude", "Revelation", "Malachi"],
                "answer": 2
            },
            {
                "question": "Who was turned into a pillar of salt?",
                "options": ["Lot's wife", "Ruth", "Sarah", "Esther"],
                "answer": 0
            },
            {
                "question": "What did Elijah go up to heaven in?",
                "options": ["Chariot of gold", "Chariot of fire", "Cloud", "Light"],
                "answer": 1
            },
            {
                "question": "How many days did Jesus fast?",
                "options": ["10", "30", "40", "50"],
                "answer": 2
            },
            {
                "question": "What is the root of all evil?",
                "options": ["Pride", "Money", "Love of money", "Greed"],
                "answer": 2
            },
            {
                "question": "What does 'Emmanuel' mean?",
                "options": ["Savior", "God with us", "King of Kings", "Messenger"],
                "answer": 1
            },
            {
                "question": "Who was the first king of Israel?",
                "options": ["Saul", "David", "Solomon", "Samuel"],
                "answer": 0
            },
            {
                "question": "What was Paul's name before conversion?",
                "options": ["Peter", "Silas", "Saul", "Stephen"],
                "answer": 2
            },
            {
                "question": "Who helped Jesus carry His cross?",
                "options": ["Peter", "Simon of Cyrene", "John", "Joseph"],
                "answer": 1
            },
            {
                "question": "What is the fruit of the Spirit?",
                "options": ["Joy, Peace, Anger", "Love, Joy, Peace", "Faith, Hate, Envy", "Love, Fear, Sadness"],
                "answer": 1
            },
            {
                "question": "What is the greatest love verse?",
                "options": ["Psalm 23", "John 3:16", "Romans 8:28", "Genesis 1:1"],
                "answer": 1
            },
            {
                "question": "Who saw a burning bush?",
                "options": ["Joshua", "David", "Moses", "Abraham"],
                "answer": 2
            },
            {
                "question": "What book is full of songs and poems?",
                "options": ["Proverbs", "Psalms", "Ecclesiastes", "Job"],
                "answer": 1
            },
            {
                "question": "Who walked on water besides Jesus?",
                "options": ["John", "James", "Peter", "Paul"],
                "answer": 2
            },
            {
                "question": "What is the golden rule?",
                "options": ["Pray daily", "Be kind", "Do to others what you'd want done to you", "Love money"],
                "answer": 2
            },
            {
                "question": "Who was the first murderer?",
                "options": ["Cain", "Esau", "Abel", "Lamech"],
                "answer": 0
            },
            {
                "question": "What killed Goliath?",
                "options": ["Sword", "Arrow", "Stone", "Fire"],
                "answer": 2
            },
            {
                "question": "What did God turn Lot's wife into?",
                "options": ["Ice", "Sand", "Salt", "Stone"],
                "answer": 2
            },
            {
                "question": "What animal spoke to Balaam?",
                "options": ["Horse", "Donkey", "Camel", "Goat"],
                "answer": 1
            },
            {
                "question": "Who interpreted dreams in Egypt?",
                "options": ["Daniel", "Joseph", "Moses", "Aaron"],
                "answer": 1
            },
            {
                "question": "Who killed Abel?",
                "options": ["Seth", "Lamech", "Cain", "Adam"],
                "answer": 2
            },
            {
                "question": "What did God create on day six?",
                "options": ["Sun", "Man and animals", "Land", "Sky"],
                "answer": 1
            },
            {
                "question": "Who built a giant boat?",
                "options": ["Moses", "Jonah", "Noah", "Paul"],
                "answer": 2
            },
            {
                "question": "What did Jesus do at the temple as a boy?",
                "options": ["Played", "Preached", "Got lost", "Healed"],
                "answer": 1
            },
            {
                "question": "Who was swallowed by a fish?",
                "options": ["Jonah", "Peter", "Job", "Paul"],
                "answer": 0
            },
            {
                "question": "How many days was Jesus in the tomb?",
                "options": ["1", "2", "3", "4"],
                "answer": 2
            },
            {
                "question": "What does 'gospel' mean?",
                "options": ["Command", "Holy Word", "Good news", "Praise"],
                "answer": 2
            },
            {
                "question": "What is the first book of the Bible?",
                "options": ["Psalms", "Genesis", "Matthew", "Exodus"],
                "answer": 1
            },
            {
                "question": "What is the last book of the Bible?",
                "options": ["Revelation", "Romans", "John", "Acts"],
                "answer": 0
            },
            {
                "question": "How many wise men visited Jesus?",
                "options": ["2", "3", "Not specified", "5"],
                "answer": 2
            },
            {
                "question": "Who wrote the book of Revelation?",
                "options": ["Paul", "Peter", "John", "James"],
                "answer": 2
            },
            {
                "question": "What book tells of Jesus' birth?",
                "options": ["Matthew", "Mark", "John", "Acts"],
                "answer": 0
            },
            {
                "question": "Who was the oldest man in the Bible?",
                "options": ["Adam", "Noah", "Methuselah", "Abraham"],
                "answer": 2
            },
            {
                "question": "What is sin?",
                "options": ["Doing good", "Obeying God", "Disobeying God", "Reading"],
                "answer": 2
            },
            {
                "question": "What was the first plague of Egypt?",
                "options": ["Frogs", "Locusts", "Darkness", "Water to blood"],
                "answer": 3
            },
            {
                "question": "Who did God give the rainbow to?",
                "options": ["Moses", "Adam", "Noah", "David"],
                "answer": 2
            },
            {
                "question": "What did Jesus use to teach?",
                "options": ["Parables", "Psalms", "Lectures", "Dreams"],
                "answer": 0
            },
            {
                "question": "What's another name for the devil?",
                "options": ["Angel", "Satan", "Jesus", "Elijah"],
                "answer": 1
            },
            {
                "question": "Who was the tax collector that followed Jesus?",
                "options": ["Peter", "Paul", "Matthew", "Mark"],
                "answer": 2
            },
            {
                "question": "What is the Bible?",
                "options": ["Just a story", "God's Word", "A fairy tale", "Old laws"],
                "answer": 1
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