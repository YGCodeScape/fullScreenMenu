document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create(
        "hop",
        "M0, 0 C0.334, 0 0.464, 0.133 0.498, 0.502 0.532, 0.872 0.651, 1 1,1"
    );
})

