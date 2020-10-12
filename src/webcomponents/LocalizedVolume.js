const round2dec = num => Math.round((num + Number.EPSILON) * 100) / 100;

class LocalizedVolume extends HTMLElement {
	connectedCallback() {
		const multiplier = parseFloat(this.getAttribute('multiplier')) || 1;
		const ml = parseFloat(this.getAttribute('ml')) * multiplier;
		const unit = this.getAttribute('unit') || 'metric';
		const us_oz = round2dec(ml / 29.5735295625);
		const imperial_oz = round2dec(ml / 28.4130625);

		switch (unit) {
			case 'metric':
				this.innerHTML = `${ml} ml`;
				break;
			case 'imperial':
				this.innerHTML = `${imperial_oz} Imp fl oz`;
				break;
			case 'us':
				this.innerHTML = `${us_oz} US fl oz`;
				break;
			default:
				this.innerHTML = `${ml}`;
		}
	}

	static get observedAttributes() {
		return ['unit', 'multiplier'];
	}

	attributeChangedCallback() {
		this.connectedCallback();
	}
}

export default LocalizedVolume;
