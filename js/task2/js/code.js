let div = document.querySelector('.flag');
div.style.backgroundColor = 'Silver';

let whiteSection = document.createElement('div');
let blueSection = document.createElement('div');
let redSection = document.createElement('div');

let whiteColor = 'white';
let blueColor = 'blue';
let redColor = 'red';

function fillRow() {
    let row = '';
    for (i = 0; i < 80; i++) {
        row += 'O';
    }
    return row += '<br>'
}
function fillColumns() {
    let sectionValue = '';
    for (let i = 0; i < 20; i++) {
        sectionValue += fillRow ();
    }
    return sectionValue;
}
function renderFlagSection(section, color) {
    section.style.color = color;
    section.innerHTML = fillColumns();
    div.append(section);
}

renderFlagSection(whiteSection, whiteColor);
renderFlagSection(blueSection, blueColor);
renderFlagSection(redSection, redColor);

