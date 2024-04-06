import React from "react";
class Son extends React.PureComponent {
    
    constructor(props){
        super(props);
        this.state = {

        }

    }


    render(){
        return (
            <div>
                Son
                {this.props.a}
                {this.props.children}
            </div>
        )
    }
}
export default Son;