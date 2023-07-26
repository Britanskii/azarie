import {reviews} from "../const/reviews.ts"
import s from "./feedback.module.sass"

export const Feedback = () => {

	return (
		<section className={s.feedback}>
			{reviews.map(({image, comment, sign}, index) => (
				<article className={s.feedback__item} key={index}>
					<img className={s.feedback__image} src={image} alt={sign}/>
					<div className={s.feedback__review}>{comment}</div>
					<div className={s.feedback__sign}>{sign}</div>
				</article>
			))}
		</section>
	)
}
