class LocalizedTemperature extends HTMLElement {
	connectedCallback() {
		const celsius = parseInt(this.getAttribute('celsius'), 10);
		const unit = this.getAttribute('unit') || 'metric';
		const fahrenheit = (celsius * 9) / 5 + 32;

		switch (unit) {
			case 'metric':
				this.innerHTML = `${celsius} °C`;
				break;
			case 'imperial':
				this.innerHTML = `${fahrenheit} °F`;
				break;
			default:
				this.innerHTML = `${celsius}`;
		}
	}

	static get observedAttributes() {
		return ['unit'];
	}

	attributeChangedCallback() {
		this.connectedCallback();
	}
}

export default LocalizedTemperature;
