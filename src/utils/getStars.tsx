import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const getStars = (numberStars: number) => {
	let stars = [];
	for (let i = 0; i < numberStars; i++) {
		if (i >= 10) {
			break;
		}
		stars.push(
			<FontAwesomeIcon key={i} icon={faStar} style={{ color: '#00ae5a' }} />
		);
	}

	if (numberStars < 10) {
		let resultStars = 10 - numberStars;
		for (let i = 0; i < resultStars; i++) {
			stars.push(
				<FontAwesomeIcon
					key={i + 10}
					icon={faStar}
					style={{ color: '#cccccc' }}
				/>
			);
		}
	}
	return stars;
};

export default getStars;
