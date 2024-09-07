import { IReviewComponent } from '../../typescript/interfaces';
import CostProject from '../../ui/CostProject/CostProject';
import DateProject from '../../ui/DateProject/DateProject';
import getStars from '../../utils/getStars';
import style from './Review.module.css';

const Review = ({ review, size }: IReviewComponent) => {
	const avatar = review.avatar
		? review.avatar
		: 'https://content.freelancehunt.com/profile/photo/50/LLIRIK30.png';

	return (
		<li className={`${style.review} ${size == 'small' && style.small}`}>
			<div className={style.main_review}>
				<div className={style.content}>
					<h2 className={style.title}>{review.title}</h2>
					<p className={style.comment}>{review.comment}</p>
				</div>
				<div className={style.rating}>
					<div className={style.info}>
						<DateProject date={review.date} />
						<CostProject cost={review.cost} />
					</div>

					<ul className={style.rating_list}>
						<li>
							<h3 className={style.rating_title}>
								Quality: {getStars(review.rating.quality)}
							</h3>
						</li>

						<li>
							<h3 className={style.rating_title}>
								Professionalism: {getStars(review.rating.professionalism)}
							</h3>
						</li>

						<li>
							<h3 className={style.rating_title}>
								Cost: {getStars(review.rating.cost)}
							</h3>
						</li>

						<li>
							<h3 className={style.rating_title}>
								Responseveness: {getStars(review.rating.responseveness)}
							</h3>
						</li>

						<li>
							<h3 className={style.rating_title}>
								Dealines: {getStars(review.rating.deadlines)}
							</h3>
						</li>
					</ul>
				</div>
			</div>

			<div className={style.avatar}>
				<img src={avatar} alt='reviewer' className={style.avatar_image} />
				<p className={style.name}>
					{review.name} {review?.surname}
				</p>
			</div>
		</li>
	);
};

export default Review;
