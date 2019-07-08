const paralaxRock = document.querySelector('.paralax_rock');
const paralaxRockLayers = paralaxRock.children;

const paralaxMus = document.querySelector('.paralax_mus');
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
    moveLayersDependsOnScroll(wScroll, paralaxRockLayers, 14);
})


window.addEventListener('mousemove', e=>{
    const mScroll = e.clientX;
    moveLayersDependsOnMove(mScroll, paralaxMusLayers, 20);
})