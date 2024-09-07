import FreelanceHuntMarker from '../FreelanceHuntMarker/FreelanceHuntMarker';
import FreelanceHuntMainCategory from '../FreelanceHuntMainCategory/FreelanceHuntMainCategory';
import FreelanceHuntSecondaryCategory from '../FreelanceHuntSecondaryCategory/FreelanceHuntSecondaryCategory';

const FreelanceHuntList = () => {
	return (
		<div>
			<FreelanceHuntMarker />
			<FreelanceHuntMainCategory />
			<FreelanceHuntSecondaryCategory />
		</div>
	);
};

export default FreelanceHuntList;
