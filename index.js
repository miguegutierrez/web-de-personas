




const configUser  = window.matchMedia(`(prefers-color-scheme: dark)`);//configuracion tema claro/oscuro del sistema
const localConfig  = localStorage.getItem('tema'); //key localStorage para confiuraicon de tema
const themeSwitch = document.getElementById("themeSwitch");//invoca el  checkbox/switch

//cambia  la clase del body segun configuracion de tema claro/oscuro definido en el sistema Operativo
if (localConfig ==='dark'){
  document.body.classList.toggle('dark-theme')
}else if (localConfig ==='light'){
  document.body.classList.toggle('light-theme')
}


//Agrega un evento click al boton chackSwitch
themeSwitch.addEventListener(`click`, () => {
    let colorTheme ;
    
    if (configUser.matches===false) {
        
      colorTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark' //colorTheme será el value para el local storage 
       
      document.body.classList.toggle('dark-theme')
       
     } else {
         document.body.classList.toggle('light-theme')
        }
       localStorage.setItem('tema' , colorTheme)
  });
  

  async function fetchData(){
    try{ 
        const response = await fetch('http://localhost:3000/personas');
        const data = await response.json();
        
        console.log(response,data);
        
        //se manda al catch  el estado de respuesta (status)  y el mensaje dedicho error (statusText)
       if(!response.ok) throw{status:response.status, statusText:response.statusText}
        
        //creamos un "span" para cada elemento con la información correspondiente  de cada elemento 
        data.forEach((e) => {
          const $span = document.createElement("span");
          $span.innerHTML = 
            `
            <h3>${e.name}</h3><br>
            <p>Telefono: ${e.Phone}<p>
            <p>País: ${e.country}<p>
            `;

        
          
          listaDePersonas.appendChild($span);
        });

      }catch(error){
        //manejar error aqui
        console.log(error);
        let message = error.statusText = "ocurrió un error con la respuesta: prueba json-server -w db.json en la terminal";
        listaDePersonas.innerHTML = `Error ${error.status}:<br> ${message}`;
      }
      
    }
        // buscdor/filtro  en tiempo real
        //agregamos  evento k
    document.addEventListener("keyup", e =>{
      if (e.target.matches("#searchPerson")){
         
        if(e.key==="Escape")e.target.value = ""

        document.querySelectorAll("span").forEach(persona => {
          persona.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
          ?persona.classList.remove("filtro")
          :persona.classList.add("filtro")
        })
      }
    })
    
    fetchData();
    
   