import Review from '../../components/Review/Review';
import { IReview } from '../../typescript/interfaces';
import style from './Reviews.module.css';

export const reviews: IReview[] = [
	{
		id: 4351,
		title: 'Створити лендінг на 3 сторінки',
		date: new Date(2024, 8, 5),
		cost: 2500,
		name: 'Костя',
		surname: 'Пивненко',
		comment:
			"Я задоволений роботою Костянтина. Завдання було не складне, проте Костянтин впорався швидко, був завжди на зв'язку.",
		rating: {
			quality: 9,
			professionalism: 10,
			cost: 9,
			responseveness: 10,
			deadlines: 9,
		},
	},
	{
		id: 4352,
		title: 'Разработать лендинг для SMM-сервиса',
		date: new Date(2024, 8, 3),
		cost: 2000,
		name: 'Артур',
		surname: 'Б.',
		avatar: 'https://content.freelancehunt.com/profile/photo/50/Esendery.png',
		comment:
			'Работа выполнена отлично! Понравилось, что предложены разные варианты решений — и с использованием CSS для простых анимаций, и с комбинацией JavaScript для добавления интерактивности, что позволяет сделать лендинг более привлекательным и удобным.**Оценка: 5/5** А так же ТС показал высокий уровень знаний и внимания к деталям, что позволило мне легко реализовать задуманное на своём сайте.',
		rating: {
			quality: 10,
			professionalism: 10,
			cost: 10,
			responseveness: 10,
			deadlines: 10,
		},
	},
	{
		id: 4353,
		title: 'Js калькулятор та правки в css',
		date: new Date(2024, 6, 2),
		cost: 2800,
		name: 'Олександр',
		surname: 'К.',
		comment: 'Гарна робота. Надійний виконавець.',
		rating: {
			quality: 10,
			professionalism: 10,
			cost: 10,
			responseveness: 10,
			deadlines: 10,
		},
	},
];

const Reviews = () => {
	return (
		<section className={style.reviews}>
			<div className='container'>
				<ul className={style.list}>
					{reviews.map(review => (
						<Review key={review.id} review={review} />
					))}
				</ul>
			</div>
		</section>
	);
};

export default Reviews;
