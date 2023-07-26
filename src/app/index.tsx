import "./index.sass"
import {Main, Products} from "../widgets"
import {Wrapper} from "../shared/wrapper/ui/Wrapper.tsx"
export const App = () => {

	return (
		<div>
			<Main/>
			<Wrapper>
				<Products/>
			</Wrapper>
		</div>
	)
}
