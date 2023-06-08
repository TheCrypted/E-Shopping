import {useEffect, useRef, useState} from "react";
import {CircularProgress, Rating} from "@mui/material";
import {Sidebar} from "../Components/Sidebar.jsx";

export function Home() {
	let [products, setProducts] = useState([])
	let [showCart, setShowCart] = useState(null)
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	let highlighted = useRef(null)
	async function getProducts() {
		const response = await fetch('https://fakestoreapi.com/products')
			.then(response => response.json())
			.then(json => setProducts(json))
	}
	useEffect(()=>{
		getProducts().catch(error => {setError(error)})
	},[])
	const handleMouseEnter = (id) => {
		setShowCart(id)
	}
	const handleMouseExit = () => {
		setShowCart(null)
	}

	if(error){
		return (
			<div>
				There was an error fetching products
			</div>
		)
	}

	return (
		<>
			<Sidebar />
			<div style={{backgroundImage: `url("https://storage.needpix.com/rsynced_images/rainbow-wallpaper.jpg")`}} className=" bg-cover h-full w-3/4 overflow-x-hidden scrollbar">
			<div className="w-full h-full bg-fixed bg-cover flex flex-wrap gap-4 ml-4 mt-4">
				{
					products.map((product) => {
						let title = product.title.slice(0, 45) === product.title ? product.title : product.title.slice(0, 45) + "..."
						return (
							<div key={product.id} className=" shrink-0 rounded-2xl w-[31.6%] h-3/5 bg-translucentWhite drop-shadow-xl backdrop-blur-xl grid grid-rows-[70%_20%_10%] grid-cols-[30%_70%] place-items-center">
								<div className="col-span-2 h-full rounded-t-2xl flex items-center justify-center bg-white" onMouseEnter={() =>{handleMouseEnter(product.id)}} onMouseLeave={() =>{handleMouseExit()}}>
									{isLoading && <CircularProgress />}
									{<img onLoad={()=>{setIsLoading(false)}} className="w-1/2 rounded-xl" src={product.image} alt="Product image"/>}
									{showCart === product.id &&( <div
										className="absolute w-full h-[70%] bg-translucentWhite backdrop-blur rounded-t-2xl flex items-center justify-center">
										<button
											className="bg-teal-700 text-white font-semibold hover:border-2 hover:drop-shadow-lg text-xl w-1/3 h-1/5 rounded-xl">Add
											to cart
										</button>
									</div>)}
								</div>
								<div className="text-white w-full h-full flex items-center justify-center font-bold text-3xl border-r-2 border-b-2">${Math.round(product.price)}</div>
								<div className="text-white w-full h-full flex items-center justify-center font-semibold text-xl pl-4 pr-4 border-b-2">
									{title}
								</div>
								<div className="col-span-2 w-full h-full flex items-center pl-4 text-gray-300 gap-4 text-sm justify-center">
									<Rating type="read-only" value={product.rating.rate} readOnly /> {product.rating.count} ratings
								</div>
							</div>
						)
					})
				}
			</div>
			</div>
			{/*{products.map(product => {*/}
			{/*	return <div className="h-4 w-4">{product.price}</div>*/}
			{/*})}*/}
		</>
	)
}