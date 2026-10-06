```javascript
/* =========================================================
   YOGESH KUMAR PORTFOLIO
   JAVASCRIPT
   ========================================================= */


/* =========================
   PAGE LOADED
   ========================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Yogesh Kumar Portfolio Loaded Successfully");


    /* =========================
       SMOOTH NAVIGATION
       ========================= */

    const navigationLinks =
        document.querySelectorAll(".navbar a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                targetId &&
                targetId.startsWith("#")
            ) {

                const targetSection =
                    document.querySelector(targetId);

                if (targetSection) {

                    event.preventDefault();

                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });


    /* =========================
       BUTTON SMOOTH SCROLL
       ========================= */

    const scrollButtons =
        document.querySelectorAll('a[href^="#"]');

    scrollButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                targetId &&
                targetId !== "#"
            ) {

                const target =
                    document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });


    /* =========================
       FOOTER YEAR
       ========================= */

    const currentYear =
        new Date().getFullYear();

    const copyright =
        document.querySelector(".copyright");

    if (copyright) {

        copyright.textContent =
            "© " +
            currentYear +
            " Yogesh Kumar. All Rights Reserved.";

    }


    /* =========================
       SCROLL REVEAL
       ========================= */

    const animatedElements =
        document.querySelectorAll(
            ".skill-card, " +
            ".project-card, " +
            ".experience-card, " +
            ".education-card, " +
            ".stat-card, " +
            ".contact-card"
        );


    const revealObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.10
            }
        );


    animatedElements.forEach(function (element) {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });


});
```
