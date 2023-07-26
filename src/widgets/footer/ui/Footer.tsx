import s from "./footer.module.sass"

export const Footer = () => {

	return (
		<div className={s.footer}>
			<div className={s.footer__icon}/>
			<h4 className={s.footer__title}>© 2023 Услуги по ремонту и изготовлению мебели на заказ. Все права защищены.</h4>
			{/*<h5 className={s.footer__subtitle}></h5>*/}
		</div>
	)
}
