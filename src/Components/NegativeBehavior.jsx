import BehaviorsItems from '../CSSComponents/BehaviorsItems'
import ContainerSelect from '../CSSComponents/ContainerSelect'
import { NEGATIVE_BEHAVIOR } from '../behavior'

export default function NegativeBehavior({ setParagraph }) {
	function handleOptionSelectNegative(event) {
		const selectedOptionValue = parseInt(event.target.value, 10)
		setParagraph(prevValue => prevValue - selectedOptionValue)
	}
	return (
		<ContainerSelect>
			<BehaviorsItems
                label='Wybierz negatywne zachowanie'
                $htmlFor='behaviorN'
				name='behavior'
				id='behaviorN'
                whichBehavior={NEGATIVE_BEHAVIOR}
				onChange={handleOptionSelectNegative}
            />
		</ContainerSelect>
	)
}
