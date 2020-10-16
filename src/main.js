import LocalizedTemperature from './webcomponents/LocalizedTemperature.js';
import LocalizedVolume from './webcomponents/LocalizedVolume.js';
import Timer from './webcomponents/Timer.js';

customElements.define('localized-temperature', LocalizedTemperature);
customElements.define('localized-volume', LocalizedVolume);
customElements.define('timer-component', Timer);

window.addEventListener('DOMContentLoaded', event => {
	const unitElements = [
		...Array.from(document.getElementsByTagName('localized-temperature')),
		...Array.from(document.getElementsByTagName('localized-volume')),
	];

	document.getElementById('units').addEventListener('change', ({ target: { value } }) => {
		unitElements.forEach(element => element.setAttribute('unit', value));
	});

	document.getElementById('volume').addEventListener('change', ({ target: { value } }) => {
		unitElements.forEach(element => element.setAttribute('multiplier', value));
	});
});
