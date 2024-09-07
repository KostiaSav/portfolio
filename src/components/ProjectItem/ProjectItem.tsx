import { IItemProject } from '../../typescript/interfaces';
import styles from './ProjectItem.module.css';
import notFoundImage from '../../assets/img/image_not_found.jpg';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ProjectItem = ({ item }: IItemProject) => {
	const { t } = useTranslation();
	// const [image, setImage] = useState();

	// const getImage = () => {
	//     axios
	//     .get(item?._links["wp:featuredmedia"][0]?.href)
	//     .then((response) => {
	//         setImage(response.data.source_url)
	//     })
	// }

	// useEffect(() => {
	//     getImage();
	// }, [])

	return (
		<li className={styles.project_item}>
			<Link to={`/project/${item.slug}/`}>
				<div className={styles.image_wrapper}>
					<img
						src={item.image ? item.image : notFoundImage}
						alt={item.title.rendered}
					/>
				</div>
			</Link>
			<div className={styles.project_info}>
				<h3>{t(`${item.title.rendered}`)}</h3>
				<p
					dangerouslySetInnerHTML={{ __html: t(`${item.content.rendered}`) }}
					className={styles.project_description}
				/>
				<a href={item.url} target='_blank'>
					<button className='btn' style={{ marginTop: '10px', width: '100%' }}>
						{t('View Site')}
					</button>
				</a>
				<Link to={`/project/${item.slug}/`}>
					<button className='btn' style={{ marginTop: '10px', width: '100%' }}>
						{t('Learn More')}
					</button>
				</Link>
				<div className={styles.project_item_secondary_info}>
					<span className={styles.project_type}>
						{item.type ? t(item.type) : t('Landing page')}
					</span>
					<span>{item.date ? item.date : t('Date not found')}</span>
				</div>
			</div>
		</li>
	);
};

export default ProjectItem;
