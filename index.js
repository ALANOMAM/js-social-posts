 /*
Descrizione:
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
-id del post, numero progressivo da 1 a n
-nome autore,
-foto autore,
-data in formato americano (mm-gg-yyyy),
-testo del post,
-immagine (non tutti i post devono avere una immagine),
-numero di likes.

Non è necessario creare date casuali Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)

Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

BONUS
-Formattare le date in formato italiano (gg/mm/aaaa)
-Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
-Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
 */




const profili =[
{
id: 1,
nome: "Davide Marconi",
foto: "https://unsplash.it/300/300?image=",
data: "15/02/2024",
testo:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet totam sint maxime rerum adipisci eaque inventore ab quos quasi necessitatibus?",
immagine:"https://unsplash.it/300/300?image=",
likes: 70
},

{
    id: 2,
    nome: "Marco Mengoni",
    foto: "https://unsplash.it/300/300?image=",
    data: "14/01/2020",
    testo:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet totam sint maxime rerum adipisci eaque inventore ab quos quasi necessitatibus?",
    immagine:"https://unsplash.it/300/300?image=",
    likes: 700
    }

]

 //console.log(profili[0].testo)

 // creo una costante che contiene il mio mega contenitore che contiene i miei profili 
 let profilo = document.querySelector(".container")

 profili.forEach( (element) =>{

   //creo un nuovo div contenitore 
 const newpost = document.createElement("div")
 
 //inietto dentro il div appena creato questo pezzo di codice 
 newpost.innerHTML  = `
  <!--profile start-->
 <div class="profile p-3">
 
 <div class="img-name-date"> 
<img class="profile-image" src=${element.foto} alt="profile img">

<div class="name-date">
 <span> <strong>${element.nome}</strong></span>
 <span>${element.data}</span>
</div>
</div>

<p class="mt-3 mb-3">${element.testo}</p>

<img  class="big-img"  src=${element.immagine} alt="big img">

<div class="stats-btn d-flex justify-content-around mt-4 mb-4 ">
<button type="button" id="btn" data-postid="${element.id}" ><i class="fa-solid fa-thumbs-up"></i> Mi piace</button>

<div class="statistics">
   piace a <strong  id="like-counter-${element.id}"  >${element.likes}</strong> persone
</div>
</div>


 </div>  
<!--profile end-->

 `
 newpost.className = "post";

 //inietto dentro il mio mega contenitore salvato dentro la variabile "profilo" 
 //il div creato poco prima salvato dentro la variabile "newpost" che contiene un pezzo del mio codice
 //passaggio neccessario quando si crea un nuovo elemento.
 profilo.append(newpost)
 
 
 

 // collego il pulsante al numero di like in modo tale che cliccando me lo aumenta

let pulsanteEl = document.querySelector(`button[data-postid="${element.id}"]`)
 let numeroDiLikesEl = document.querySelector(`strong[id="like-counter-${element.id}"]`)
let numeroDiClicchi =[]
let idPostPiaciuti=[]

pulsanteEl.addEventListener("click",function(){

     numeroDiClicchi.push(element.id) 
    //console.log(numeroDiClicchi)


    if(!(idPostPiaciuti.includes(element.id))){


        idPostPiaciuti.push(element.id)
        console.log(idPostPiaciuti)
    }
  
   
    

if( /* !(numeroDiClicchi.includes(element.id)) ||*/ !(numeroDiClicchi.length % 2 == 0) ){
      

     //numeroDiClicchi.push(element.id) 
     //console.log(numeroDiClicchi)

    pulsanteEl.classList.add("on")
     
    
    numeroDiLikesEl.innerHTML = element.likes + 1
} else{
    pulsanteEl.classList.remove("on")
     
    numeroDiLikesEl.innerHTML = element.likes 
} 

}) 


})


 
