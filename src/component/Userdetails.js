import React, { Component } from "react";
// const Userdetails=({user={}})=>{
//     //let user=props.user;
//     //let{user}=props;
//     return(
//         <div>
//             <h3>{user.name}</h3>
//             <h5>
//                 E-mail: {user.email}
//                 <br/>
//                 Phone number: {user.phoneno}
//             </h5>
//         </div>
//     );
// };
class Userdetails extends Component {
    user = this.props.user;
    render() {
        return (
            <div>
                <h3>{this.user.name}</h3>
                <h5>
                    E-mail: {this.user.email}
                    <br />
                    Phone number: {this.user.phoneno}
                </h5>

            </div>
        );
    }
}
export default Userdetails;