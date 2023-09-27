



const checkSwitch = document.getElementById("flexSwitchCheckDefault");
const configUser = window.matchMedia(`(prefers-color-scheme: dark)`);

//Agrega un evento click al boton chackSwitch
checkSwitch.addEventListener(`click`, () => {
       
    if (configUser.matches===false) {
        
        document.body.classList.toggle('dark-theme')
       } else{
        document.body.classList.toggle('light-theme')

       }
  });



/*fetch('https://api.npoint.io/103b89cbfa324e55fd14')
  .then(response => response.json()) // Parsear respuesta JSON
  .then(data => {
    // Trabajar con los datos aquí
  })
  .catch(error => {
    // Manejar errores aquí
  });*/