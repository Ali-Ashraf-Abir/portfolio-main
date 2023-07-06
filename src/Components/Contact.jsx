
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

const Contact = () => {


    const handleContact=(event)=>{

        event.preventDefault()

        const form=event.target 
        const email=form.email.value 
        const message=form.message.value

        const data={email,message}

        console.log(data)

    }



    return (
        <div>
            <div name="Contact" className="text-center text-[5vh] border-b-2 border-[rgb(255,255,255,0.1)]">
                Contact Me
            </div>
            <div className="flex justify-center items-center">
            <div className="hero min-h-screen bg-[#050a18]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Contact Now!</h1>
      <p className="py-6">Email me if you have anything to say,Thank you :)</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleContact}>
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea placeholder="Message" name='message' className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>


        </div>
        <div className="form-control mt-6">
          <input type='submit'  className="btn btn-primary" name='submit'/>
        </div>
      </div>
      </form>
    </div>
  </div>
</div>
<div className="">
    
</div>
            </div>
            <div className="text-[5vh] text-center border-2 border-[rgb(255,255,255,0.1)] p-6 "><Link to="nav" spy={true} smooth={true} offset={50} duration={500} className="flex justify-center items-center cursor-pointer">Top <FaArrowUp></FaArrowUp></Link></div>
        </div>
    );
};

export default Contact;