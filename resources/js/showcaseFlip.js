//gets the correct transition end name for the current browser
function getTransitionEndEventName() {
    var transitions = {
        "transition"      : "transitionend",
        "OTransition"     : "oTransitionEnd",
        "MozTransition"   : "transitionend",
        "WebkitTransition": "webkitTransitionEnd"
     }
    let bodyStyle = document.body.style;
    for(let transition in transitions) {
        if(bodyStyle[transition] != undefined) {
            return transitions[transition];
        } 
    }
}
let transitionEndEventName = getTransitionEndEventName();

//start of showcase functionality; this causes the images to look like they flip to reveal text when clicked
const showcaseImgs = document.querySelectorAll('.siteImg');
const showcaseTxt = document.querySelectorAll('.siteText');

showcaseImgs.forEach(img => {
    img.addEventListener('click', () => {
        const text = document.querySelector(img.dataset.textTarget)
        openTxt(text, img);
    })
})

showcaseTxt.forEach(text => {
    text.addEventListener('click', () => {
        const img = document.querySelector(text.dataset.imgTarget)
        closeTxt(text, img);
    })
})

function openTxt(text, img)
{
    if (text == null) return;
    img.classList.remove('active');
    img.addEventListener(transitionEndEventName, function imgLis(){
        text.classList.add('active');
        img.removeEventListener(transitionEndEventName,imgLis);
    });
}

function closeTxt(text, img)
{
    if (img == null) return;
    text.classList.remove('active');
    text.addEventListener(transitionEndEventName, function txtLis(){
        img.classList.add('active');
        text.removeEventListener(transitionEndEventName,txtLis);
    });
}