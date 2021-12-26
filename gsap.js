gsap.registerPlugin(ScrollTrigger);

gsap.to(".Inicio", { y: 0, opacity: 1, duration: 1 });

gsap.to(".Acerca", {
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".Acerca",
    start: "top-=15% center", // start when top of trigger target hits 50% point of viewport
    toggleActions: "play play none none",
    end: "bottom center",
    markers: false,
  },
});

gsap.to(".Servicios-text", {
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".Servicios",
    start: "top-=30% center", // start when top of trigger target hits 50% point of viewport
    toggleActions: "play play none reverse",
    end: "bottom center",
    markers: false,
  },
});

let fadeincard = gsap.utils.toArray(".card");
fadeincard.forEach((item, index) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top-=50% 50%", // start when top of trigger target hits 50% point of viewport
      toggleActions: "play play none reverse",
      end: "bottom center",
      markers: false,
    },
  });
  tl.to(item, {
    opacity: 1,
    x: 0,
    duration: 0.1 * index + 0.2,
    ease: Expo.easeOut,
  });
});

let fadeinproducto = gsap.utils.toArray(".producto");
fadeinproducto.forEach((item, index) => {
  let t2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".Productos",
      start: "top+=17% 50%", // start when top of trigger target hits 50% point of viewport
      toggleActions: "play play none reverse",
      end: "bottom center",
      markers: false,
    },
  });
  t2.to(item, {
    opacity: 0.85,
    duration: 0.1 * index + 0.2,
    ease: Expo.easeOut,
  });
});

let fadeingaleria = gsap.utils.toArray("#galeria-img");

fadeingaleria.forEach((item, index) => {
  let t3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".Galeria",
      start: "top 50%", // start when top of trigger target hits 50% point of viewport
      toggleActions: "play play none reverse",
      end: "bottom center",
      markers: false,
    },
  });
  t3.to(item, {
    opacity: 1,
    duration: 0.1 * index + 0.2,
    ease: Expo.easeOut,
  });
});

/*
    gsap.to("#Inicio",{translateX:0,opacity:1, duration: 0.7, scrollTrigger: {
        scroller: '.container',
        trigger: ".panelProductos",
        start:"top+=15% 50%",  // start when top of trigger target hits 50% point of viewport
        toggleActions:"play play none reverse",
        end: "bottom center",
        markers:false}});*/
