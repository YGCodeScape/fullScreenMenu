document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(CustomEase);
    
    CustomEase.create(
        "hop",
        "M0, 0 C0.334, 0 0.464, 0.133 0.498, 0.502 0.532, 0.872 0.651, 1 1,1"
    );

    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const links = document.querySelectorAll(".link");
    const socialLinks = document.querySelectorAll(".socials p");
    const videoWrapper = document.querySelector(".video-wrapper");

    let isOpen = false;

    // Split Text
    const splitTextIntoSpan = (selector) => {
        let elements = document.querySelectorAll(selector);
        elements.forEach((el) => {
            let chars = el.innerText.split("").map(c => 
                `<span>${c === " " ? "&nbsp;&nbsp;" : c}</span>`
            );
            el.innerHTML = chars.join("");
        });
    };
    splitTextIntoSpan(".header h1");

    // TIMELINE 
    const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "power3.out" }
    });

    tl.set(menu, { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" })

    // OPEN ANIMATION
    tl.to(menu, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "hop",
        duration: 1.4
    })

    .to(links, {
        y: 0,
        opacity: 1,
        stagger: 0.1
    }, "-=0.6")

    .to(socialLinks, {
        y: 0,
        opacity: 1,
        stagger: 0.05
    }, "-=1.1")

    .to(videoWrapper, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "hop",
        duration: 1.2
    }, "-=1")

    .fromTo(".header h1 span", {
        rotateY: 180,
        y: 500,
        scale: 0.75,
        stagger: 0.05,
        duration: 1.5,
        delay: 0.5,
    }, {
        rotateY: 0,
        y: 0,
        scale: 1, 
        duration: 1,
        delay: 0.75,
        ease: "power4.out"
    },"-=0.8");


    // Toggle
    menuToggle.addEventListener("click", () => {
        if (!isOpen) {
            menuToggle.classList.add("closed");
            tl.play();
        } else {
            menuToggle.classList.remove("closed");
            tl.reverse();
        }

        isOpen = !isOpen;
    });
});
