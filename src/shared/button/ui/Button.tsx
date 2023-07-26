import {FC} from "preact/compat"
import s from "./button.module.sass"
import {VNode} from "preact"

type ButtonStyles = "dark" | "light"

interface ButtonProps {
	children: VNode | string
	style?: ButtonStyles
}

export const Button: FC<ButtonProps> = ({children, style = "light"}) => {

	return <button className={`${s.button} ${s[style]}`}>{children}</button>
}
