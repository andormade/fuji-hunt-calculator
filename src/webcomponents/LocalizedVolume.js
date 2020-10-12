class LocalizedVolume extends HTMLElement {
	connectedCallback() {
		const multiplier = parseFloat(this.getAttribute('multiplier')) || 1;
		const ml = parseInt(this.getAttribute('ml'), 10) * multiplier;
		const unit = this.getAttribute('unit') || 'metric';
		const oz = (ml / 29.574) ;


		switch (unit) {
			case 'metric':
				this.innerHTML = `${ml} ml`;
				break;
			case 'imperial':
				this.innerHTML = `${oz} oz`;
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
