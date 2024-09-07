import { useNavigate, useParams } from 'react-router-dom';
import style from './Project.module.css';
import { projects } from '../Projects/Projects';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { reviews } from '../Reviews/Reviews';
import Review from '../../components/Review/Review';
import CostProject from '../../ui/CostProject/CostProject';
import DateProject from '../../ui/DateProject/DateProject';

const Project = () => {
	let { slug } = useParams();

	const project = projects.find(project => project.slug === slug);

	if (project == undefined) {
		let navigate = useNavigate();
		navigate('/projects/');
	}

	const comment = project?.commentId
		? reviews.find(review => project.commentId == review.id)
		: undefined;

	return (
		<section className={style.project}>
			<div className='container'>
				<div className={style.wrapper}>
					<div className={style.image}>
						<Zoom>
							<img
								src={project?.imageFull ? project?.imageFull : project?.image}
								alt='project_image'
							/>
						</Zoom>
					</div>
					<div className={style.content}>
						<h1 className={style.title}>{project?.title.rendered}</h1>
						<div className={`${style.block} ${style.flex}`}>
							{project?.date && <DateProject date={new Date(project.date)} />}
							{project?.cost && <CostProject cost={project.cost} />}
						</div>
						<h3 className={style.type}>{project?.type}</h3>
						<p className={style.description}>{project?.content.rendered}</p>
						{project?.skills && (
							<div className={style.skills}>
								<h3 className={style.title_section}>Skills:</h3>
								<ul className={style.skills_list}>
									{project?.skills.map(skill => (
										<li className={style.skill} key={skill}>
											{skill}
										</li>
									))}
								</ul>
							</div>
						)}

						{comment && (
							<div>
								<h3 className={style.title_section}>Review:</h3>
								<Review review={comment} size='small' />
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Project;
