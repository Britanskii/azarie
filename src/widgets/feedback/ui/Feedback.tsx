import {reviews} from "../const/reviews.ts"
import s from "./feedback.module.sass"

export const Feedback = () => {

	return <div className={s.feedback}>
		{reviews.map(({image, comment, sign}, index) => (
			<div className={s.feedback__item} key={index}>
				<img className={s.feedback__image} src={image} alt={sign}/>
				<div className={s.feedback__review}>{comment}</div>
				<div className={s.feedback__sign}>{sign}</div>
			</div>
		))}
	</div>
}
