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
				<a href={"https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aa0b5f1947fc708aa4c84241c5f83de41fbcc19cad70191e993b45b4feb4c2e67&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true"}
					className={s.location__group}>Адрес: <span className={s.location__link}>Гродно, ул. Полиграфистов 25, Павильон 22 <br/>(2 этаж)</span></a>
				<a href="tel:+375339166544" className={s.location__group}>Номер телефона: <span
					className={s.location__link}>+375 (33) 916 65 44</span></a>
				<a href={"https://vk.com/azariegrodno"} className={s.location__group}>Группа вконтакте: <span
					className={s.location__link}>vk.com/azariegrodno</span></a>
			</div>
		</div>
	)
}
