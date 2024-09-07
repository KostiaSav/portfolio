import { ICostComponent } from '../../typescript/interfaces';
import style from './Cost.module.css';

const CostProject = ({ cost, currency }: ICostComponent) => {
	return (
		<span className={style.cost}>
			{cost} {currency ? currency : 'грн'}
		</span>
	);
};

export default CostProject;
