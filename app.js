const wrapper = document.querySelector(".silderwrapper");
const menuItem = document.querySelectorAll(".menuItem");

menuItem.forEach((item, index) =>{
    item.addEventListener("click", () =>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    });
});
