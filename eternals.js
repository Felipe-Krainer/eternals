const eternals = [
    {
        name: "Ikaris",
        age: 5000,
        skills: ["flight", "strength", "laser eyes"]
    },
    {
        name: "Sersi",
        age: 7000,
        skills: ["transmutation", "immortality", "empathy"]
    },
    {
        name: "Thena",
        age: 6000,
        skills: ["sword", "combat", "strategy"]
    },
    {
        name: "Kingo",
        age: 5000,
        skills: ["energy projection", "combat", "immortality"]
    },
    {
        name: "Sprite",
        age: 1000,
        skills: ["illusions", "immortality", "trickery"]
    }
];

const displayCharacters = () => {
    const characterList = document.getElementById('characterList');
    
    characterList.innerHTML = '';

    eternals.forEach(character => {
        let li = document.createElement('li');
        
        li.textContent = `${character.name}, Age: ${character.age}, Skills: ${character.skills.join(', ')}`;
        
        characterList.appendChild(li);
    });
};

const findCharacterBySkill = () => {
    const searchSkill = document.getElementById('skillSearch').value.toLowerCase();
    const searchResult = document.getElementById('searchResult');

    searchResult.innerHTML = '';

    let foundCharacters = eternals.filter(character => 
        character.skills.some(skill => skill.toLowerCase() === searchSkill)
    );

    if (foundCharacters.length > 0) {
        foundCharacters.forEach(character => {
            let div = document.createElement('div');
            div.textContent = `Found: ${character.name}, Skills: ${character.skills.join(', ')}`;
            searchResult.appendChild(div);
        });
    } else {
        searchResult.textContent = 'No characters found with that skill.';
    }
};

window.onload = displayCharacters;
