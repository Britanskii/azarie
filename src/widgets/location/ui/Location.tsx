import {useEffect, useRef} from "preact/compat"
import s from "./location.module.sass"

export const Location = () => {
	const refLocation = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (refLocation && refLocation.current) {
			const script = document.createElement("script")
			const div = document.createElement("div")
			div.className = s.location__map

			script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aa0b5f1947fc708aa4c84241c5f83de41fbcc19cad70191e993b45b4feb4c2e67&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true"
			script.async = true
			div.appendChild(script)
			refLocation.current.appendChild(div)
			return () => {
				if (refLocation && refLocation.current) {
					refLocation.current.removeChild(div)
				}
			}
		}
	}, [refLocation, refLocation.current])

	return (
		<div ref={refLocation} className={s.location}>
			<div className={s.location__social}>
				<div className={s.location__title}>Наши контакты</div>
				<a href={"https://yandex.ru/maps/10274/grodno/?from=mapframe&ll=23.838761%2C53.676321&mode=usermaps&source=mapframe&um=constructor%3Aa0b5f1947fc708aa4c84241c5f83de41fbcc19cad70191e993b45b4feb4c2e67&utm_source=mapframe&z=17"}
					className={s.location__group}>Адрес: <span className={s.location__link}>Гродно, ул. Карла Маркса 31, Гродно</span></a>
				<a href="tel:+375447695779375" className={s.location__group}>Номер телефона: <span
					className={s.location__link}>+375 (44) 76-95-77-93-75</span></a>
				<a href={"https://vk.com/azariegrodno"} className={s.location__group}>Группа вконтакте: <span
					className={s.location__link}>vk.com/azariegrodno</span></a>
			</div>
		</div>
	)
}
