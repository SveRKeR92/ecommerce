import Product, {IProduct} from "./Product"
import styles from "../styles/ProductList.module.scss"
import Contact from "./Contact"

interface IProductListProps {
      products: IProduct[]
}

const ProductList = (props: IProductListProps) => {
      return (
            <div className={styles.productlist}>
                  {props.products.map((product, index) => 
                        <Product key={index} product={product} />
                  )}
            </div>
      )
}

export default ProductList