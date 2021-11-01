const signUpForm = document.querySelector('#signup-form');

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstname = signUpForm['firstname'].value;
    const lastname = signUpForm['lastname'].value;
    const email = signUpForm['signup-email'].value;
    const password = signUpForm['signup-password'].value;

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred);
        alert("Welcome!")
    })

})

const signInForm = document.querySelector('#signin-form');

signInForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signInForm['signin-email'].value;
    const password = signInForm['signin-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred);
        alert("Welcome!")
    })

})


