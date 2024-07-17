import { useTranslation } from 'react-i18next';
import ProjectItem from '../../components/ProjectItem/ProjectItem';
import { IListProjects } from '../../typescript/interfaces';
import styles from './ListProjects.module.css';

const ListProjects = (props: IListProjects) => {

    const { t } = useTranslation();

    const filteredProjects = props.type 
    ? props.projects.filter(project => project.type === props.type) 
    : props.projects;

    return (
        <div className={styles.list_projects__wrapper}>
            <p className={styles.title_block_p}>
                {props.type || t("All projects") }
            </p>

            <ul className={styles.projects_list}>


                {
                    filteredProjects.map((item: any) => {
                        return (
                            <ProjectItem
                                item={item}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ListProjects