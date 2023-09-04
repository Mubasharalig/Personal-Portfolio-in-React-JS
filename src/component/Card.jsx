export default function Card(props) {
    return (
            <div className="card  text-center">
                <img className="card-img-top" alt="service pic" src={props.service} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button style={{cursor:"pointer"}} className="btn btn-outline-primary">Check Now</button>
                </div>
            </div>
    )
}