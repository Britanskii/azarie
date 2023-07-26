import "./index.sass"
import {Contact, Feedback, Footer, Main, Products} from "../widgets"
import { Wrapper } from "../shared/wrapper/ui/Wrapper.tsx"
import {Location} from "../widgets/location/ui/Location.tsx"
export const App = () => {

	return (
		<div>
			<Main/>
			<Wrapper>
				<Products/>
				<Feedback/>
				<Contact/>
				<Location/>
				<Footer/>
			</Wrapper>
		</div>
	)
}
