import styles from './Projects.module.css';
import pharma_project from "../../assets/img/pharma.png";
import nexcent_project from "../../assets/img/nexcent.png";
import tech_project from "../../assets/img/tech.jpg";
import webflow_tech_project from "../../assets/img/webflow_tech.png";

import pdr_project from "../../assets/img/pdr.jpg";
import { useTranslation } from 'react-i18next';
import { IProjectItem } from '../../typescript/interfaces';
import ListProjects from '../../layouts/ListProjects/ListProjects';
import ChangerTypeProjects from '../../components/ChangerTypeProjects/ChangerTypeProjects';
import { useState } from 'react';
import { IProjectType } from '../../typescript/types';

const projects: IProjectItem[] = [
    {
        title: {
            rendered: "Correcting the layout and writing of the calculator",
        },
        content: {
            rendered: "In a couple of days, I wrote a calculator that calculates the price of repairs on the invoice."
        },
        date: "2-07-2024",
        image: pdr_project,
        url: "https://pdrpatrol.ca/",
        type: "Business card website",
    },
    {
        title: {
            rendered: "Pharma",
        },
        content: {
            rendered: "Developed a website using my Gulp assembly based on a ready-made layout in Figma."
        },
        date: "18-05-2024",
        image: pharma_project,
        url: "https://kostiasav.github.io/pharma/",
        type: "Business card website",
    },
    {
        title: {
            rendered: "Nexcent",
        },
        content: {
            rendered: "I created a website based on an existing design in Figma. The entire project was completed in just two days. The site is fully responsive, ensuring optimal functionality on mobile devices."
        },
        date: "18-05-2024",
        image: nexcent_project,
        url: "https://kostiasav.github.io/nexcent-app/",
        type: "Landing Page"
    },
    {
        title: {
            rendered: "TechCues",
        },
        content: {
            rendered: "Built using a Figma design, on React, and fully responsive."
        },
        date: "18-05-2024",
        image: tech_project,
        url: "https://kostiasav.github.io/TechCues/",
        type: "Landing Page"
    },
    {
        title: {
            rendered: "Teach",
        },
        content: {
            rendered: "The first project on Webflow is still far from being completed. There's one more section to build on the site, animations to add, some optimization to do, and full responsiveness to implement."
        },
        date: "19-07-2024",
        image: webflow_tech_project,
        url: "https://teach-174511.webflow.io/",
        type: "Webflow"
    },
]

const Projects = () => {

    const { t } = useTranslation();

    const [type, setType] = useState<IProjectType | undefined>("All projects");

    return (

        <>

            <section className={styles.projects_wrapper}>
                <div className="container">
                    <div className={styles.block_title}>
                        <h1 className="title_block_h1">{t("Projects")}</h1>
                    </div>

                    <ChangerTypeProjects currentType={type} changeType={setType}/>

                    <ListProjects projects={projects} type={type}/>
                </div>
            </section>
        </>

    )
}

export default Projects