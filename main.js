const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

/* this continues calling the blurring function every 10ms */
let int = setInterval(blurring, 10);

/* This function gets continually called by the setInterval above. Load, which starts at 0 keeps increasing by 1 for every call, then it stops when the number is greater than 99 */
function blurring() {
    load++;

    if(load > 99) {
        clearInterval(int)
    }

    /* makes the loadtext count upwards */
    loadText.innerText = `${load}%`;

    /* mapping the load interval to opacity. When load goes from 0 to 100 we want the opacity to go from 1 to 0 so that the load text disappears at 100% */
    loadText.style.opacity = scale(load, 0, 100, 1, 0);

    /* we do the same kind of mapping but with the blur effect for the image so that the blur goes from 30 to 0 effectively revealing it when load hits 100% */
    bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`
}


// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}