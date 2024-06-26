/* Var Declarations */

const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

const linkForm = document.getElementById('link-form');
const errMsg = document.getElementById('err-msg');
const linkInput = document.getElementById('link-input');


btn.addEventListener('click', navToggle);
linkForm.addEventListener('submit', formSubmit);

/* Functions */

//Mobile Menu Toggle
function navToggle()
{
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
}


//URL Validations
function validURL(str){
    var pattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
            '((\\d{1,3}\\.){3}\\d{1,3}))' +
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
            '(\\?[;&a-z\\d%_.~+=-]*)?' +
            '(\\#[-a-z\\d_]*)?$',
        'i'
    )
    return !!pattern.test(str);
}

function formSubmit(e)
{
    e.preventDefault();
    console.log("I want to kill myself");
    console.log(linkInput.value);

    if (linkInput.value === '')
    {
        errMsg.innerHTML = "Please enter a valid link.";
        linkInput.classList.add('border-red');
    }
    else if (!validURL(linkInput.value))
    {
        errMsg.innerHTML = "Please enter a valid URL.";
        linkInput.classList.add('border-red');
    }
    else{
        errMsg.innerHTML = '';
        linkInput.classList.remove('border-red');
        alert("Success");
    }
}