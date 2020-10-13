class LocalizedTemperature extends HTMLElement {
	connectedCallback() {
		this.celsius = parseFloat(this.textContent);
	}

	static get observedAttributes() {
		return ['unit'];
	}

	attributeChangedCallback() {
		const unit = this.getAttribute('unit') || 'metric';
		const fahrenheit = (this.celsius * 9) / 5 + 32;

		switch (unit) {
			case 'imperial':
			case 'us':
				this.innerHTML = `${fahrenheit} °F`;
				break;
			default:
				this.innerHTML = `${this.celsius} °C`;
		}
	}
}

export default LocalizedTemperature;
