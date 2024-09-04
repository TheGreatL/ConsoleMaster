export function clearMain(){
    const main = document.querySelector('main');
    main.innerHTML="";
}
export function toggleMenuButton(){
    const burgerButton = document.getElementById("burger");
         burgerButton.addEventListener("click", () => {
            const navigationLinks = document.getElementById('navigation-links');
            navigationLinks.classList.toggle('hidden');
       
    });
    }