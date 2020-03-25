import React, {Component} from 'react';
import axios from 'axios';

class Service extends Component{
    constructor(props){
        super();
        this.state = {
            endpoint: 'http://mohamed5544.pythonanywhere.com/api/service/',
            data : []
        }
    }
    componentDidMount(){
        axios.get(this.state.endpoint)
        .then(edu=>{
            if(edu){
                this.setState({
                    data: edu.data
                });
            }
        }).catch(err=>{
            if (err) {
                console.log(err);
            }
        })
    }
    render(){
        let data = this.state.data.map(serv=>{
            return (
                    <div className="col-sm-6 col-md-6 col-lg-4 text-center" key={serv.id}>
                        <div className="iconbox margin-b-30">
                            <i className={"line-icon fa fa-"+ serv.awesome} style={{fontSize:"50px",color:"#FFA804"}} ></i>
                            <h5 className="margin-tb-30"><b>{serv.title}</b></h5>
                            <p>{serv.desc}</p>
                        </div>{/*<!-- counter -->*/}
                    </div>//{/*<!-- col-md-4 -->*/}
                )
        })
        return(
                <section className="iconboxes-section section" id="counter">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="heading">
                                <h4><b>Services</b></h4>
                            </div>
                        </div>{/*<!-- col-sm-12 -->*/}
                        
                        {data}        
                        
                    </div>{/*<!-- row -->*/}
                </div>{/*<!-- container -->*/}
            </section>//{/*<!-- progression-section -->*/}

                
        )
    }
}

export default Service;
