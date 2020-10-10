class LocalizedTemperature extends HTMLElement {
	connectedCallback() {
		const celsius = parseInt(this.getAttribute('celsius'), 10);

		const target = this.getAttribute('target');
		const fahrenheit = (celsius * 9) / 5 + 32;

		switch (target) {
			case 'celsius':
				this.innerHTML = `${celsius} °C`;
				break;
			case 'fahrenheit':
				this.innerHTML = `${fahrenheit} °F`;
				break;
			default:
				this.innerHTML = `${celsius}`;
		}
	}

	static get observedAttributes() {
		return ['target'];
	}

	attributeChangedCallback() {
		this.connectedCallback();
	}
}

export default LocalizedTemperature;
