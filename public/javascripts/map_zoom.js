document.querySelectorAll(".allPaths").forEach(e=>{
    e.addEventListener("click", function(){
        window.onclick=function(dest){
            x=dest.clientX;
            y=dest.clientY;
            let countryName = e.id;
            console.log(countryName);
        }
    })
})