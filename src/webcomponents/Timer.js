import LittleReact from './LittleReact.js';

const css = () => `
	.wrapper {
		position: relative;
		background: #cccccc;
		padding: 20px;
	}
`;

class Timer extends LittleReact {
	constructor() {
		super();
		this.originalTime = parseInt(this.textContent, 10);
		this.state = {
			time: this.originalTime,
			buttonText: 'Start',
		};
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		if (this.interval) {
			clearInterval(this.interval);
			this.interval = null;

			this.setState({
				time: this.originalTime,
				buttonText: 'Start',
			});
		} else {
			this.setState({
				buttonText: 'Reset',
			});

			this.interval = setInterval(() => {
				this.setState({
					time: this.state.time - 1,
				});
			}, 1000);
		}
	}

	componentWillRender() {
		this.button && this.button.removeEventListener('click', this.onClick);
	}

	render() {
		const minutes = Math.floor(this.state.time / 60);
		const seconds = this.state.time % 60;

		return `
			<div class="wrapper">
				<span class="time">${minutes}:${seconds}</span>
				<button>${this.state.buttonText}</button>
			</div>
		`;
	}

	componentDidRender() {
		this.shadow.appendChild(document.createElement('style')).textContent = css();
		this.button = this.shadow.querySelector('button');
		this.button.addEventListener('click', this.onClick);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
		this.button.removeEventListener('click', this.onClick);
	}
}

export default Timer;
