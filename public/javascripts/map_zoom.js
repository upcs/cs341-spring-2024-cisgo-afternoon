var lastClicked = "none";
document.querySelectorAll(".allPaths").forEach(e=>{
    
    var country = document.getElementsByName(e.getAttribute('name'));

    e.addEventListener("click", function(){
        window.onclick=function(){

            // resets country
            document.getElementsByName(lastClicked).forEach(function(item){
                item.removeAttribute("style");
                e.addEventListener("mousemove", hovering);
                e.addEventListener("mouseout", out);
                console.log(lastClicked);
                console.log(e.getAttribute('name'));
            })

            // checks if user clicked country twice in a row. if so, shrinks country
            if(lastClicked.localeCompare(e.getAttribute('name')) != 0){
                lastClicked = e.getAttribute('name');
                // loops thru each area in a country (including islands)
                country.forEach(function(item){
                // calculates country position
                    var bbox = item.getBBox();
                    var centreX = bbox.x + bbox.width/2;
                    var centreY = bbox.y + bbox.height/2;

                    // sets origin to each country
                    item.style.transformOrigin = centreX + 'px ' + centreY + 'px';
                    // scales position
                    item.style.transform = "translate(50%, -50%)";
                    item.style.transform = `scale(2)`;
                    item.style.stroke = "white";
                    item.removeEventListener("mouseover", hovering);
                    item.removeEventListener("mouseout", out);
                    
                    console.log(country);
                })
            }
        }
    })

    // function to detect if a user is hovering over a country
    function hovering(){
        // changes country color if hovering
        country.forEach(function(item){
            item.style.fill = "rgb(34, 59, 5)";
            item.style.cursor = "pointer";
            item.style.transition = "0.2s";
        })
    }
    // event listeners for hovering over countries
    e.addEventListener("mouseover", hovering);

    // resets country color after no longer hovering
    function out(){
        country.forEach(function(item){
            item.style.fill = "rgb(56, 78, 29)";
            item.style.stroke = "rgb(34, 59, 5)"
            item.style.strokeWidth = "1";
            item.style.cursor = "auto";
            item.style.transition = "0.2s";
        })
    }

    // event listener when user stops hovering over a country
    e.addEventListener("mouseout", out);

})