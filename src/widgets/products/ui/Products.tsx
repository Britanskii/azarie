import s from "./products.module.sass"
import {products} from "../const/products.ts"

export const Products = () => {


	return (
		<section className={s.products}>
			{products.map(({title, description, image}, index) =>
				<div className={s.products__item}  key={index}>
					<img className={s.products__image} src={image} alt={title}/>
					<div>
						<h3 className={s.products__title}>{title}</h3>
						<p className={s.products__description}>{description}</p>
					</div>
				</div>
			)}
		</section>
	)
}
