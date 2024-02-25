/* references: https://www.youtube.com/watch?v=C9EWifQ5xqA, https://css-tricks.com/creating-a-panning-effect-for-svg/ */

document.addEventListener('DOMContentLoaded', function(){
    const map = document.getElementById('world_map');

    // var to tell if the user is holding down on the mouse or not
    var pointerDown = false;

    // original coordinates when the user presses down on their mouse
    var pointerOrigin ={
        x: 0,
        y: 0
    };

    // original values
    var viewBox ={
        x: 0,
        y: 0,
        width: map.getBoundingClientRect().width,
        height: map.getBoundingClientRect().height
    };

    // calcuation of the distances from the pointer
    var newViewBox ={
        x: 0,
        y: 0,
    };

    // returns obj with x and y values from click
    function getPoint(e){
        var point ={
            x:0,
            y:0
        };
        // checks if event is triggered by click--gets position of first click
        if(e.targetTouches){
            point.x = e.targetTouches[0].clientX;
            point.y = e.targetTouches[0].clientY;
        }
        else{
            point.x = e.clientX;
            point.y = e.clientY;
        }
        return point;
    }

    // checks if the user is grabbing the screen
    map.addEventListener('mousedown', (e) =>{
        map.style.cursor = 'grabbing';
        pointerDown = true;

        // gets the position of the click
        var position = getPoint(e);
        pointerOrigin.x = position.x;
        pointerOrigin.y = position.y;
    });

    // checks if the mouse is being moved while user is grabbing the screen
    map.addEventListener('mousemove', (e) =>{
        // returns if the user is not pressing down on their mouse
        if (!pointerDown){
            return;
        }
        e.preventDefault; //prevents user from selecting something on the page

        // calculates and saves new position
        var position = getPoint(e);
        newViewBox.x = viewBox.x - ((position.x - pointerOrigin.x) * 0.8);
        newViewBox.y = viewBox.y - ((position.y - pointerOrigin.y) * 0.8);

        // Creating a string to apply the new values onto the SVG
        var viewBoxString = `${newViewBox.x} ${newViewBox.y} ${viewBox.width} ${viewBox.height}`;
        map.setAttribute('viewBox', viewBoxString);
    });

    // checks if the user released mouse click
    map.addEventListener('mouseup', (e) =>{
        pointerDown = false;
        map.style.cursor = 'grab';

        viewBox.x = newViewBox.x;
        viewBox.y = newViewBox.y;
    });

    // checks if the mouse is within the map
    map.addEventListener('mouseleave', (e) =>{
        pointerDown = false;
        map.style.cursor = 'grab';

        viewBox.x = newViewBox.x;
        viewBox.y = newViewBox.y;
    });
});