// Define the questions and expected answers
const questions = [
    {
        category: 'Category 1',
        questions: [
            {
                audio: 'cowboy.mp3',
                image: 'cowboy.png',
                expectedAnswer: 'cowboy',
                scored: false
            },
            {
                audio: 'cowboy1.mp3',
                image: 'cowboy.png',
                expectedAnswer: 'Boy',
                scored: true
            },
            {
                audio: 'airplane.mp3',
                image: 'airplane.png',
                expectedAnswer: 'Aeroplane',
                scored: false
            },
            {
                audio: 'airplane1.mp3',
                image: 'airplane.png',
                expectedAnswer: 'Air',
                scored: true
            },
            {
                audio: 'cap.mp3',
                image: 'cap.png',
                expectedAnswer: 'Cap',
                scored: false
            },
            {
                audio: 'cap1.mp3',
                image: 'cap.png',
                expectedAnswer: 'App',
                scored: true
            },
            {
                audio: 'sit.mp3',
                image: 'sit.png',
                expectedAnswer: 'Sit',
                scored: false
            },
            {
                audio: 'sit1.mp3',
                image: 'sit.png',
                expectedAnswer: 'it',
                scored: true
            },
            {
                audio: 'bear.mp3',
                image: 'bear.png',
                expectedAnswer: 'Bear',
                scored: false
            },
            {
                audio: 'bear1.mp3',
                image: 'bear.png',
                expectedAnswer: 'air',
                scored: true
            },
            {
                audio: 'paid.mp3',
                image: 'paid.png',
                expectedAnswer: 'paid',
                scored: false
            },
            {
                audio: 'paid1.mp3',
                image: 'paid.png',
                expectedAnswer: 'aid',
                scored: true
            },
            {
                audio: 'rake.mp3',
                image: 'rake.png',
                expectedAnswer: 'rake',
                scored: false
            },
            {
                audio: 'rake1.mp3',
                image: 'rake.png',
                expectedAnswer: 'Take',
                scored: true
            },
            {
                audio: 'farm.mp3',
                image: 'farm.png',
                expectedAnswer: 'farm',
                scored: false
            },
            {
                audio: 'farm1.mp3',
                image: 'farm.png',
                expectedAnswer: 'far',
                scored: true
            }
        ]
    },
    {
        category: 'Category 2',
        questions: [
            {
                audio: 'seed.mp3',
                image: 'seed.png',
                expectedAnswer: 'seed',
                scored: false
            },
            {
                audio: 'seed1.mp3',
                image: 'seed.png',
                expectedAnswer: 'seem',
                scored: true
            },
            {
                audio: 'beak.mp3',
                image: 'beak.png',
                expectedAnswer: 'beak',
                scored: false
            },
            {
                audio: 'beak1.mp3',
                image: 'beak.png',
                expectedAnswer: 'b',
                scored: true
            },
            {
                audio: 'train.mp3',
                image: 'train.png',
                expectedAnswer: 'train',
                scored: false
            },
            {
                audio: 'train1.mp3',
                image: 'train.png',
                expectedAnswer: 'tray',
                scored: true
            },
            {
                audio: 'wave.mp3',
                image: 'wave.png',
                expectedAnswer: 'wave',
                scored: false
            },
            {
                audio: 'wave1.mp3',
                image: 'wave.png',
                expectedAnswer: 'wade',
                scored: true
            },
            {
                audio: 'hat.mp3',
                image: 'hat.png',
                expectedAnswer: 'hat',
                scored: false
            },
            {
                audio: 'hat1.mp3',
                image: 'hat.png',
                expectedAnswer: 'ha ha',
                scored: true
            },
            {
                audio: 'pot.mp3',
                image: 'pot.png',
                expectedAnswer: 'pot',
                scored: false
            },
            {
                audio: 'pot1.mp3',
                image: 'pot.png',
                expectedAnswer: 'pat',
                scored: true
            },
            {
                audio: 'bag.mp3',
                image: 'bag.png',
                expectedAnswer: 'bag',
                scored: false
            },
            {
                audio: 'bag1.mp3',
                image: 'bag.png',
                expectedAnswer: 'bit',
                scored: true
            },
            {
                audio: 'bat.mp3',
                image: 'bat.png',
                expectedAnswer: 'bat',
                scored: false
            },
            {
                audio: 'bat1.mp3',
                image: 'bat.png',
                expectedAnswer: 'bit',
                scored: true
            }
        ]
    },
    {
        category: 'Category 3',
        questions: [
            {
                audio: 'bride.mp3',
                image: 'bride.png',
                expectedAnswer: 'Bride',
                scored: false
            },
            {
                audio: 'bride1.mp3',
                image: 'bride.png',
                expectedAnswer: 'ride',
                scored: true
            },
            {
                audio: 'glad.mp3',
                image: 'glad.png',
                expectedAnswer: 'glad',
                scored: false
            },
            {
                audio: 'glad1.mp3',
                image: 'glad.png',
                expectedAnswer: 'lad',
                scored: true
            },
            {
                audio: 'crate.mp3',
                image: 'crate.png',
                expectedAnswer: 'crate',
                scored: false
            },
            {
                audio: 'crate1.mp3',
                image: 'crate.png',
                expectedAnswer: 'ate',
                scored: true
            },
            {
                audio: 'broom.mp3',
                image: 'broom.png',
                expectedAnswer: 'Broom',
                scored: false
            },
            {
                audio: 'broom1.mp3',
                image: 'broom.png',
                expectedAnswer: 'room',
                scored: true
            },
            {
                audio: 'grass.mp3',
                image: 'grass.png',
                expectedAnswer: 'grass',
                scored: false
            },
            {
                audio: 'grass1.mp3',
                image: 'grass.png',
                expectedAnswer: 'grove',
                scored: true
            },
            {
                audio: 'smell.mp3',
                image: 'smell.png',
                expectedAnswer: 'smell',
                scored: false
            },
            {
                audio: 'smell1.mp3',
                image: 'smell.png',
                expectedAnswer: 'spell',
                scored: true
            },
            {
                audio: 'swim.mp3',
                image: 'swim.png',
                expectedAnswer: 'swim',
                scored: false
            },
            {
                audio: 'swim1.mp3',
                image: 'swim.png',
                expectedAnswer: 'swear',
                scored: true
            }
        ]
    }
];


// Define variables
let currentCategory = 0;
let currentQuestion = 0;
let timeLeft = 10;
let timer;
let instantScore = 0;
let standardScore = 0;
let wrongScore = 0;
let recognition;
let studentName = '';
let uniqueNumber;

// Get DOM elements
const audioElement = document.getElementById('question-audio');
const imageElement = document.getElementById('question-image');
const speechContainer = document.getElementById('speech-container');
const speechResult = document.getElementById('speech-result');
const nextBtn = document.getElementById('next-btn');
const timeLeftElement = document.getElementById('time-left');
const instantScoreElement = document.getElementById('instant-score');
const standardScoreElement = document.getElementById('standard-score');
const wrongScoreElement = document.getElementById('wrong-score');
const startBtn = document.getElementById('start-btn');
const startContainer = document.getElementById('start-container');
const quizContent = document.getElementById('quiz-content');
const resultContainer = document.getElementById('result-container');
const studentDetails = document.getElementById('student-details');
const finalScore = document.getElementById('final-score');

// Initialize category scores
const categoryScores = [
    { instant: 0, standard: 0, wrong: 0 },
    { instant: 0, standard: 0, wrong: 0 },
    { instant: 0, standard: 0, wrong: 0 }
];

// Function to validate questions
function validateQuestions() {
    questions.forEach((category, catIndex) => {
        console.log(`Category ${catIndex + 1}:`);
        category.questions.forEach((question, qIndex) => {
            console.log(`  Question ${qIndex + 1}:`);
            console.log(`    Expected Answer: ${question.expectedAnswer}`);
            console.log(`    Scored: ${question.scored}`);
        });
    });
}

// Function to start the quiz
function startQuiz() {
    studentName = document.getElementById('student-name').value;
    if (studentName) {
        uniqueNumber = Math.floor(Math.random() * 1000000);
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('start-container').style.display = 'none';
        quizContent.style.display = 'block';
        instantScore = 0;
        standardScore = 0;
        wrongScore = 0;
        instantScoreElement.textContent = `Instant Score: ${instantScore}`;
        standardScoreElement.textContent = `Standard Score: ${standardScore}`;
        wrongScoreElement.textContent = `Wrong Score: ${wrongScore}`;
        validateQuestions();
        renderQuestion();
    } else {
        alert('Please enter your name');
    }
}

// Function to render the question and options
function renderQuestion() {
    const category = questions[currentCategory];
    const question = category.questions[currentQuestion];
    audioElement.src = question.audio;
    imageElement.src = question.image;

    console.log(`Rendering question ${currentQuestion + 1} of category ${currentCategory + 1}`);
    console.log(`Expected answer: ${question.expectedAnswer}`);
    console.log(`Scored: ${question.scored}`);

    timeLeft = 10;
    timeLeftElement.textContent = timeLeft;
    audioElement.play();
    startTimer();
    handleSpeechRecognition();
}

// Function to handle speech recognition
function handleSpeechRecognition() {
    const category = questions[currentCategory];
    const question = category.questions[currentQuestion];
    const expectedAnswer = question.expectedAnswer.toLowerCase();

    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
        const transcript = event.results[event.resultIndex][0].transcript.toLowerCase();
        speechResult.textContent = transcript;
        console.log(`Question ${currentQuestion + 1}: Expected "${expectedAnswer}", Got "${transcript}"`);

        if (transcript.includes(expectedAnswer)) {
            stopTimer();
            const answerTime = 10 - timeLeft;
            console.log(`Correct answer given in ${answerTime} seconds`);
            
            if (question.scored) {
                console.log(`This is a scored question (${currentQuestion + 1})`);
                if (answerTime <= 3) {
                    instantScore++;
                    categoryScores[currentCategory].instant++;
                    console.log(`Instant score updated: ${instantScore}`);
                } else if (answerTime > 5 && answerTime <= 10) {
                    standardScore++;
                    categoryScores[currentCategory].standard++;
                    console.log(`Standard score updated: ${standardScore}`);
                }
                instantScoreElement.textContent = `Instant Score: ${instantScore}`;
                standardScoreElement.textContent = `Standard Score: ${standardScore}`;
            } else {
                console.log(`This is not a scored question (${currentQuestion + 1})`);
            }
            
            recognition.stop();
            setTimeout(() => {
                nextQuestion();
            }, 1000); // Wait for 1 second before moving to the next question
        }
    };

    recognition.start();
}

// Function to start the timer
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timeLeftElement.textContent = timeLeft;

        if (timeLeft === 0) {
            stopTimer();
            const question = questions[currentCategory].questions[currentQuestion];
            if (question.scored) {
                wrongScore++;
                categoryScores[currentCategory].wrong++;
                wrongScoreElement.textContent = `Wrong Score: ${wrongScore}`;
            }
            nextQuestion();
        }
    }, 1000);
}
// Function to stop the timer
function stopTimer() {
    clearInterval(timer);
}

// Function to move to the next question or category
function nextQuestion() {
    currentQuestion++;
    const category = questions[currentCategory];
    if (currentQuestion < category.questions.length) {
        renderQuestion();
    } else {
        currentCategory++;
        if (currentCategory < questions.length) {
            currentQuestion = 0;
            renderQuestion();
        } else {
            showResult();
        }
    }
}

// Function to show the result
function showResult() {
    quizContent.style.display = 'none';
    resultContainer.style.display = 'block';
    studentDetails.textContent = `Name: ${studentName} | Unique Number: ${uniqueNumber}`;
    finalScore.textContent = `Instant Score: ${instantScore} | Standard Score: ${standardScore} | Wrong Score: ${wrongScore}`;
    
    // Save result to database
    saveResult();
}

// Function to generate the report
function generateReport() {
    const report = `
        Student Name: ${studentName}
        Unique Number: ${uniqueNumber}
        
        Category 1:
        Instant Score: ${categoryScores[0].instant}
        Standard Score: ${categoryScores[0].standard}
        Wrong Score: ${categoryScores[0].wrong}
        
        Category 2:
        Instant Score: ${categoryScores[1].instant}
        Standard Score: ${categoryScores[1].standard}
        Wrong Score: ${categoryScores[1].wrong}
        
        Category 3:
        Instant Score: ${categoryScores[2].instant}
        Standard Score: ${categoryScores[2].standard}
        Wrong Score: ${categoryScores[2].wrong}
        
        Total:
        Instant Score: ${instantScore}
        Standard Score: ${standardScore}
        Wrong Score: ${wrongScore}
    `;
    
    alert(report);
}

document.getElementById('login-btn').addEventListener('click', async () => {
    const name = document.getElementById('student-name').value;
    const district = document.getElementById('district').value;
    const school = document.getElementById('school').value;
    const teacher = document.getElementById('teacher').value;

    const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, district, school, teacher })
    });

    const data = await response.json();
    localStorage.setItem('uniqueID', data.uniqueID);
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('start-container').style.display = 'block';
});

// After quiz ends
async function saveResult() {
    const uniqueID = localStorage.getItem('uniqueID');
    const grade = instantScore + standardScore; // You can adjust this calculation as needed
    const response = await fetch('/saveResult', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            uniqueID, 
            grade, 
            instantScore, 
            standardScore, 
            wrongScore,
            name: studentName,
            district: localStorage.getItem('district'),
            school: localStorage.getItem('school'),
            teacher: localStorage.getItem('teacher')
        })
    });
    const result = await response.json();
    console.log(result.message);
}

// Assuming you have dropdowns for district, school, teacher
const adminPanelBtn = document.getElementById('admin-panel-btn');
const adminLoginContainer = document.getElementById('admin-login');
const adminPanel = document.getElementById('admin-panel');
const adminLoginBtn = document.getElementById('admin-login-btn');
const adminLogoutBtn = document.getElementById('admin-logout-btn');
const quizContainer = document.getElementById('quiz-container');

adminPanelBtn.addEventListener('click', () => {
    quizContainer.style.display = 'none';
    adminLoginContainer.style.display = 'block';
});

adminLoginBtn.addEventListener('click', () => {
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;

    if (username === 'test' && password === 'test123') {
        adminLoginContainer.style.display = 'none';
        adminPanel.style.display = 'block';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});

adminLogoutBtn.addEventListener('click', () => {
    adminPanel.style.display = 'none';
    quizContainer.style.display = 'block';
    document.getElementById('admin-username').value = '';
    document.getElementById('admin-password').value = '';
});


document.getElementById('filter-btn').addEventListener('click', async () => {
    const district = document.getElementById('district-filter').value;
    const school = document.getElementById('school-filter').value;
    const teacher = document.getElementById('teacher-filter').value;
    const uniqueID = document.getElementById('uniqueid-filter').value;

    const response = await fetch(`/results?district=${district}&school=${school}&teacher=${teacher}&uniqueID=${uniqueID}`);
    const results = await response.json();

    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    } else {
        results.forEach(result => {
            const studentDiv = document.createElement('div');
            studentDiv.innerHTML = `
                <p>Name: ${result.name}</p>
                <p>Unique ID: ${result.uniqueID}</p>
                <p>District: ${result.district}</p>
                <p>School: ${result.school}</p>
                <p>Teacher: ${result.teacher}</p>
                <p>Grade: ${result.grade}</p>
                <p>Instant Score: ${result.instantScore}</p>
                <p>Standard Score: ${result.standardScore}</p>
                <p>Wrong Score: ${result.wrongScore}</p>
                <p>Timestamp: ${new Date(result.timestamp).toLocaleString()}</p>
                <hr>
            `;
            resultsContainer.appendChild(studentDiv);
        });
    }
});

// Add event listeners
startBtn.addEventListener('click', startQuiz);
document.getElementById('generate-report-btn').addEventListener('click', generateReport);
document.getElementById('admin-panel-btn').addEventListener('click', () => {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('admin-panel').style.display = 'block';
  });