import s from "./header.module.sass"

export const Header = () => {

	return (
		<div className={s.header}>
			<a href={"https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aa0b5f1947fc708aa4c84241c5f83de41fbcc19cad70191e993b45b4feb4c2e67&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true"}
				className={s.header__group}>Адрес: <span className={s.header__link}>Гродно, ул. Полиграфистов 25, Павильон 22 (2 этаж)</span></a>
			<a href="tel:+375339166544" className={s.header__group}>Номер телефона: <span
				className={s.header__link}>+375 (33) 916 65 44</span></a>
		</div>
	)
}
