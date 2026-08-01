// import UserClass from "./UserClass";

const Contact = () =>{

    return (
        <div>
            <h1 className="font-bold text-3xl m-4">Contact Us</h1>
            <form>
                <input className="p-2 m-4 border border-black" placeholder="name"/>
                <input className="p-2 m-4 border border-black" placeholder="Message"/>
                <button className="bg-blue-300 rounded-lg p-4 "> Submit </button>
            </form>
            {/* <UserClass name = {" Dipali Shrawanes from props"} location ={"Pune"}/> */}
        </div>
    )
}

export default Contact;