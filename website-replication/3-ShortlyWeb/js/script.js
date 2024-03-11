const linkInput = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errMsg = document.getElementById('err-msg');

linkForm.addEventListener('submit', formSubmit);


function validURL(str)
{
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
    else if (!validURL)
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