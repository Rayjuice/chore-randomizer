// Get the form and input elements
const choreForm = document.getElementById('chore-form');
const choreInput = document.getElementById('chore-input');
const addChoreBtn = document.getElementById('add-chore-btn');
const choreList = document.getElementById('chore-list');
const peopleForm = document.getElementById('people-form');
const peopleInput = document.getElementById('people-input');
const assignChoreBtn = document.getElementById('assign-chore-btn');
const assignedChoreList = document.getElementById('assigned-chore-list');

// Initialize an empty array to store chores
let chores = [];

// Initialize an empty array to store assigned chores
let assignedChores = {};

// Function to add a chore to the list
function addChore(chore) {
    const li = document.createElement('li');
    li.textContent = chore;
    choreList.appendChild(li);
    chores.push(chore);
}

// Function to assign chores to users
function assignChores() {
    // Get the names
    const names = peopleInput.value.split(',');

    // Check if the names are valid
    if (names.length === 0) {
        alert('Please enter at least one name');
        return;
    }

    // Shuffle the chores array
    chores = chores.sort(() => Math.random() - 0.5);

    // Assign each chore to a user
    assignedChores = {};
    for (let i = 0; i < names.length; i++) {
        assignedChores[names[i].trim()] = [];
    }

    for (let i = 0; i < chores.length; i++) {
        const name = names[i % names.length].trim();
        assignedChores[name].push(chores[i]);
    }

    // Shuffle the assigned chores object
    const shuffledAssignedChores = {};
    const shuffledNames = Object.keys(assignedChores).sort(() => Math.random() - 0.5);
    for (const name of shuffledNames) {
        shuffledAssignedChores[name] = assignedChores[name];
    }

    // Display the assigned chores
    assignedChoreList.innerHTML = '';
    Object.keys(shuffledAssignedChores).forEach((name) => {
        const choresText = shuffledAssignedChores[name].join(', ');
        const li = document.createElement('li');
        li.textContent = `${name}: ${choresText}`;
        assignedChoreList.appendChild(li);
    });
}

// Add event listeners
addChoreBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const chore = choreInput.value.trim();
    if (chore) {
        addChore(chore);
        choreInput.value = '';
    }
});

assignChoreBtn.addEventListener('click', assignChores);