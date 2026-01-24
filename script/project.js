const projectList = [
    {
        id: 1,
        number: "01",
        title: "Movie Flex",
        description: "Java Full Stack Developer skilled in Java, Spring Boot, React, and building responsive, user-friendly web applications.",
        techStack: ["HTML","CSS"],
        image: "movie.jpg",
        liveLink: "#",
        githubLink: "#",

    },

    {
        id: 2,
        number: "02",
        title: "Currency Converter",
        description: "A simple currency converter application that allows users to convert amounts between different currencies using real-time exchange rates with a clean and user-friendly interface.",
        techStack: ["HTML","CSS", "javascript"],
        image: "images.png",
        liveLink: "#",
        githubLink: "#",

    },

    {
        id: 3,
        number: "03",
        title: "My Portfolio",
        description: "A simple currency converter application that allows users to convert amounts between different currencies using real-time exchange rates with a clean and user-friendly interface.",
        techStack: ["HTML","CSS", "javascript"],
        image: "Portfolio.png",
        liveLink: "#",
        githubLink: "#",

    },
     {
        id: 4,
        number: "04",
        title: "Weather App",
        description: "A simple currency converter application that allows users to convert amounts between different currencies using real-time exchange rates with a clean and user-friendly interface.",
        techStack: ["HTML","CSS", "javascript"],
        image: "",
        liveLink: "#",
        githubLink: "#",

    }
];
const projects = document.querySelector(".projects");
let currentIndex = 0;

const renderProject = (index) =>{
    const projectContent = projectList[index];

    const previousDisabled = currentIndex === 0;
    const nextDisabled = currentIndex === projectList.length - 1;

    projects.innerHTML = `
     <div class="project-info">
                <h3>${projectContent?.number}</h3>
                <h4>${projectContent?.title}</h4>
                <p>${projectContent?.description}</p>
                <div class="tech-stack">
                    ${projectContent?.techStack?.map((tech, i) => {
                        return `
                        <span key=${i}>${tech}</span>
                        `;
                    }).join(",")}
                </div>
                <hr/>
                <div class="links">
                    <a href=${projectContent?.liveLink}>
                       <i class="ph ph-arrow-right"></i>
                    </a>
                    <a href=${projectContent?.githubLink}>
                        <i class="ph ph-github-logo"></i>
                    </a>
                </div>
            </div>


            <div class="carousel">
                <img src=${projectContent.image} alt=${projectContent.title}/>

                <div class="arrows">
                    <a href="#" id="previous" class=${previousDisabled?"disabled-btn":""}>
                    <i class="ph ph-caret-left"></i>
                        </a>

                        <a href="#"  id="next" class=${nextDisabled?"disabled-btn":""}>
                   <i class="ph ph-caret-right"></i>
                        </a>
                </div>
            </div>
    `;

    document.getElementById("previous").addEventListener("click", (e) => {
        e.preventDefault();
        if(currentIndex > 0){
            currentIndex--;
            renderProject(currentIndex);
        }
    });

    document.getElementById("next").addEventListener("click", (e) => {
        e.preventDefault();
        if(currentIndex < projectList.length -1){
            currentIndex++;
            renderProject(currentIndex);
        }
    });
};

renderProject(currentIndex);