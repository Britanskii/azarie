import s from "./products.module.sass"
import {products} from "../const/products.ts"

export const Products = () => {


	return <div className={s.products}>
		{products.map(({title, description, image}, index) =>
			<div className={s.products__item}  key={index}>
				<img className={s.products__image} src={image} alt={title}/>
				<div>
					<div className={s.products__title}>{title}</div>
					<div className={s.products__description}>{description}</div>
				</div>
			</div>
		)}
	</div>
}
