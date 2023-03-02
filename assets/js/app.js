let items = document.querySelectorAll(".item");

window.onscroll = function () {
    items.forEach((item) => {
        if (isInViewport(item)) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
};
// Kiểm tra phần tử có nằm trong viewport không
function isInViewport(element) {
    let rect = element.getBoundingClientRect();
    if (rect.top >= -230 && rect.top <= window.innerHeight - element.clientHeight / 6) {
        return true;
    }
    if (rect.bottom <= 0) {
        return true;
    }
    if (rect.top >= window.innerHeight - element.clientHeight) {
        return false;
    }
}

// window.onscroll = function () {
//     let rect = items[5].getBoundingClientRect();
//     if (rect.top >= -230 && rect.top <= window.innerHeight - items[5].clientHeight / 2) {
//         console.log(items[5]);
//         // return true;
//     }
//     if (rect.top > 726 && rect.top >= window.innerHeight - items[5].clientHeight / 2) {
//         console.log("ok");
//     }
//     // return (
//     //     rect.top >= 0 >= 474
//     //     rect.bottom
//     // )
//     console.log("-----------");
//     console.log(rect.top);
//     console.log(rect.bottom);
//     // console.log(rect.left);
//     // console.log(rect.right);
//     console.log();
//     console.log(window.innerHeight);
//     console.log(document.documentElement.clientHeight);
//     // console.log();
//     // console.log(document.documentElement.clientWidth);
// };
