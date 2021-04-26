import { useState } from 'react';
import Select from 'react-select';

import Map from './map';
import si from './data/si/si.json';

function App() {
	const [state, setState] = useState(null);

	return (
		<div>
			<Select
				options={si}
				onChange={(value) => {
					setState(value);
				}}
			/>
			{state && <Map data={require(`./data/final/${state.value}.json`)} />}
			<p>
				초록색 점: 구급 / 빨간색 점: 화재 / 파란색 점: 구조 / 검은색 점:
				기타활동
			</p>
		</div>
	);
}

export default App;
