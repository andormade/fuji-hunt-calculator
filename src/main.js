import LocalizedTemperature from './webcomponents/LocalizedTemperature.js';
import LocalizedVolume from './webcomponents/LocalizedVolume.js';

customElements.define('localized-temperature', LocalizedTemperature);
customElements.define('localized-volume', LocalizedVolume);

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
