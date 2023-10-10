function Card(props) {
    const { click, image, title, price } = props
    return (
        <div className="container"
            onClick={click}
            style={{ background: 'white', boxShadow: 'black 7px 13px 17px -2px', margin: 5 }}>
            <div className="card"> <img width={190} height={190} src={image} />
                <h3>{title}</h3>
                <h4>Price AED: ${price}</h4>
            </div>
        </div>
    )
}

export default Card