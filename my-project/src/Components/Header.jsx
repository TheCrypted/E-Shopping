import {Autocomplete, TextField, Badge, IconButton} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartSharp";
import {Link, useNavigate} from "react-router-dom";
import {getCartNumber} from "../Utils/Utils.js";
import {useDispatch, useSelector} from "react-redux";
import {useAuth} from "../firebase/Auth.jsx";
import {useRef} from "react";
import {clearCart} from "../features/cartSlice.js";

export function Header() {
	let {value} = useSelector((state)=> state.cart)
	let state = useSelector((state)=> state.products)
	let { value: products, loading} = state
	let displayRef = useRef()
	const navigate = useNavigate()
	const {user, signOut} = useAuth()
	const dispatch = useDispatch()
	const handleButtonClick = () => {
		navigate("/");
	}

	const handleLoginClick = () => {
		navigate("/Login")
	}

	const handleChange = (searchItem) => {
		navigate("/?searchItem=" + searchItem.label);
	}

	return (
		<>
		<div className="w-full h-[8%] bg-teal-800 grid grid-cols-[15%_70%_15%]">
			<Link to="/" className="text-white flex items-center justify-center text-3xl font-bold transition-colors duration-200 ease-out hover:bg-teal-700 hover:cursor-pointer">
				TheCrypted.com
			</Link>
			<div className="flex items-center justify-center">
				{/*<input type="text" className="text-xl bg-slate-900 text-white focus:outline-none w-4/6 rounded-2xl h-2/3 pl-4 transition-width duration-500 ease focus:w-5/6 focus:drop-shadow-2xl" placeholder="Search Products"/>*/}
				<Autocomplete
					onChange={(e, value)=>{
						if(value) {
							handleChange(value)
						} else {
							navigate("/")
						}
					}
					}
					disablePortal
					id="combo-box-demo"
					options={Array.from(products, prod => ({id:prod.id, label:prod.title}))}
					isOptionEqualToValue={(option, value) => option.id === value.id}
					sx={{ width: 2/3, backgroundColor: "#0f172a", borderRadius: 10, '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
							border: 'none',
						}}}
					className="text-xl bg-black"
					renderInput={(params) => <TextField {...params} />}
				/>
			</div>
			<div className=" flex items-center grid grid-cols-[30%_70%]">
				<IconButton size = "large" aria-label="Cart Icon showing items in cart" onClick={()=>{navigate("/Cart")}}>
					<Badge badgeContent={getCartNumber(value)} color="error">
						<ShoppingCartIcon sx={{
							color: "white",
						}}/>
					</Badge>
				</IconButton>
				{user ? <button className="w-full h-full text-white text-2xl font-semibold transition-colors duration-200 ease-out hover:bg-teal-700" onMouseLeave={()=> displayRef.current.style.display = "none"} onMouseEnter={()=> displayRef.current.style.display="grid"}>{user.displayName ?? user.email}</button> :	<button onClick={handleLoginClick} className="w-full h-full text-white text-2xl font-semibold  transition-colors duration-200 ease-out hover:bg-teal-700">Login</button>}
				<div onMouseEnter={()=> displayRef.current.style.display="grid"} onMouseLeave={()=> displayRef.current.style.display = "none"} ref={displayRef} className="absolute w-[14%] top-[8%] h-[20%] z-10 bg-slate-900 grid grid-rows-3 right-[0.5%] rounded-b-xl display-none">
					<div className="hover:bg-slate-600 w-full h-full hover:cursor-pointer flex items-center justify-center text-white font-semibold text-xl">Profile</div>
					<div className="hover:bg-slate-600 w-full h-full hover:cursor-pointer flex items-center justify-center text-white font-semibold text-xl">Accounts</div>
					<div className="hover:bg-slate-600 w-full h-full rounded-b-xl hover:cursor-pointer flex items-center justify-center text-white font-semibold text-xl" onClick={() => {
						signOut()
						dispatch(clearCart())
						navigate("/Login")
					}}>Sign-out</div>
				</div>
				{/*<button onClick={handleLoginClick} className="w-full h-full text-white text-2xl font-semibold  transition-colors duration-200 ease-out hover:bg-teal-700">Login</button>*/}
			</div>
		</div>
		</>
	)
}