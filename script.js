const choreList = document.getElementById('chore-list');
const ranamizeButton = document.getElementById('randomize');
const chore = document.getElementById('chore');
const people = document.getElementById('people');




function parse (text) {
    List = text.split(',').map((item) => item.trim());
    return text.split(',').map((item) => item.trim());
    
}


function addChores () {
Chores = parse(chore.value)
console.log (Chores);
chore.value = '';
};

function addPeople () {
People = parse(people.value)
console.log (People);
people.value = '';
}; 

function randomize() {
   People.sort(() => Math.random() - 0.5);
   Chores.sort(() => Math.random() - 0.5);
    for (let i = 0; i < Chores.length; i++) {
        const person = People[i % People.length];
        const chore = Chores[i];
        const list = document.createElement('li');
        list.textContent = `${person} does ${chore}`;
        console.log(list);
        
    }
    
  
}

