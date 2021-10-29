import type { NextPage } from 'next'
import Contact from '../components/Contact'
import Jumbotron from '../components/Jumbotron'
import Script from 'next/script'
import ProductList from "../components/ProductList"
import {IProduct} from "../components/Product"
import { GetStaticProps } from 'next'
import Head from "next/head"
import iphone from "../public/iphone.png"

interface IProductListProps{
	products: IProduct[],

}

const Home = ({products} : IProductListProps) => {
	return (
		<div>
			<Head>
				<title>iPhone Shop</title>
				<link rel="preconnect" href="https://app.snipcart.com"/>
				<link rel="preconnect" href="https://cdn.snipcart.com"/>
				<link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"/>
			</Head>
			<main className="main">
				<Jumbotron />
				<ProductList products={products.slice(0,3)}/>
				<Contact />
				<ProductList products={products.slice(3,6)}/>
			</main>
			<Script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"/>
            	<div hidden id="snipcart" data-api-key="OWNlZTNlYmItZTU5OS00MmI4LThjOTAtMjY0NzAyYmI2ODAxNjM3NjIyMjY3MDMxMTIzMzUx"></div>
		</div>
	)
}

export default Home

export const products: IProduct[] = [
	{
		id: '1',
		name : "iphone X",
		price: 1300,
		description: "Superbe iPhone comme neuf ;)",
		url: '/api/products/iphonex',
		image : iphone
	},
	{
		id: '2',
		name : "iphone XS",
		price: 1500,
		description: "Superbe iPhone comme neuf ;)",
		url: '/api/products/iphonexs',
		image: iphone
	},
	{
		id: '3',
		name : "iphone XR",
		price: 2000,
		description: "Superbe iPhone comme neuf ;)",
		url: '/api/products/iphonexr',
		image: iphone
	},
	{
		id: '4',
		name : "iphone 12",
		price: 2200,
		description: "Superbe iPhone comme neuf ;)",
		url: '/api/products/iphonex',
		image : iphone
	},
	{
		id: '5',
		name : "iphone 12S",
		price: 2500,
		description: "Superbe iPhone comme neuf ;)",
		url: '/api/products/iphonexs',
		image: iphone
	},
	{
		id: '6',
		name : "Iphone 15",
		price: 9999,
		description: "Superbe iPhone comme neuf ;)",
		url: '/api/products/iphonexr',
		image: iphone
	},
]

export const getStaticProps: GetStaticProps = async (context) => {
	return {
		props: {
			products
		}
	}
}