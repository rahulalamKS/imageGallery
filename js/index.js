window.onload = function () {
    document.querySelectorAll(".galler_image_container .galler_image").forEach(function (gallery) {
        gallery.onclick = function () {
            imageLoader.classList.remove("removeLoader");
            setTimeout(function () {
                if (!image.complete) {
                    imageLoader.classList.add("removeLoader");
                }
            }, 1000)
            window.scrollTo({
                top: 0 + 100,
                behavior : "smooth"
            })
            // window.scrollTo(0,document.body.scrollHeight);
            const attr = this.getAttribute("data-src");
            console.log(attr);
            const imagHold = document.querySelector(".image_holder");
            imagHold.src = attr;
            var activeClass = document.querySelector(".active");
            if (activeClass) {
                activeClass.classList.remove("active");
            }
            this.classList.add("active");
        }
    })

}


const imageLoader = document.querySelector(".image_loader")
const image = document.querySelector(".image_holder").src;
setTimeout(function () {
    if (!image.complete) {
        imageLoader.classList.add("removeLoader");
    }
}, 1000)