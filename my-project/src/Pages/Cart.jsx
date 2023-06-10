import {useDispatch, useSelector} from 'react-redux'
import {Rating, Step, StepLabel, Stepper} from "@mui/material";
import {addToCart, removeFromCart} from "../features/cartSlice.js";
import {getCartCost, getCartNumber} from "../Utils/Utils.js";
import {useState} from "react";

export function Cart() {
	let { value } = useSelector((state)=> state.cart);
	let dispatch = useDispatch();
	let steps = ["Review items", "Confirm details", "Checkout"];
	let activeStep = 0;
	let tax = Math.round(7/100* getCartCost(value));
	let cartCost = getCartCost(value);
	let shipping = Math.round(5/100* getCartCost(value));
	let subtotal = tax + cartCost + shipping;
	let [showItems, setShowItems] = useState(false);

	const handleClick = () => {
		setShowItems(!showItems);
	}

	return (
		<>
		<div className="w-full h-full bg-slate-900 p-6 grid grid-cols-[75%_25%] grid-rows-[15%_85%]">
			<div className="col-span-2 pt-4">
			<Stepper activeStep={activeStep}>
				{
					steps.map((step, index)=> {
					return (<Step key={step}>
						<StepLabel StepIconProps={{ style: { fontSize: '40px', color: index === activeStep? "teal": "rgba(50, 50, 50, 0.5)" } }}>
							<div className="text-white text-xl">{step}</div>
						</StepLabel>
					</Step>)
				})
				}
			</Stepper>
			</div>
			<div className="w-full h-full overflow-x-auto scrollbar">{
				value.map((valu, index) => {
					let val = valu.product
					let description = val.description.length < 270 ? val.description : val.description.slice(0, 270)+"..."
					return (
					<div key={val.id} className="drop-shadow-xl bg-translucentWhite w-[95%] h-2/5 relative left-[2.5%] rounded-2xl mb-6 grid grid-rows-[35%_35%_30%] grid-cols-[1fr_4fr_1fr]">
						<img src={val.image} alt="item image" className="w-full row-span-3 h-full bg-no-repeat bg-contain rounded-l-xl"/>
						{/*<div style={{backgroundImage: "url(https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg)"}} className="w-full row-span-2 h-full bg-cover rounded-l-xl"></div>*/}
						<div className="text-white font bold text-2xl pl-4 flex items-end pb-4">{val.title}</div>
						<div className=" row-span-3 text-teal-600 flex items-center justify-center font-bold text-4xl">${val.price}</div>
						<div className=" text-gray-500 pl-4 pr-4 text-lg">
							{description}
						</div>
						<div className=" text-gray-500 pl-4 pr-4 text-lg {/*border-t-2 border-gray-600*/} grid grid-cols-2">
							<div className="flex items-center justify-center">
								<Rating type="read-only" value={val.rating.rate} readOnly /> {val.rating.count} ratings
							</div>
							<div className="flex items-center justify-center text-white text-xl">
								Quantity:
								<button className="w-1/6 h-3/5 m-2 hover:bg-slate-500 bg-teal-900 rounded-xl ml-6" onClick={()=> {
									dispatch(removeFromCart({product: val, quantity: 1}))}
								}>-</button>
								{valu.quantity}
								<button className="w-1/6 h-3/5 m-2 hover:bg-slate-500 bg-teal-900 rounded-xl" onClick={()=> {
									dispatch(addToCart({product: val, quantity: 1}))}
								}>+</button>
							</div>
						</div>
					</div>
					)}
				)}

			</div>
			<div className="bg-teal-800 h-[90%] rounded-2xl ml-4 grid grid-rows-[1fr_4fr_1fr] drop-shadow-xl">
				<button className="m-4 bg-yellow-800 text-white text-2xl rounded-xl hover:bg-amber-600 font-semibold drop-shadow-lg transition-colors duration-300">Place Order</button>
				<div className="text-white">
					<div className="grid grid-cols-2 pl-4 pr-4 pb-2 hover:text-lg  hover:cursor-pointer transition-all duration-300" onClick={() => {
						setShowItems(!showItems);}
					}>
						↓ Items({getCartNumber(value)}): <p className="text-right">${cartCost}</p>
					</div>
					{ showItems &&
						value.map((valu) => {
							let val = valu.product
							let title = val.title.length < 23 ? val.title : val.title.slice(0, 23)+"..."
							return (
								<div className=" relative left-[15%] mb-1 h-[8%] w-[85%] pl-2 border-l-2 pr-4 grid grid-cols-[70%_30%] text-teal-400 items-center">
									{title} <p className="text-right">${val.price} x {valu.quantity}</p>
								</div>
							)
						})
					}

					<div className="  grid grid-cols-2 pl-4 pr-4 pb-2 pt-3">
						Shipping and Handling: <p className="text-right">${shipping}</p>
					</div>
					<div className="grid grid-cols-2 pl-4 pr-4 pb-2">
						Total before tax: <p className="text-right">${cartCost}</p>
					</div>
					<div className="grid grid-cols-2 pl-4 pr-4 pb-2">
						Estimated tax amount: <p className="text-right">${tax}</p>
					</div>
				</div>

				<div className="border-t-2 border-slate-900">
					<div className="grid grid-cols-2 p-4 pt-7 text-white text-xl ">
						Subtotal: <p className="text-right">${subtotal}</p>
					</div>
				</div>
			</div>

			{/*{*/}
			{/*	value.map((cartItem)=>{*/}
			{/*		console.log(cartItem)*/}
			{/*		return (*/}
			{/*			<div className="text-white" key={cartItem.product.id}>{cartItem.product.title}</div>*/}
			{/*		)*/}
			{/*	})*/}
			{/*}*/}
		</div>
		</>
	)
}