class LittleReact extends HTMLElement {
	constructor() {
		super();
		this.state = {};
		this.shadow = this.attachShadow({ mode: 'open' });
		this.componentDidMount();
	}

	connectedCallback() {
		this.componentWillMount();
		this._render();
	}

	setState(state) {
		this.state = { ...this.state, ...state };
		this._render();
	}

	_render() {
		this.componentWillRender();
		this.shadow.innerHTML = this.render();
		this.componentDidRender();
	}

	componentWillMount() {}
	componentDidMount() {}
	componentWillUnmount() {}
	componentWillRender() {}
	componentDidRender() {}

	disconnectedCallback() {
		this.componentWillUnmount();
	}
}

export default LittleReact;
