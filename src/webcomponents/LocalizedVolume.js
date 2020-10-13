const round2dec = num => Math.round((num + Number.EPSILON) * 100) / 100;

class LocalizedVolume extends HTMLElement {
	connectedCallback() {
		this.ml = parseFloat(this.textContent);
	}

	static get observedAttributes() {
		return ['unit', 'multiplier'];
	}

	attributeChangedCallback() {
		const multiplier = parseFloat(this.getAttribute('multiplier')) || 1;
		const ml = this.ml * multiplier;
		const unit = this.getAttribute('unit') || 'metric';
		const us_oz = round2dec(this.ml / 29.5735295625);
		const imperial_oz = round2dec(this.ml / 28.4130625);

		switch (unit) {
			case 'imperial':
				this.innerHTML = `${imperial_oz} Imp fl oz`;
				break;
			case 'us':
				this.innerHTML = `${us_oz} US fl oz`;
				break;
			default:
				this.innerHTML = `${ml} ml`;
		}
	}
}

export default LocalizedVolume;
