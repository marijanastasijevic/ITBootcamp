let generateImg = (src) => {
    let img = document.createElement('img');
    img.src = src;
    img.alt = 'Image cannot be loaded';
    img.style.width = '300px'
    img.style.marginRight = '10px';
    

    return img;
}

export default generateImg; // kada se eksportuje samo jedna stvar moze da se koristi default i ne trebaju nam {}