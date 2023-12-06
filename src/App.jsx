import { useState } from 'react'
import styled from 'styled-components'
import NegativeBehavior from './Components/NegativeBehavior'
import PositiveBehavior from './Components/PositiveBehavior'

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;

	& p {
		font-size: 2.4rem;
		margin: 0.5em;
	}
	.result-btn {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 2em;
	}
	& button {
		color: #fff;
		margin: 1em;
		padding: .5em 1em;
		border: 1px solid #ddd;
		background: none;
		transition: background-color .3s, color .3s, border-color .3s;
		cursor: pointer;
		&:hover {
			background-color: #fff;
			color: #333;
			border-color: #333;
		}
	}
`

function App() {
	const [isBehavior, setIsBehavior] = useState(100)

	function btnReset() {
		setIsBehavior(100)
	}
	
	return (
		<Container>
			<NegativeBehavior setParagraph={setIsBehavior} />
			<div className='result-btn'>
				<p>{isBehavior}</p>
				<button onClick={btnReset}>Reset</button>
			</div>
			<PositiveBehavior setParagraph={setIsBehavior} />
		</Container>
	)
}

export default App
