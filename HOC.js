import React,{useState} from 'react';

const HOC = InnerComponent => {
    class Temp extends React.Component{

        constructor(props){
            super(props);
            this.state = {
                name: "Ankur Kashyap"
            };
        }

        changeName = (name) => {
            this.setState( {
                name: name
            });
        }
        
        render() {
            return (<InnerComponent state={this.state} changeName={this.changeName} />)
        }
    }
    return Temp;
}

export default HOC;