import { Toaster, toast } from 'react-hot-toast';
import './App.css'

function App() {

  const handleConversion = (e) => {
    e.preventDefault();
    const unsplashUrl = e.target.unsplashUrl.value.trim();
    const imageResolution = e.target.imageResolution.value.trim();
    if (unsplashUrl) {
      const imageId = unsplashUrl.substring(unsplashUrl.length - 11);
      const convertedUrl = `https://source.unsplash.com/${imageId}${imageResolution && `/${imageResolution}`}`;
      e.target.convertedUrl.value = convertedUrl;
      navigator.clipboard.writeText(convertedUrl);
      toast.success('Link Copied to Clipboard')
      if (unsplashUrl && convertedUrl) {
        e.target.copyButton.disabled = false;
      }
    } else {
      e.target.convertedUrl.value = "Please enter a valid Unsplash URL";
    }
  }


  const handleCopy = (e) => {
    e.preventDefault();
    const convertedUrl = e.target.form.convertedUrl.value;
    if (convertedUrl) {
      navigator.clipboard.writeText(convertedUrl);
    }
  }


  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <Toaster />
        <div className="mx-auto w-full max-w-4xl">
          <div className="card p-6 w-full max-w-4xl shadow-2xl bg-base-100">
            <h1 className='font-bold text-2xl text-center'>Unsplash Image URL Converter</h1>
            <form onSubmit={handleConversion} className="card-body p-0">
              <div className='grid grid-cols-4 gap-6'>

                <div className="form-control col-span-3">
                  <label className="label font-bold">
                    <span className="label-text">Unsplash URL</span>
                  </label>
                  <input type="text" name='unsplashUrl' placeholder="https://unsplash.com/photos/..." className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label font-bold">
                    <span className="label-text">Image Resolution</span>
                  </label>
                  <input type="text" name='imageResolution' placeholder="1920x1080" className="input input-bordered" />
                </div>
                <div className="form-control col-span-3">
                  <label className="label font-bold">
                    <span className="label-text">Converted URL</span>
                  </label>
                  <input type="text" name='convertedUrl' placeholder="https://source.unsplash.com/..." className="input input-bordered" readOnly />
                </div>
                <div className="form-control">
                  <label className="label font-bold">
                    <span className="label-text">Copy Link</span>
                  </label>
                  <button onClick={handleCopy} name='copyButton' className="btn btn-primary" disabled>Copy</button>
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

export default App;
