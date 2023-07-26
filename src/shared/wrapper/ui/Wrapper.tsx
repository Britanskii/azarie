import s from "./wrapper.module.sass"
import {FC} from "preact/compat"


export const Wrapper: FC = ({children}) => {

	return <div className={s.wrapper}>{children}</div>
}
