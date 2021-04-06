let type = document.querySelector('.type');
let allTheText = document.querySelector('.all-the-text');
let r = document.querySelector('#symbol-1');
let cr = document.querySelector('.letter-c');
let r1 = document.querySelector('.one');
let r2 = document.querySelector('.two');
let r3 = document.querySelector('.three');
let r4 = document.querySelector('.four');
let r5 = document.querySelector('.five')
let r6 = document.querySelector('.six');
let r7 = document.querySelector('.seven');
let r8 = document.querySelector('.eight');
let i = 0;
window.addEventListener('keydown', function (event) {
    function appendLetter(letter, sel) {
        let upperLatter = letter.toUpperCase();
        let lowLetter = letter.toLowerCase();
        let keyCode = upperLatter.charCodeAt(0); 
        if (event.keyCode === keyCode && event.getModifierState("CapsLock")) {
            i++
            sel.style.backgroundColor = '#a9a9a9';
            sel.style.color = 'white';
            return allTheText.append(upperLatter);
        }

        if (event.keyCode === keyCode && event.shiftKey) {
            i++
            sel.style.backgroundColor = '#a9a9a9';
            sel.style.color = 'white';
            return allTheText.append(upperLatter);
        }

        if (event.keyCode === keyCode) {
            i++
            sel.style.backgroundColor = '#a9a9a9';
            sel.style.color = 'white';
            return allTheText.append(lowLetter);

        }
        // if (event.keyCode === 8) {
        //     let lol = allTheText.lastElementChild;
        //     console.log(lol);
        // } we will think about u later
    }

    if (event.keyCode === 67) {
        appendLetter('C', cr);
        white(67, cr);
    } 
    
    else if (event.keyCode === 49) {
        appendLetter('1', r1);
        white(49, r1);
    } 

    else if (event.keyCode === 50) {
        appendLetter('2', r2);
        white(50, r2);
    } 

    else if (event.keyCode === 51) {
        appendLetter('3', r3);
        white(51, r3);
    } 

    else if (event.keyCode === 52) {
        appendLetter('4', r4);
        white(52, r4);
    } 

    else if (event.keyCode === 53) {
        appendLetter('5', r5);
        white(53, r5);
    } 

    else if (event.keyCode === 54) {
        appendLetter('6', r6);
        white(54, r6);
    } 

    else if (event.keyCode === 55) {
        appendLetter('7', r7);
        white(55, r7);
    }

    else if (event.keyCode === 56) {
        appendLetter('8', r8);
        white(56, r8);
    }

    else if (event.keyCode === 192) {
        appendLetter(' ` ', r);
        white(192, r);
    }
    console.log(event);
    // console.log(allTheText.innerText);
    // console.log(i);
    if (i == 114) {
        allTheText.insertAdjacentHTML('beforeend', '<br>');
        i = 0;
    }

})

function white (key, sel) {
window.addEventListener('keyup', function () {
    if (event.keyCode === key)
        sel.style.backgroundColor = 'white';
        sel.style.color = 'black';
})
}