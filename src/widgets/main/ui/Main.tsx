import s from "./main.module.sass"
import background from "../assets/background.jpg"

export const Main = () => {

	return (
		<section className={s.main}>
			<img className={s.main__background} src={background}/>
			<h1 className={s.main__title}>ООО «Азарье»</h1>
			<h2 className={s.main__subtitle}>Бытовые услуги</h2>
		</section>
	)
}
