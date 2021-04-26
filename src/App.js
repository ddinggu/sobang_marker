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
		</div>
	);
}

export default App;
