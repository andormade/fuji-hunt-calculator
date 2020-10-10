class LocalizedVolume extends HTMLElement {
	connectedCallback() {
		const ml = parseInt(this.getAttribute('ml'), 10);
		const target = this.getAttribute('target');
		const oz = ml / 29.574;

		switch (target) {
			case 'ml':
				this.innerHTML = `${ml} ml`;
				break;
			case 'oz':
				this.innerHTML = `${oz} oz`;
				break;
			default:
				this.innerHTML = `${ml}`;
		}
	}

	static get observedAttributes() {
		return ['target'];
	}

	attributeChangedCallback() {
		console.log('attrchange');
		this.connectedCallback();
	}
}

export default LocalizedVolume;
