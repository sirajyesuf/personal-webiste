const projects =[

{
    id:1,
    title:"peoplelocator",
    description:"as the name implies in this project we are try to re connect peoples that lost eath other",
    img:"5.png"

},
{
    id:2,
    title:"time count down bot",
    description:"bot that try to count down time ",
    img:"8.png"

},
{
    id:3,
    title:"pinup",
    description:"web platform that used to store notes in the cloud",
    img:"7.png"

},
{
    id:4,
    title:"attendance system",
    description:"used to take attendance in the class room",
    img:"6.png"

},
{
    id:5,
    title:"astu_delivery",
    description:"delivery system for astu community",
    img:"2.png"

},
{
    id:6,
    title:"astu news mobile app",
    description:"mobile based news system for astu community",
    img:"4.png"

}

]
prev()
function next(){
    var wrapper = document.getElementById("project-lists")
    wrapper.innerHTML = ""
    p=projects.slice(3,6)
    for(var i in p){
         
        
        var item =`
        <div class="individual-project pro1">
        <img src="../public/img/${p[i].img}" alt="image-name">
        <h3 class="title">${p[i].title}</h3>
        <p>${p[i].description}</p>
        </div>
        
        `

        wrapper.innerHTML+=item

    }


}

function prev(){
    console.log(projects.slice(0,3))
    var wrapper = document.getElementById("project-lists")
    wrapper.innerHTML = ""
    p=projects.slice(0,3)
    for(var i in p ){
         
        
        var item =`
        <div class="individual-project pro1">
        <img src="../public/img/${p[i].img}" alt="image-name">
        <h3 class="title">${p[i].title}</h3>
        <p>${p[i].description}</p>
        </div>
        
        `

        wrapper.innerHTML+=item

    }


}


function redirect()
{
    window.location.href = "mailto:mail@example.org";
}