// These images are pulled online. I would like to do offline photos, but 
// that wasn't working yet. Will have to do more research.

let backgrounds = [
    "https://images5.alphacoders.com/649/thumb-1920-649962.jpg",
    "https://img4.goodfon.com/wallpaper/nbig/2/53/man-rocks-mountain-climbing.jpg",
    "https://media.istockphoto.com/id/1292835291/photo/epic-adventurous-extreme-sport-composite-of-rock-climbing-man-rappelling-from-a-cliff.jpg?b=1&s=170667a&w=0&k=20&c=xfItRkRd_Mm4HbY2ZoMXRybmdqTSrHCDsHvzO-51FVI="
];

const randomImg = Math.floor(Math.random() * backgrounds.length);
document.body.style.backgroundImage = 'url('+ backgrounds[randomImg] +')';

// This will make it so if the picture doesn't fit on the screen it won't 
// simply repeat the image again.
document.body.style.backgroundRepeat = "no-repeat";

// This will make the image used fit the whole screen instead of displaying
// it's original size.
document.body.style.backgroundSize = "cover"