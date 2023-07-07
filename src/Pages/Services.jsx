import data from '../component/ServiceData'
import Card from '../component/Card'
export default function Service() {
    return (
        <>
            <h1 className="py-5 text-center">Our Services</h1>
            <div className="container">
                <div className='service my-3'>
                <div className='w-100 d-flex flex-wrap gap-3 justify-content-center'>
                    {data.map((v, i) => {
                        console.log(v);
                        return (
                            <div className='col-md-4 w-30 col-xl-3'>
                            <Card title={v.title} service={v.service} />
                            </div>
                        )
                    })}
                </div>
                </div>
            </div>
        </>
    )
}