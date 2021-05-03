import { useState } from 'react';
import Select from 'react-select';

import Map from './map';
import si from './data/si/si.json';

const radius = [
	{ value: 7, label: 7 },
	{ value: 8, label: 8 },
	{ value: 9, label: 9 },
	{ value: 10, label: 10 },
	{ value: 11, label: 11 },
	{ value: 12, label: 12 },
	{ value: 13, label: 13 },
	{ value: 14, label: 14 },
	{ value: 15, label: 15 },
	{ value: 16, label: 16 },
	{ value: 17, label: 17 },
	{ value: 18, label: 18 },
	{ value: 19, label: 19 },
	{ value: 20, label: 20 },
];

function App() {
	const [siState, setSiState] = useState(null);
	const [radiusState, setRadiusState] = useState(radius[3]);

	return (
		<div>
			<Select
				placeholder='시, 군 선택'
				options={si}
				onChange={(value) => {
					setSiState(value);
				}}
				style={{ width: '200px' }}
			/>
			<Select
				options={radius}
				onChange={(value) => {
					setRadiusState(value);
				}}
				placeholder='점 크기 선택(기본값 10)'
				style={{ width: '100px' }}
			/>
			{siState && (
				<Map
					data={require(`./data/final/${siState.value}.json`)}
					radius={radiusState.value}
				/>
			)}
			<p>
				초록색 점: 구급 / 빨간색 점: 화재 / 파란색 점: 구조 / 검은색 점:
				기타활동
			</p>
		</div>
	);
}

export default App;
