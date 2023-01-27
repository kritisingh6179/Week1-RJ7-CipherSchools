import React from "react";


// function Test() {
//   return (
//     <div className="Test">
//       <h1>Helllo, I am Kriti </h1>
//     </div>
//   );
// }
class Test extends React.Component{
    state={
        isloggedin:false,
    };
        
    render(){
       // console.log("hello");
        return(
        // <div className="Test">
        //     <h1 style={{
        //         color:"yellow",
        //         backgroundColor:"black",
        //     }}>Helllo, I am Kriti </h1>
        //  </div>
        <div>
            {!this.state.isloggedin ?
            (<h1>you are not logged in</h1>)
            :
            (<h1>Congratulations, you are logged in</h1>)
            }
            <button onClick={(e)=>this.setState({isloggedin:!this.state.isloggedin})}>click</button>
        </div>

        );
    }
}

export default Test;
