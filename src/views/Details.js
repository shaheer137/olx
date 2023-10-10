import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Details() {
    const params = useParams()
    const [details, setDetails] = useState()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/' + params.id)
            .then(res => res.json())
            .then(res => setDetails(res))
    }, [])

    if (!details) {
        return <div>Loading...</div>
    }

    return <center>
        <div className="details">
            <img width={220} height={220} src={details.image} />
            <div>
                <h1>Price: ${details.price}</h1>
                <h1>{details.title}</h1>
            </div>
            <div>
                <h2 style={{ color: 'red' }}>DESCRIPTION: {details.description}</h2>
            </div>
        </div>
    </center>


}

export default Details