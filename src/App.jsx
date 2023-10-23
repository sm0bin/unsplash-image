import './App.css'

function App() {

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="mx-auto w-full max-w-4xl">
          <div className="card p-6 w-full max-w-4xl shadow-2xl bg-base-100">
            <h1 className='font-bold text-2xl text-center'>Unsplash Image URL Converter</h1>
            <form className="card-body p-0">
              <div className='grid grid-cols-4 gap-6'>

                <div className="form-control col-span-3">
                  <label className="label font-bold">
                    <span className="label-text">Unsplash URL</span>
                  </label>
                  <input type="text" placeholder="https://unsplash.com/photos/..." className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label font-bold">
                    <span className="label-text">Image Resolution</span>
                  </label>
                  <input type="text" placeholder="1920x1080" defaultValue="1920x1080" className="input input-bordered" required />
                </div>
                <div className="form-control col-span-3">
                  <label className="label font-bold">
                    <span className="label-text">Converted URL</span>
                  </label>
                  <input type="text" placeholder="https://source.unsplash.com/..." className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label font-bold">
                    <span className="label-text">Copy Link</span>
                  </label>
                  <button className="btn btn-primary">Copy</button>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Convert</button>
              </div>
            </form>
          </div>
        </div >
      </div >
    </>
  )
}

export default App
