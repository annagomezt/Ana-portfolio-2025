import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Credit Card Payment",
    year: "Nov2024",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "https://credit-card-payment-gateway.vercel.app",
  },
  {
    name: "Ecommerce Nike",
    year: "Dec2024",
    align: "left",
    image: "/images/website-img-2.webp",
    link: "https://ecommerce-nike-five.vercel.app",
  },
  {
    name: "Starbucks",
    year: "Jan2025",
    align: "right",
    image: "/images/website-img-3.jpg",
    link: "https://starbucks-project-psi.vercel.app",
  },
  {
    name: "Spotify",
    year: "Feb2025",
    align: "left",
    image: "/images/website-img-4.jpg",
    link: "https://deploy-jornada-full-stack.onrender.com/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
