console.log("Script loaded");

let currentTheme=getTheme();

document.addEventListener('DOMContentLoaded', ()=> {
   changeTheme(); 
  
  });

function changeTheme(){

    //set to web page
    changePageTheme(currentTheme,currentTheme);
    //set the listener to change theme button
    const changeThemeButton=document.querySelector('#theme_change_button');

    const oldTheme=currentTheme;

    changeThemeButton.addEventListener('click',(event)=>{
        const oldTheme=currentTheme;
        console.log("change theme button clicked");
        
        if(currentTheme=="dark"){
          currentTheme="light";

        }else{
            // theme to dark
           currentTheme="dark";
        }
        changePageTheme(currentTheme,oldTheme);
        
    });
}


// set theme to localstorge
function setTheme(theme) {
    localStorage.setItem("theme",theme);
}

// get theme from localstorage
function getTheme() {
    return localStorage.getItem("theme") ?? "light";
}
// change current page theme
function changePageTheme(theme,oldTheme){
    // localStorage update
    setTheme(currentTheme);
    //remove the current theme
    document.querySelector('html').classList.remove(oldTheme);
    //set the current theme
    document.querySelector('html').classList.add(theme);

    //change the text of button
    document.querySelector('#theme_change_button').querySelector('span').textContent=theme=='light'?'Dark':"Light";

}




