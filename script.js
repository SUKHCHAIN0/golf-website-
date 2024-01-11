var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    // console.log(dets.y)
    crsr.style.left=dets.x+30+"px"
    crsr.style.top=dets.y+"px"
    blur.style.left=dets.x-85+"px"
    blur.style.top=dets.y-85+"px"
    
})
var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=2
        crsr.style.border="0.7px solid #fff"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid #95c11e"
        crsr.style.backgroundColor="#95c11e"
    })
})      
gsap.to("#nav",{
    backgroundColor:"#000",
    duration: 0.5,
    height:"100px",
    scrollTrigger:{
        trigger:"nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end :"top -11%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        marker:"true",
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#aboutus img ,#aboutusin",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        // margin:true,
        start:"top 60%",
        end:"top 58%",
        scrub:3
        }
})
gsap.from(".card ",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // margin:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
        }
})
gsap.from("#col1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#col1",
        scroller:"body",
        marker:true,
        start:"top 60%",
        end:"top 44%",
        scrub:4
    }
})
gsap.from("#col2",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#col2",
        scroller:"body",
        marker:true,
        start:"top 60%",
        end:"top 44%",
        scrub:4
    }
})
gsap.from("#page4 h1",{
y:50,
scrollTrigger:{
    trigger:"page4 h1",
    scroller:"body",
    // marker:true,
    start:"top 75%",
    end:"top 70%",
    scrub:4
}
})