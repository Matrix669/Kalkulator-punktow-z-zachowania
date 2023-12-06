import { styled } from 'styled-components'

const Label = styled.label`
	padding: 1em;
	font-size: 2rem;
`
const Select = styled.select`
	padding: 0.2em;
	font-size: 1.6rem;
	& option {
		text-align: center;
	}
`

export default function BehaviorsItems({ $htmlFor, label, whichBehavior, ...props }) {
	return (
		<>
			<Label htmlFor={$htmlFor}>{label}</Label>
			<Select {...props}>
				{whichBehavior.map(behavior => (
					<option selected={whichBehavior[-1]} key={behavior.behavior} value={behavior.points}>
						{behavior.behavior}
					</option>
				))}
			</Select>
		</>
	)
}
