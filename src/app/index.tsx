import "./index.sass"
import { Feedback, Main, Products } from "../widgets"
import { Wrapper } from "../shared/wrapper/ui/Wrapper.tsx"
export const App = () => {

	return (
		<div>
			<Main/>
			<Wrapper>
				<Products/>
				<Feedback/>
			</Wrapper>
		</div>
	)
}
