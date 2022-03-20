

const numbers = document.querySelectorAll('.numbers div')
console.log(numbers)

gsap.set('.first',{transformOrigin:"50%"})
gsap.set('.second',{transformOrigin:"50%"})

numbers.forEach((number,index)=>{
  number.addEventListener('click',()=>{
    let tl1 = gsap.timeline()
      .to('svg .second',{x:118*index, ease:  Power4. easeOut})
      .to('svg .second',{scaleY:.5,ease:  Power4. easeOut},'<')
      .to('svg .second',{scaleY:1,ease:  Power4. easeOut},'-=.3')

      let tl2 = gsap.timeline()
      .to('svg .first',{x:118*index,ease:  Power4. easeOut})
      .to('svg .first',{scaleY:.5,ease:  Power4. easeOut},'<')
      .to('svg .first',{scaleY:1,ease:  Power4. easeOut},'-=.3')
  })

  
})