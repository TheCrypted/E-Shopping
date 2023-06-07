import {useState} from "react";

export function Home() {
	let [products, setProducts] = useState([])
	async function getProducts() {
		const response = await fetch("https://api.escuelajs.co/api/v1/products")
			.then(response => response.json())
			.then(products => {
				setProducts(products)
			})
	}
	//Capture in useEffect
	getProducts()
	return (
		<>
			{products.map(product => {
				return <div className="h-4 w-4">{product.price}</div>
			})}
		</>
	)
}