const sections = document.querySelectorAll("section");
//const navList = document.querySelectorAll("nav a");
const jumper = document.querySelector(".jumper");
//const github = document.querySelector(".github-icon");
//const linkedin = document.querySelector(".linkedin-icon");
const gradients = [
    "linear-gradient(to right top,  #022929, #69929e)",
    "linear-gradient(to right top,   #277c7c, #8aacb6)",
    "linear-gradient(to right top,  #054e4e, #7babb9)",
    "linear-gradient(to right top,  #167a7a, #5a8694)"
];

const options = {
    threshold: 0.5
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
    entries.forEach(entry => {
        const className = entry.target.className;
        console.log(className);
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute('data-index');
        const coords = activeAnchor.getBoundingClientRect();
        const direction = {
            height: coords.height,
            weidh: coords.weidh,
            top: coords.top,
            left: coords.left
        };
        activeAnchor.style.setProperty("color", "black");
        if(entry.isIntersecting){
            console.log(className);
            activeAnchor.style.setProperty("color", "#2693f8");
            activeAnchor.style.setProperty('transform', 'scale(2)');
            activeAnchor.style.setProperty('transition', 'all 0.1s ease');
        }
    }) 
}

sections.forEach(section =>{
    observer.observe(section);
});
