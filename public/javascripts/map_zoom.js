document.querySelectorAll(".allPaths").forEach(e=>{
    
    var clicked = false; // var to tell if the user clicked on a specific country
    var country = document.getElementsByName(e.getAttribute('name'));

    e.addEventListener("click", function(){
        window.onclick=function(){
            clicked = true; // user clicked on a country

            // loops thru each area in a country (including islands)
            country.forEach(function(item, index){
                
                // calculates country position
                var bbox = item.getBBox();
                var centreX = bbox.x + bbox.width/2;
                var centreY = bbox.y + bbox.height/2;

                // sets origin to each country
                item.style.transformOrigin = centreX + 'px ' + centreY + 'px';
                // scales position
                item.style.transform = `scale(2)`;
                item.style.stroke = "white";
            })
        }
    })

})