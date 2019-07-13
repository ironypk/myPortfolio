const paralaxRock = document.querySelector('.paralax_rock_list');
const paralaxRockLayers = paralaxRock.children;

const paralaxMus = document.querySelector('.paralax_mus_list');
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
        layer.style.transform = `translateX(-${strafe}%)`;

    })

}

window.addEventListener('scroll', e=>{
    const wScroll = window.pageYOffset;
    let rockOffset= getOffsets('paralax_rock_list').bottom;
    if(rockOffset > 0){
        moveLayersDependsOnScroll(wScroll, paralaxRockLayers, 14);
    }
    
})


window.addEventListener('mousemove', e=>{
    const mScroll = e.clientX;
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
