import LocalizedTemperature from './webcomponents/LocalizedTemperature.js';
import LocalizedVolume from './webcomponents/LocalizedVolume.js';

customElements.define('localized-temperature', LocalizedTemperature);
customElements.define('localized-volume', LocalizedVolume);

window.addEventListener('DOMContentLoaded', event => {
	Array.from(
		document.getElementsByTagName('localized-volume')
	).forEach(element => element.setAttribute('target', 'ml'));
	Array.from(
		document.getElementsByTagName('localized-temperature')
	).forEach(element => element.setAttribute('target', 'celsius'));
});
