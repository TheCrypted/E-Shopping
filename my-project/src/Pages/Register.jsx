import {useContext, useRef} from "react"
import AuthProvider, {useAuth} from "../firebase/Auth.jsx";
import {useNavigate} from "react-router-dom";
// import { AuthProvider, useAuth } from "../contexts/AuthProvider"


export function Register() {
	let nameRef = useRef()
	let emailRef = useRef()
	let passwordRef = useRef()
	// const useProvideAuth = useContext(AuthProvider)
	const {signUp} = useAuth()
	const navigate = useNavigate()
	async function handleSubmit(e){
		e.preventDefault()
		await signUp(emailRef.current.value, passwordRef.current.value, nameRef.current.value)
		navigate("/")
		console.log(emailRef.current.value)
	}
	return (
		<>
			<div style={{backgroundImage: `url(https://images.unsplash.com/photo-1533748347742-b2e2ff602786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D&w=1000&q=80)`}} className="h-full bg-cover bg-white w-full flex items-center justify-center">
				<div className="bg-teal-800 drop-shadow-2xl rounded-xl h-2/3 w-1/4">
					<form className="w-full h-full grid grid-rows-5" onSubmit={(e)=> handleSubmit(e)}>
						<div className="text-white text-4xl flex items-center justify-center">Sign-up</div>
						<input type="text" ref={nameRef} className="bg-slate-900 h-4/6 mt-0  m-4 p-3 text-white text-2xl rounded-xl" placeholder="Display Name" />
						<input type="email" ref={emailRef} className="bg-slate-900 h-4/6 mt-0  m-4  p-3 text-white text-2xl rounded-xl" placeholder="Email" />
						<input type="password" ref={passwordRef} className="bg-slate-900 h-4/6 mt-0  m-4  p-3 text-white text-2xl rounded-xl" placeholder="Password" />
						<button type="submit" className="text-white bg-slate-900 text-2xl flex items-center justify-center rounded-b-xl transition-colors duration-300 hover:bg-slate-700">Sign Up</button>
					</form>
				</div>
			</div>
		</>
	)
}