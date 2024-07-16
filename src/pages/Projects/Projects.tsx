import styles from './Projects.module.css';
import pharma_project from "../../assets/img/pharma.png";
import nexcent_project from "../../assets/img/nexcent.png";
import tech_project from "../../assets/img/tech.jpg";
import pdr_project from "../../assets/img/pdr.jpg";
import ProjectItem from '../../components/ProjectItem/ProjectItem';
import { useTranslation } from 'react-i18next';
import { IProjectItem } from '../../typescript/interfaces';

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
        url: "hpdrpatrol.ca",
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
]

const Projects = () => {

    const { t } = useTranslation();
    // const [projects, setProjects] = useState<any>([]);

    // const getProject = () => {
    //     axios.get('http://localhost/wordpress/wp-json/wp/v2/recipe')
    //         .then(response => {
    //             setProjects(response.data);
    //             console.log(response.data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }

    // useEffect(() => {
    //     getProject();
    // }, [])

    return (

        <>

            <section className={styles.projects_wrapper}>
                <div className="container">
                    <div className={styles.block_title}>
                        <h1 className={styles.title_block_h1}>{t("Projects")}</h1>
                        <p className={styles.title_block_p}>{t("Landing pages")}</p>
                    </div>

                    <ul className={styles.projects_list}>


                        {
                            projects.map((item: any) => {
                                return (
                                    <ProjectItem
                                        item={item}
                                    />
                                )
                            })
                        }
                    </ul>
                </div>
            </section>
        </>

    )
}

export default Projects