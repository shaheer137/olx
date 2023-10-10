import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Card from "../components/Card"

function Products() {
    const [products, setProducts] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => setProducts(res))
    }, [])

    if (!products) {
        return <div>Loading...</div>
    }

    return <div>

        {products.map(item => {
            return <Card title={item.title} price={item.price} image={item.image} click={() => navigate('/products/' + item.id)} />
        })}
    </div>

}

export default Products