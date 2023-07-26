import {Button} from "../../shared/button/ui/Button.tsx"
import s from "./contact.module.sass"

export const Contact = () => {

	return (
		<div className={s.contact}>
			<h3 className={s.contact__title}>
				Готовы испытать элитный ремонт? Давайте вместе помолодеем!
			</h3>
			<div className={s.contact__buttons}>
				<a href="https://vk.com/im?sel=-217719388"><Button style={"dark"}>Связаться с нами</Button></a>
				<a href="tel:+375447695779375"><Button>Позвонить</Button></a>
			</div>
		</div>
	)
}
