import {Autocomplete, TextField, Badge, IconButton} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartSharp";
import {Link, useNavigate} from "react-router-dom";
import {getCartNumber} from "../Utils/Utils.js";
import {useSelector} from "react-redux";

export function Header() {
	let {value} = useSelector((state)=> state.cart)
	let state = useSelector((state)=> state.products)
	let { value: products, loading} = state
	const navigate = useNavigate()

	const handleButtonClick = () => {
		navigate("/");
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
					disablePortal
					id="combo-box-demo"
					options={Array.from(products, prod => ({id:prod.id, label:prod.title}))}
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
				<button onClick={handleButtonClick} className="w-full h-full text-white text-2xl font-semibold  transition-colors duration-200 ease-out hover:bg-teal-700">Login</button>
			</div>
		</div>
		</>
	)
}