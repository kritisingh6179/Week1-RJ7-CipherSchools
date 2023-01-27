import React from "react";
import Userdetails from "./Userdetails";
class Alluserlist extends React.Component {
    state={
        name:"priya",
    };
    allusers = [{
        name: "ajay",
        email: "abc@gmail.com",
        phoneno: "+0000",
    },
    {
        name: "rohit",
        email: "rst@gmail.com",
        phoneno: "+9999",
    },
    {
        name: "shrey",
        email: "def@gmail.com",
        phoneno: "+8888"

    }
    ];
   
    // let array = [
    // <Userdetails user={allusers[0]}/>,
    // <Userdetails user={allusers[1]}/>,
    // <Userdetails user={allusers[2]}/>,
//];
render(){
    setTimeout(()=>{
        this.setState({name:"Akash"});
    },  5000);
    return (
        <div>
            {/* {array} */}
            <h1>the name is {this.state.name}</h1>
            {this.allusers.map((user,index)=>(
                <Userdetails key={index} user={user}/>
            ))}
        </div>
    );
}
    
};
export default Alluserlist;