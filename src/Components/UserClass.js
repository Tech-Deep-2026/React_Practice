
import React from "react";

class UserClass extends React.Component {

    //Calling props in Class Bsed Components
    constructor(props) {
        super(props);   
        console.log(props);

        // calling STATE variable in class Component
        this.state = {
            count: 0,
            count2: 1,
        }
    }
    render() {

        // Destructuring on fly 
        const { name, location } = this.props;
        const { count2 } = this.state;

        return (
            <>
                <div className="user-card">
                    <h2>Count:{this.state.count}</h2>
                    {/* <button
                        onClick={
                            this.setState({
                                count: this.state.count + 1,
                            })
                        }
                    >
                        Count Increase
                    </button> */}
                <h2>Name:{this.props.name}</h2>
                <h4>Location:{this.props.location}</h4>
                    <h4>Conatct: DipaliSh12</h4>
                </div>

                <div className="user-card">
                    <h2>Count:{count2}</h2>
                    <h2>Name:{name}</h2>
                    <h4>Location:{location}</h4>
                    <h4>Conatct: DipaliSh12</h4>
                </div>
            </>
        );
    }
}
export default UserClass;
