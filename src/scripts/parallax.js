<<<<<<< HEAD
const paralaxRock = document.querySelector('.paralax_rock');
const paralaxRockLayers = paralaxRock.children;

const paralaxMus = document.querySelector('.paralax_mus');
=======
const paralaxRock = document.querySelector('.paralax_rock_list');
const paralaxRockLayers = paralaxRock.children;

const paralaxMus = document.querySelector('.paralax_mus_list');
>>>>>>> 6b02373b03ee75a070f382bb4eaacd42f109beab
const paralaxMusLayers = paralaxMus.children;




function moveLayersDependsOnScroll(scroll, layers, speed){
    Array.from(layers).forEach(layer =>{

        const divider = layer.dataset.speed;
        const strafe = scroll * divider / speed;

        layer.style.transform = `translateY(-${strafe}%)`;
    })

}

function moveLayersDependsOnMove(scroll, layers, speed){
    Array.from(layers).forEach(layer =>{

        const divider = layer.dataset.speed;
        const strafe = scroll * divider / speed;
<<<<<<< HEAD

        layer.style.transform = `translateX(-${strafe}%)`;
=======
        layer.style.transform = `translateX(-${strafe}%)`;

>>>>>>> 6b02373b03ee75a070f382bb4eaacd42f109beab
    })

}

window.addEventListener('scroll', e=>{
    const wScroll = window.pageYOffset;
<<<<<<< HEAD
    moveLayersDependsOnScroll(wScroll, paralaxRockLayers, 14);
=======
    let rockOffset= getOffsets('paralax_rock_list').bottom;
    if(rockOffset > 0){
        moveLayersDependsOnScroll(wScroll, paralaxRockLayers, 14);
    }
    
>>>>>>> 6b02373b03ee75a070f382bb4eaacd42f109beab
})


window.addEventListener('mousemove', e=>{
    const mScroll = e.clientX;
<<<<<<< HEAD
    moveLayersDependsOnMove(mScroll, paralaxMusLayers, 20);
})
=======
    let musOffset = getOffsets('paralax_mus_list').top;
    if(musOffset < 0){
        moveLayersDependsOnMove(mScroll, paralaxMusLayers, 20);
    }
    
})


function getOffsets(block){
    let element = document.querySelector('.'+block),
    rect = element.getBoundingClientRect();
    return rect;
}
>>>>>>> 6b02373b03ee75a070f382bb4eaacd42f109beab
