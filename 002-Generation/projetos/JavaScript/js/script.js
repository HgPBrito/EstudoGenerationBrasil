
document.getElementById('btnSend').addEventListener(
    'click', () => {
        const txtWord = document.getElementById('txtWord');

        generateCombination(txtWord.value);
    });

document.getElementById('btnClear').addEventListener(
    'click', () => {
        clearResult();
    });

const generateCombination = (word) => {

    if (word.length <= 0)
        return;

    clearResult();

    const elementResult = document.getElementById('result');
    const elementWord = document.createElement('h2');
    elementWord.innerText = 'Sequencia informada: ' + word + '.';
    elementResult.appendChild(elementWord);

    let positionChars = new Array(word.length);
    let combinations = new Array();

    for (let i = 0; i < positionChars.length; i++)
        positionChars[i] = 0;

    let currentCombination = 0;

    elementResult.appendChild(document.createElement('ol'));
    const elementResultList = elementResult.getElementsByTagName('ol')[0];

    while (currentCombination >= 0) {
        let newCombination = "";
        for (let i = 0; i < positionChars.length; i++)
            newCombination = newCombination + word[positionChars[i]];

        const elementItem = document.createElement('li');
        elementItem.innerText = newCombination;

        if (combinations.indexOf(newCombination) < 0)
            combinations.push(newCombination);
        else
            elementItem.append(' (combinação repetida)');

        elementResultList.appendChild(elementItem);

        currentCombination = nextCombination(positionChars);
    }

    const elementTotal = document.createElement('p');
    elementTotal.innerText = 'Quantidade de combinações sem repetição: ' + combinations.length + '.';
    elementResult.appendChild(elementTotal);
};


const nextCombination = (objectArray) => {
    for (let i = objectArray.length - 1; i >= 0; i--) {
        if (objectArray[i] < objectArray.length - 1) {
            objectArray[i]++;
            break;
        }
        else
            objectArray[i] = (i == 0 ? objectArray[i] = -1 : 0);
    }
    return Number(objectArray.join(''));
};

const clearResult = () => {
    document.getElementById('result').innerText = '';
    document.getElementById('txtWord').value = '';
};