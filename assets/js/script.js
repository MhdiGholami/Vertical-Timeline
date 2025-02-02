// vertical timeline


// Dom Selection
const $ = document
const bodyElem = $.querySelector('body')
let timelineEvent = $.querySelectorAll('.timeline-event')
let arr = []

for(i=0; i<timelineEvent.length; i++){
    arr.push(timelineEvent[i].offsetTop)
}

// function when page scroll
function scrollEvent(){
    // let heightNumber = Math.floor(window.scrollY)
    let _st = Math.floor($.getElementsByTagName('html')[0].scrollTop)
    console.log(_st);
    
    for(let i=0; i<timelineEvent.length; i++) {
        if(_st >= (arr[i])){
            $.querySelectorAll('.event-date')[i] .classList.add('active')
            $.querySelectorAll('.event-content')[i] .classList.add('active')
        }
        else{
            $.querySelectorAll('.event-date')[i] .classList.remove('active')
            $.querySelectorAll('.event-content')[i] .classList.remove('active')
        }
    }
}


// addEventListeners
window.addEventListener('scroll', scrollEvent)