import  { useSelector } from 'react-redux'
import {Step, StepLabel, Stepper} from "@mui/material";

export function Cart() {
	let { value } = useSelector((state)=> state.cart)
	let steps = ["Review items", "Confirm details", "Checkout"]
	let activeStep = 0;
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
			<div className="bg-white w-full h-full">

			</div>
			<div className="bg-black">

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