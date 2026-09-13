document.addEventListener("DOMContentLoaded", function () {

    /* ================= MOBILE MENU ================= */

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", function () {

            navLinks.classList.toggle("active");

        });

    }


    /* ================= CLOSE MENU ================= */

    const navItems = document.querySelectorAll(".nav-links a");

    navItems.forEach(function (item) {

        item.addEventListener("click", function () {

            if (navLinks) {
                navLinks.classList.remove("active");
            }

        });

    });


    /* ================= GALLERY IMAGE ================= */

    const galleryImages =
        document.querySelectorAll(".gallery-item img");


    galleryImages.forEach(function (image) {

        image.addEventListener("click", function () {

            const imageWindow =
                window.open("", "_blank");


            if (imageWindow) {

                imageWindow.document.write(`

                    <!DOCTYPE html>

                    <html>

                    <head>

                        <title>
                            Advance Physio & Chiro Center
                        </title>

                        <style>

                            * {
                                box-sizing: border-box;
                            }

                            body {

                                margin: 0;

                                background: #101f38;

                                display: flex;

                                align-items: center;

                                justify-content: center;

                                min-height: 100vh;

                                padding: 20px;

                            }

                            img {

                                max-width: 95%;

                                max-height: 95vh;

                                object-fit: contain;

                                border-radius: 10px;

                                box-shadow:
                                0 10px 40px
                                rgba(0,0,0,0.5);

                            }

                        </style>

                    </head>

                    <body>

                        <img src="${image.src}"
                             alt="Gallery Image">

                    </body>

                    </html>

                `);

                imageWindow.document.close();

            }

        });

    });


    /* ================= SCROLL ANIMATION ================= */

    const cards = document.querySelectorAll(
        ".service-card, .therapy-card, .review-card, .why-card"
    );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(

                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("show");

                            observer.unobserve(entry.target);

                        }

                    });

                },

                {
                    threshold: 0.15
                }

            );


        cards.forEach(function (card) {

            card.classList.add("animate-card");

            observer.observe(card);

        });

    } else {

        cards.forEach(function (card) {

            card.classList.add("show");

        });

    }


    /* ================= PHONE LINKS ================= */

    const phoneLinks =
        document.querySelectorAll('a[href^="tel:"]');


    phoneLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            console.log(
                "Calling Advance Physio & Chiro Center"
            );

        });

    });


    /* ================= COPYRIGHT ================= */

    const copyright =
        document.querySelector(".copyright");


    if (copyright) {

        const currentYear =
            new Date().getFullYear();

        copyright.innerHTML =
            `© ${currentYear} Advance Physio & Chiro Center. All Rights Reserved.`;

    }


    /* ================= IMAGE ERROR CHECK ================= */

    const allImages =
        document.querySelectorAll("img");


    allImages.forEach(function (image) {

        image.addEventListener("error", function () {

            console.error(
                "Image not found:",
                image.getAttribute("src")
            );

        });

    });


    console.log(
        "Advance Physio & Chiro Center website loaded successfully."
    );

});