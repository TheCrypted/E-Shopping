import { useRef } from "react"
// import { AuthProvider, useAuth } from "../contexts/AuthProvider"


export function Login() {
	let emailRef = useRef()
	let passwordRef = useRef()
	// const { signUp } = useAuth()
	function handleSubmit(e){
		signUp(emailRef.current.value, passwordRef.current.value)
	}
	return (
		<>
			<div style={{backgroundImage: `url(https://images.unsplash.com/photo-1533748347742-b2e2ff602786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D&w=1000&q=80)`}} className="h-full bg-cover bg-white w-full flex items-center justify-center">
				<div className="bg-teal-800 drop-shadow-2xl rounded-xl h-2/3 w-1/4">
					<form className="w-full h-full grid grid-rows-5" onSubmit={()=> handleSubmit(e)}>
						<div className="text-white text-4xl flex items-center justify-center">Sign-up</div>
						<input type="email" ref={emailRef} className="bg-slate-900 h-4/6 mt-0  m-4 p-3 text-white text-2xl rounded-xl" placeholder="Email" />
						<input type="password" ref={passwordRef} className="bg-slate-900 h-4/6 mt-0  m-4  p-3 text-white text-2xl rounded-xl" placeholder="Password" />
						<input type="password" className="bg-slate-900 h-4/6 mt-0  m-4  p-3 text-white text-2xl rounded-xl" placeholder="Confirm Password" />
						<button type="submit" className="text-white bg-slate-900 text-2xl flex items-center justify-center rounded-b-xl transition-colors duration-300 hover:bg-slate-700">Submit</button>
					</form>
				</div>
			</div>
		</>
	)
}