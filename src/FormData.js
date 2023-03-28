import React , {useState} from 'react'

const FormData = () => {
    const [FirstName , setFirstName] = useState('')
    const [lastName , setLastName] = useState('')
    const [address , setAddress] = useState('')
    const [pincode , setPincode] = useState('')
    const [mobileNumber , setMobileNumber] = useState('')
    const submitHandler = (e)=>{
        e.preventDefault()
        let obj = {
          FirstName : FirstName,
          lastName : lastName,
          address : address,
          pincode : pincode ,
          mobileNumber : mobileNumber
        }
        console.log(obj)
        setFirstName('')
        setLastName('')
        setAddress('')
        setPincode('')
        setPincode('')
    }
  return (
    <>
      <div className="container">
        <div>
          <div className="row">
            <div className="col-md-12">
              <card className="card p-5 m-5">
                <form>
                  <div>
                    <input
                      className="form-control w-full mb-3"
                      type="text"
                      name="FirstName"
                      required
                      placeholder="FirstName"
                      value={FirstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    ></input><br/>
                    <input
                      className="form-control w-full mb-3"
                      type="text"
                      name="lastName"
                      required
                      placeholder="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    ></input><br/>
                    <input
                      className="form-control w-full mb-3"
                      type="text"
                      name="address"
                      required
                      placeholder="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    ></input><br/>
                    <input
                      className="form-control w-full mb-3"
                      type="text"
                      name="pincode"
                      required
                      placeholder="pincode"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                    ></input><br/>
                    <input
                      className="form-control w-full mb-3"
                      type="text"
                      name="mobileNumber"
                      required
                      placeholder="mobileNumber"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                    ></input><br/>
                    <button
                      type="submit"
                      className="btn bg-primary text-white"
                      onClick={submitHandler}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormData
