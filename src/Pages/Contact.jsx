export default function Contact() {
    return (
        <>
            <div className='my-5'>
                <h2 className='text-center'>Contact Us</h2>
            </div>
            <div className="container">
                <form className='w-50 mx-auto'>
                    <div class="mb-3">
                        <label for="email" class="form-label">Full Name</label>
                        <input type="email" class="form-control" id="email" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Phone</label>
                        <input type="email" class="form-control" id="email" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3">
                        <label for="text" class="form-label">Message</label>
                        <textarea class="form-control" id="text" rows="3"></textarea>
                    </div>
                    <div class="mb-3">
                        <button className='btn btn-outline-primary'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}