import { IDateComponent } from '../../typescript/interfaces';
import style from './DateProject.module.css';

const DateProject = ({ date }: IDateComponent) => {
	const formattedDate = date.toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
	});

	return <span className={style.date}>{formattedDate}</span>;
};

export default DateProject;
