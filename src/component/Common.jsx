export default function Common(props) {
    return (
        <div className="header vh-100">
            <div className="container">
                <div className="row d-flex flex-column flex-md-row text-md-start text-sm-center content">
                    <div className="col pt-5 mt-4">
                        <h1>{props.name} <span className='text-primary'>Key2business</span></h1>
                        <h4 className="py-3">We have a good team that helps in your business</h4>
                        <a className="btn btn-outline-primary rounded-pill py-2 px-4" href={props.web}>{props.btnText}</a>
                    </div>
                    <div className="col">
                        <img className='rounded w-75 pt-5 mx-md-auto' src={props.headerImage} alt="person" />
                    </div>
                </div>
            </div>
        </div>
    )
}
