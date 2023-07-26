import s from "./wrapper.module.sass"
import {FC} from "preact/compat"


export const Wrapper: FC = ({children}) => {

	return <main className={s.wrapper}>{children}</main>
}
