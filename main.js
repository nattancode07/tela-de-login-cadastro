function main() {
    
const img = document.querySelector('.svg');
const sign_in = document.querySelector('.Sign-in-button-title');
const sign_up = document.querySelector('.Sign-up-button-title');

document.addEventListener('click', function(e) {
    const el = e.target

    //Ao clicar em Sign-In

    if(el.classList.contains('Sign-in-button-title') || el.classList.contains('sign-in-button')) {

        sign_in.style.color = 'white';
        sign_in.style.borderBottom = '1px solid #7d83ff';
        sign_up.style.color = 'rgba(255, 255, 255, 0.418)'
        sign_up.style.borderBottom = 'none'
        img.setAttribute('src', 'imagens/Mobile-login-sign-in.gif');
    } 
    
    //Ao clicar em Sign-Up

    else if (el.classList.contains('Sign-up-button-title') || el.classList.contains('sign-up-button')) {

        img.setAttribute('src', 'imagens/Mobile login-2.gif');

        sign_up.style.color = 'white';
        sign_up.style.borderBottom = '1px solid #7d83ff';
        sign_in.style.color = 'rgba(255, 255, 255, 0.418)';
        sign_in.style.borderBottom = 'none'

    }
})

} main();

