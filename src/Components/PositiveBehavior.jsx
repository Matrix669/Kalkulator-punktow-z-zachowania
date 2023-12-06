import BehaviorsItems from '../CSSComponents/BehaviorsItems'
import ContainerSelect from '../CSSComponents/ContainerSelect'
import { POSITIVE_BEHAVIOR } from '../behavior'

export default function PositiveBehavior({ setParagraph }) {
	function handleOptionSelectPositive(event) {
		const selectedOptionValue = parseInt(event.target.value, 10)
		setParagraph(prevValue => prevValue + selectedOptionValue)
	}
	return (
		<ContainerSelect>
			<BehaviorsItems
				label='Wybierz pozytywne zachowanie'
                $htmlFor='behaviorP'
				name='behavior'
				id='behaviorP'
                whichBehavior={POSITIVE_BEHAVIOR}
				onChange={handleOptionSelectPositive}
			/>
		</ContainerSelect>
	)
}
