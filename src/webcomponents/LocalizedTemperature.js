const round2dec = num => Math.round((num + Number.EPSILON) * 100) / 100;

class LocalizedTemperature extends HTMLElement {
	connectedCallback() {
		this.celsius = parseFloat(this.textContent);
	}

	static get observedAttributes() {
		return ['unit'];
	}

	attributeChangedCallback() {
		const unit = this.getAttribute('unit') || 'metric';
		const fahrenheit = round2dec((this.celsius * 9) / 5 + 32);

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
