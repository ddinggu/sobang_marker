import { NaverMap, Marker, Circle } from 'react-naver-maps';

var navermaps = window.naver.maps;

const color = {
	resque: 'blue',
	aid: 'green',
	fire: 'red',
	etc: 'black',
};

function Map({ data, radius }) {
	return (
		<div>
			<NaverMap
				style={{ width: '100%', height: '82vh' }}
				defaultZoom={13}
				center={{
					x: Number(data.centerPoint.x),
					y: Number(data.centerPoint.y),
				}}
			>
				{!data ? <></> : <Marking data={data} />}
				{!data ? <></> : <Circling data={data} radius={radius} />}
			</NaverMap>
		</div>
	);
}

function Marking({ data }) {
	return data.center.map(({ x, y, name }) => (
		<Marker
			position={{ x: Number(x), y: Number(y) }}
			title={name}
			clickable={true} // click event를 다루기 위해서는 true로 설정되어야함.
			onClick={() => alert(`여기는 ${name} 입니다.`)}
		/>
	));
}

function Circling({ data, radius }) {
	return data.out.map(({ x, y, type }) => {
		return (
			<Circle
				center={{ x: Number(x), y: Number(y) }}
				radius={Number(radius)}
				fillOpacity={0.85}
				fillColor={color[type]}
				strokeColor={color[type]}
			/>
		);
	});
}

export default Map;
