import s from "./main.module.sass"
import background from "../assets/background.jpg"

export const Main = () => {

	return (
		<div className={s.main}>
			<img className={s.main__background} src={background}/>
			<div className={s.main__title}>ООО «Азарье»</div>
			<div className={s.main__subtitle}>Бытовые услуги</div>
		</div>
	)
}
