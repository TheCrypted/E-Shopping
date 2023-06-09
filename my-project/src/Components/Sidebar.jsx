import {useEffect, useState} from "react";

export function Sidebar() {
	const [categories, setCategories] = useState([]);
	const [error, setError] = useState(null);
	async function getCategories() {
		let result = await fetch('https://fakestoreapi.com/products/categories')
			.then(res=>res.json())
			.then(json=>setCategories(json)).catch(error => {setError(error)})
	}
	useEffect(()=>{
		getCategories().catch(error => {setError(error)})
	},[])


	if(error){
		return (
			<div>There was an error fetching categories</div>
		)
	}

	return (
		<>
			<div className="bg-black w-1/4 h-full bg-slate-900 p-2 pt-6 text-white flex  flex-wrap gap-4 pl-5">
				<div className="bg-orange-900 w-[95%] h-[48%] text-white rounded-xl p-3 text-xl drop-shadow-xl">
					Categories
					<div className="h-5/6 w-full bg-slate-900 drop-shadow-xl rounded-xl mt-3 grid items-center grid-rows-4">
						{
							categories.map((category) => (
								<div key={category} className="pl-3 w-full h-full pt-5 rounded-xl hover:bg-slate-800 hover:cursor-pointer">
									{category.charAt(0).toUpperCase() + category.slice(1)}
								</div>
							))
						}
					</div>
				</div>
				{/*<div className="bg-lime-900 w-[95%] h-[48%] text-white rounded-xl p-3 text-xl drop-shadow-xl">*/}
				{/*	Filters*/}
				{/*	<div className="h-5/6 w-full bg-slate-900 drop-shadow-xl rounded-xl mt-3 grid items-center grid-rows-4">*/}
				{/*		{*/}
				{/*			categories.map((category) => (*/}
				{/*				<div key={category} className="pl-3 w-full h-full pt-5 rounded-xl hover:bg-slate-800 hover:cursor-pointer">*/}
				{/*					{category.charAt(0).toUpperCase() + category.slice(1)}*/}
				{/*				</div>*/}
				{/*			))*/}
				{/*		}*/}
				{/*	</div>*/}
				{/*</div>*/}
			</div>
		</>
	)
}