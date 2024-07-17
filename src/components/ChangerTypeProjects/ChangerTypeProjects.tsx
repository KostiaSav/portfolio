import { IChangerTypeProjects } from "../../typescript/interfaces"
import { projectTypes } from "../../typescript/types"
import styles from "./ChangerTypeProjects.module.css";

const ChangerTypeProjects = (props: IChangerTypeProjects) => {

  return (
    <div
        className={styles.changerTypeProject}
    >
        {
            projectTypes.map((type) => {
                return (
                    <button
                        key={type}
                        onClick={() => props.changeType(type)}
                        className={`btn-changer ${props.currentType === type ? "btn-changer-active" : ""}`}
                    >
                        {type}
                    </button>
                )
            })
        }

    </div>
  )
}

export default ChangerTypeProjects