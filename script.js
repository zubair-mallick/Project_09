function getCurrentMediaQuery(px) {
    if (window.matchMedia(`(max-width: ${px}px)`).matches) {
        return true;
    } else {
        return false;
    }
}

function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}
locomotive()



function navAnimation(){
    var nav = document.querySelector(".nav-part2")
nav.addEventListener('mouseenter',function(){
    let tl = gsap.timeline()
    
    tl.to("#nav-bottom",{
        height:"20vw",
        duration:0.4
    })
    tl.to(".nav-part2 h5",{
        display:"block",
        duration:0.1
    })
    tl.to(".nav-part2 h5 span",{
        y:0,
        stagger:{
            amount:0.5
        }
    })
  
})
nav.addEventListener('mouseleave',function(){
    let tl = gsap.timeline()
    
    tl.to(".nav-part2 h5 span",{
        y:25,
        stagger:{
            amount:0.2
        }
    })
  
    tl.to(".nav-part2 h5",{
        display:"none",
        duration:0.1
    })
    
    tl.to("#nav-bottom",{
        height:"0vh",
        duration:0.5
    })
  
})

}


function page2Animation(){
    var rightElems = document.querySelectorAll("#right-elem")

rightElems.forEach(function(elem) {
    elem.addEventListener("mouseenter", function () {
         console.log(elem.getBoundingClientRect())
        gsap.to(elem.childNodes[3], {
          opacity:1,
            scale: 1
        })
    })
    elem.addEventListener("mousemove", function (dets) {

        gsap.to(elem.childNodes[3], {
            x: dets.x - elem.getBoundingClientRect().x - 90,
            y: dets.y - elem.getBoundingClientRect().y - 100
        })
    })

    elem.addEventListener("mouseleave", () => {
        gsap.to(elem.childNodes[3], {
            opacity:0,
              scale: 0
          })
    });
});
}

function page3Animation() {
    var page3Center = document.querySelector(".page3 .vedioIcon")
    var video = document.querySelector(".page3 video")

    page3Center.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })
    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
    })

}


page3Animation(); 
navAnimation();
page2Animation();

videoAnimation()
function videoAnimation() {
    
    var sections = document.querySelectorAll(".part2")
sections.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        elem.childNodes[3].style.opacity = 1
        elem.childNodes[3].play()
    })
    elem.addEventListener("mouseleave", function () {
        elem.childNodes[3].style.opacity = 0
        elem.childNodes[3].load()
    })
})


var sections1 = document.querySelectorAll(".right-first .part3")
sections1.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        elem.childNodes[3].style.opacity = 1
        elem.childNodes[3].play()
    })
    elem.addEventListener("mouseleave", function () {
        elem.childNodes[3].style.opacity = 0
        elem.childNodes[3].load()
    })
})


}

function lastAnimation(){
    gsap.to("#btm6-parts h4 ",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:"#btm6-parts",
            scroller:".main",
            // markers:true,
            scrub:true,
            start:"top 55%",
            end:"top 8%,",
            
        }
    })
}
lastAnimation();


// function loaderAnimation(){

// }
// loaderAnimation();

var tl = gsap.timeline()
    tl.from(".page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from(".page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from(".page1 h1, .page1 p, .page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })

