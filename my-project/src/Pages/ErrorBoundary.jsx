import {Component} from "react";

export class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}
	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		console.log(error)
	}

	render() {
		if (this.state.hasError) {
			console.log("error detected")
			return (
				<>
					<div>
					An error has occurred
					</div>
				</>
			)
		}
		return this.props.children
	}
}